// Vijayawada Utsav interaction layer: loader, custom cursor, magnetic buttons, scroll choreography,
// programme panels, competition finder, detail overlay, poster viewer and registration flow.
// Plain JS + Web APIs; no animation library is required.
import { LINKS, FEST, PROGS, EVENTS, GENERAL, IMG, LOGO } from '../data/events.js';

let started = false;
export function initExperience(){
if (started) return; started = true;

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),lerp=(a,b,t)=>a+(b-a)*t;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const root=document.documentElement;
const P=Object.fromEntries(PROGS.map(p=>[p.id,p]));
const pname=p=>[p.pre,p.main,p.post].filter(Boolean).join(' ');
const pcount=id=>EVENTS.filter(e=>e.p===id).length;
function rng(seed){let s=seed*9301+49297;return()=>((s=(s*9301+49297)%233280)/233280)}
function edge(seed,n,base,amp){const r=rng(seed),pts=[];for(let i=0;i<=n;i++)pts.push(`${(i/n*100).toFixed(2)}% ${(base+r()*amp).toFixed(2)}%`);return pts}
const sheet=(seed,base)=>`polygon(${edge(seed,22,base,7).join(',')},100% 100%,0% 100%)`;
const allTorn=(seed,a=2.5)=>{const r=rng(seed),p=[],n=12;for(let i=0;i<=n;i++)p.push(`${i/n*100}% ${r()*a}%`);for(let i=1;i<=n;i++)p.push(`${100-r()*a/2}% ${i/n*100}%`);for(let i=n-1;i>=0;i--)p.push(`${i/n*100}% ${100-r()*a}%`);for(let i=n-1;i>0;i--)p.push(`${r()*a/2}% ${i/n*100}%`);return`polygon(${p.join(',')})`};
root.style.setProperty('--sh-hidden',sheet(5,106));root.style.setProperty('--sh-shown',sheet(5,-9));
root.style.setProperty('--ld-shown',`polygon(0% 0%,100% 0%,${edge(9,22,109,-7).reverse().join(',')})`);
root.style.setProperty('--ld-gone',`polygon(0% 0%,100% 0%,${edge(9,22,-9,-7).reverse().join(',')})`);
root.style.setProperty('--rclip',allTorn(21,2));root.style.setProperty('--fclip',allTorn(3,6));root.style.setProperty('--pclip',allTorn(40,1.2));
$$('.sheet').forEach((s,i)=>s.style.setProperty('--tear',`polygon(${edge(i*7+3,30,15,75).join(',')},100% 100%,0% 100%)`));
$$('.logo-img').forEach(i=>i.src=LOGO);
$$('.poster-img').forEach(i=>i.src=IMG[i.dataset.key]);
$$('.xb-fan img').forEach(i=>i.src=IMG[i.dataset.k]);root.style.setProperty('--xclip',allTorn(77,5));
let VH=innerHeight,VW=innerWidth;
const setVH=()=>{VH=innerHeight;VW=innerWidth;root.style.setProperty('--vh',VH/100+'px')};setVH();
let lastW=innerWidth;addEventListener('resize',()=>{if(Math.abs(innerWidth-lastW)>40||!('ontouchstart' in window)){lastW=innerWidth;setVH();layout()}else{VW=innerWidth}});

/* ---------- loader ---------- */
const loader=$('#loader'),hero=$('#top');
let seen=false;try{seen=sessionStorage.getItem('vu-seen')==='1';sessionStorage.setItem('vu-seen','1')}catch(e){}
function startHero(){hero.classList.remove('intro-anim');hero.classList.add('intro-go')}
if(reduce||seen){loader.remove();startHero()}
else{setTimeout(()=>{loader.classList.add('gone');setTimeout(startHero,250);setTimeout(()=>loader.remove(),900)},1150)}

/* ---------- hero collage ---------- */
const collage=$('#collage');
const order=['idol','crown','champs','quiz','talent','family','wonder'];
const spotsD=[[.02,.06,-6,-1.2,-.8,.5],[.40,-.02,-2,0,-1.3,.3],[.76,.04,5,1.2,-.9,.7],[.00,.43,4,-1.5,0,.8],[.80,.38,-5,1.5,.1,.45],[.03,.76,-3,-1.2,1,.65],[.77,.72,6,1.2,1,.55]];
const spotsM=[[.00,.00,-5,-1,-1,.5],[.50,.005,4,1,-1,.7],[.00,.665,3,-1.2,.3,.6],[.48,.655,-4,1.2,.3,.5],[.00,.835,-2,-1,1,.7],[.33,.845,3,0,1.2,.4],[.64,.83,-3,1,1,.6]];
const sws=order.map((id,i)=>{const p=P[id],a=document.createElement('a');a.className='sw';a.href='#explore';a.dataset.cursor='Explore';
 a.style.cssText=`--c:${p.color};--i:${i+1};clip-path:${allTorn(i+11,4)}`;
 const n=pcount(id);a.innerHTML=`<span class="sw-in">${p.pre?`<span class="pre">${p.pre}</span>`:''}<span class="main">${p.main}</span>${p.post?`<span class="post">${p.post}</span>`:''}<span class="cnt">${n} competition${n>1?'s':''}</span></span>`;
 a.setAttribute('aria-label',`${pname(p)}, ${n} competitions`);a.addEventListener('click',()=>setProg(id,true));collage.appendChild(a);return a});
const paper=$('#paper'),strip=$('#strip'),bigword=$('#bigword');
paper.style.clipPath=allTorn(99,3);strip.style.clipPath=allTorn(42,8);
let heroGeo=null;
function heroLayout(){const w=collage.clientWidth,h=collage.clientHeight,m=w<760,sp=m?spotsM:spotsD;
 heroGeo=sws.map((el,i)=>{const [x,y,r,vx,vy,d]=sp[i];return{el,x:x*w,y:y*h,r,vx,vy,d}});
 if(m){const py=h*.15;paper.dataset.base=JSON.stringify({x:w*.09,y:py});strip.dataset.base=JSON.stringify({x:w*.5,y:py+paper.offsetHeight-18})}else{strip.style.top=(h*.45+paper.offsetHeight/2-26)+'px'}}
/* mouse for hero */
let mx=0,my=0,tmx=0,tmy=0;
if(fine&&!reduce)hero.addEventListener('pointermove',e=>{tmx=e.clientX/VW*2-1;tmy=e.clientY/VH*2-1});

/* countdown */
/* Counts whole calendar days in India time (IST) until 10 October, so it drops by one every midnight IST:
   27 Sep = 13 days, 28 Sep = 12 days, 29 Sep = 11 days ... 9 Oct = 1 day. Rechecks every minute. */
function tickCountdown(){const k=$('#cd-k'),v=$('#cd');
 const today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Kolkata'});
 const dayNum=s=>Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10))/864e5;
 const left=dayNum(FEST.start.slice(0,10))-dayNum(today),end=dayNum(FEST.end.slice(0,10))-dayNum(today);
 if(left>0){k.textContent='Starts in';v.textContent=left+(left===1?' day':' days')}
 else if(end>=0){k.textContent='Status';v.textContent='Happening now'}
 else{k.textContent='Status';v.textContent='Concluded'}}
tickCountdown();setInterval(tickCountdown,60000);

/* ---------- manifesto words ---------- */
const mani=$('#mani');const HL=['Forty-six','Seven','sixty-plus,','six-year-olds'];
mani.innerHTML=mani.textContent.split(' ').map(w=>`<span class="w${HL.includes(w)?' hl':''}">${w}</span>`).join(' ');
const mwords=$$('#mani .w');

/* ---------- programme panels ---------- */
const track=$('#track');
PROGS.forEach((p,i)=>{const n=pcount(p.id),segs=[...new Set(EVENTS.filter(e=>e.p===p.id).map(e=>e.seg))];
 const d=document.createElement('article');d.className='pan pan-p';d.style.setProperty('--c',p.color);d.style.clipPath='';
 d.innerHTML=`<div class="post-wrap"><button class="pimg tilt" type="button" data-view="comp:${i}" data-cursor="View" aria-label="View the ${esc(pname(p))} poster"><img src="${IMG[p.poster]}" alt="" loading="lazy"></button></div>
 <div><span class="pno">Programme ${i+1} of 7</span><h3>${p.pre?`<small>${p.pre}</small>`:''}${p.main}${p.post?`<small>${p.post}</small>`:''}</h3>
 <p class="ptag">${esc(p.tag)}. ${n} competition${n>1?'s':''}.</p><ul class="segs">${segs.map(s=>`<li>${esc(s)}</li>`).join('')}</ul>
 <a class="btn btn-line mag" href="#explore" data-cursor="Explore" data-prog="${p.id}"><span class="t">See ${n>1?'all '+n:'the competition'}</span><span class="ar" aria-hidden="true"></span></a></div>`;
 track.appendChild(d)});
const endP=document.createElement('div');endP.className='pan pan-end';
endP.innerHTML=`<div><span class="kick" style="color:var(--marigold)">That's all seven</span><h3 style="margin:14px 0 22px">46 ways in. Find yours.</h3><a class="btn btn-gold mag burst" href="#explore" data-cursor="Explore"><span class="t">Browse every competition</span><span class="ar" aria-hidden="true"></span></a></div>`;
track.appendChild(endP);
track.addEventListener('click',e=>{const a=e.target.closest('[data-prog]');if(a)setProg(a.dataset.prog,true)});
const progsSec=$('#programmes'),pstick=$('#pstick'),pword=$('#pword'),pans=$$('.pan-p');
let progNative=false;
function progLayout(){progNative=reduce||VW<760;progsSec.classList.toggle('native',progNative);$('#phint').innerHTML=progNative?'Swipe sideways <i></i>':'Keep scrolling <i></i>';
 if(!progNative){progsSec.style.height=(track.scrollWidth-VW+VH)+'px'}else{progsSec.style.height='';pans.forEach(p=>p.style.setProperty('--rv',1))}}
if(progNative||true)pstick.addEventListener('scroll',()=>{if(progNative)pans.forEach(p=>{const r=p.getBoundingClientRect();p.style.setProperty('--rv',clamp((VW-r.left)/(VW*.7)).toFixed(3))})},{passive:true});

/* ---------- explorer ---------- */
const st={prog:'all',seg:'all',q:''};
const tabs=$('#tabs'),ind=$('#tabind'),rowsEl=$('#rows');
tabs.insertAdjacentHTML('beforeend',[`<button class="tab" role="tab" data-id="all" aria-selected="true" style="--c:var(--marigold)"><i style="--c:var(--marigold)"></i>All<sup>${EVENTS.length}</sup></button>`,...PROGS.map(p=>`<button class="tab" role="tab" data-id="${p.id}" aria-selected="false" style="--c:${p.color}"><i></i>${esc(pname(p))}<sup>${pcount(p.id)}</sup></button>`)].join(''));
function moveInd(){const t=tabs.querySelector('[aria-selected="true"]');ind.style.width=t.offsetWidth+'px';ind.style.transform=`translateX(${t.offsetLeft}px)`;ind.style.setProperty('--c',t.style.getPropertyValue('--c'))}
tabs.addEventListener('click',e=>{const t=e.target.closest('.tab');if(t)setProg(t.dataset.id,false)});
tabs.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft'].includes(e.key))return;const ts=$$('.tab'),i=ts.findIndex(t=>t.getAttribute('aria-selected')==='true'),n=ts[(i+(e.key==='ArrowRight'?1:-1)+ts.length)%ts.length];setProg(n.dataset.id,false);n.focus()});
function setProg(id,jump){st.prog=id;st.seg='all';$$('.tab').forEach(t=>{const on=t.dataset.id===id;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;if(on)tabs.scrollTo({left:t.offsetLeft-tabs.clientWidth/2+t.offsetWidth/2,behavior:reduce?'auto':'smooth'})});moveInd();refresh();
 if(id!=='all')setFeat(id,null);else setFeat(featProg||'idol',null);if(typeof restartTick==='function')restartTick()}
const q=$('#q'),qc=$('#qclear');let qt;
q.addEventListener('input',()=>{qc.hidden=!q.value;clearTimeout(qt);qt=setTimeout(()=>{st.q=q.value.trim().toLowerCase();refresh()},140)});
qc.onclick=()=>{q.value='';qc.hidden=true;st.q='';refresh();q.focus()};
$('#segs').addEventListener('click',e=>{const c=e.target.closest('.segchip');if(c){st.seg=c.dataset.seg;refresh()}});
EVENTS.forEach(e=>e._h=[e.name,e.desc,e.seg,e.fmt,pname(P[e.p]),e.elig||'',e.aka||'',...e.rules].join(' ').toLowerCase());
let current=[];
function filtered(){const w=st.q.split(/\s+/).filter(Boolean);return EVENTS.filter(e=>(st.prog==='all'||e.p===st.prog)&&(st.seg==='all'||e.seg===st.seg)&&w.every(x=>e._h.includes(x)))}
function rowHTML(e,i){const p=P[e.p];return`<li class="row enter" style="--c:${p.color};transition-delay:${Math.min(i,14)*30}ms"><button class="row-btn" type="button" data-n="${e.n}" data-cursor="Explore"><span class="r-no">${String(e.n).padStart(2,'0')}</span><span class="r-name">${esc(e.name)}</span><span class="r-desc">${esc(e.desc)}${st.prog==='all'?` <span class="sr">, ${esc(pname(p))}</span>`:''}</span><span class="r-meta"><span>${esc(e.fmt)}</span>${e.time?`<span>${e.time}</span>`:''}<i class="r-go" aria-hidden="true">→</i></span></button></li>`}
function refresh(){
 const inProg=EVENTS.filter(e=>st.prog==='all'||e.p===st.prog),segs=st.prog==='all'?[]:[...new Set(inProg.map(e=>e.seg))];
 $('#segs').innerHTML=segs.length>1?[['all','All'],...segs.map(s=>[s,s])].map(([v,l])=>`<button class="segchip" data-seg="${esc(v)}" aria-pressed="${st.seg===v}">${esc(l)}</button>`).join(''):'';
 current=filtered();
 $('#rmeta').textContent=`${current.length} competition${current.length===1?'':'s'}${st.prog==='all'?'':' in '+pname(P[st.prog])}${st.q?` matching “${q.value.trim()}”`:''}`;
 const old=$$('#rows .row');rowsEl.style.minHeight=rowsEl.offsetHeight+'px';old.forEach(r=>r.classList.add('out'));
 setTimeout(()=>{rowsEl.innerHTML=current.length?current.map(rowHTML).join(''):`<li class="empty"><p>Nothing matches “${esc(q.value.trim())}” here.</p><button class="btn btn-line" type="button" id="reset"><span class="t">Show all competitions</span><span class="ar" aria-hidden="true"></span></button></li>`;
  const r=$('#reset');if(r)r.onclick=()=>{q.value='';qc.hidden=true;st.q='';setProg('all')};
  requestAnimationFrame(()=>requestAnimationFrame(()=>{$$('#rows .row').forEach(r=>r.classList.remove('enter'));rowsEl.style.minHeight=''}))},old.length&&!reduce?200:0)}
rowsEl.addEventListener('click',e=>{const b=e.target.closest('.row-btn');if(b)openOv(+b.dataset.n,b)});
/* featured poster */
const fframe=$('#fframe'),fBase=$('#fimg'),fTop=document.createElement('img'),fTick=document.createElement('i');
fTop.className='nx';fTop.alt='';fTick.className='feat-tick';fframe.append(fTop,fTick);
let featProg=null,swapT=null,hoverList=false,loopI=0;
function showPoster(pid){if(featProg===pid)return;featProg=pid;const src=IMG[P[pid].poster];
 if(reduce||!fBase.getAttribute('src')){fBase.src=src;return}
 clearTimeout(swapT);fTop.style.transition='none';fTop.classList.remove('go');fTop.src=src;void fTop.offsetWidth;fTop.style.transition='';fTop.classList.add('go');
 swapT=setTimeout(()=>{fBase.src=src;fTop.style.transition='none';fTop.classList.remove('go');void fTop.offsetWidth;fTop.style.transition=''},600)}
function setFeat(pid,name){const p=P[pid];$('#fprog').textContent=pname(p);$('#fprog').style.setProperty('--c',p.color);
 const fn=$('#fname');const txt=name||`${pcount(pid)} competition${pcount(pid)>1?'s':''}`;if(fn.textContent!==txt){fn.classList.add('sw8');setTimeout(()=>{fn.textContent=txt;fn.classList.remove('sw8')},150)}
 showPoster(pid)}
/* continuous poster loop: cycles all programme posters while browsing "All"; holds on the chosen programme otherwise */
const LOOP_MS=3600;
function restartTick(){fTick.classList.remove('run');void fTick.offsetWidth;if(st.prog==='all'&&!hoverList&&!reduce)fTick.classList.add('run')}
setInterval(()=>{if(hoverList||document.hidden||st.prog!=='all')return;const r=fframe.getBoundingClientRect();if(r.bottom<0||r.top>VH)return;
 loopI=(PROGS.findIndex(p=>p.id===featProg)+1)%PROGS.length;setFeat(PROGS[loopI].id,null);restartTick()},LOOP_MS);
rowsEl.addEventListener('pointerover',e=>{const b=e.target.closest('.row-btn');if(!b)return;const ev=EVENTS.find(x=>x.n===+b.dataset.n);setFeat(ev.p,ev.name)});
rowsEl.addEventListener('focusin',e=>{const b=e.target.closest('.row-btn');if(!b)return;const ev=EVENTS.find(x=>x.n===+b.dataset.n);setFeat(ev.p,ev.name)});
rowsEl.addEventListener('pointerenter',()=>{hoverList=true;fTick.classList.remove('run')});
rowsEl.addEventListener('pointerleave',()=>{hoverList=false;setFeat(st.prog==='all'?featProg||'idol':st.prog,null);restartTick()});

/* ---------- overlay ---------- */
const ov=$('#ov'),ovs=$('#ovscroll'),ovf=$('#ovfoot');let ovCur=null,ovOpen=false,ovFrom=null;
function regInfo(e){const p=P[e.p];if(p.reg==='crown')return{kind:'pending'};if(p.reg==='wonder')return{kind:'wonder',url:LINKS.wonderForm};return{kind:'main',url:LINKS.mainForm,section:p.formSection,opt:e.form}}
function fillOv(n){const e=EVENTS.find(x=>x.n===n),p=P[e.p],ri=regInfo(e);ovCur=n;
 ov.style.setProperty('--c',p.color);$('#ovimg').src=IMG[p.poster];$('#ovimg').alt=`${pname(p)} poster`;$('#ovbig').textContent=p.main;
 $('#ovposter').dataset.view='comp:'+PROGS.indexOf(p);$('#ovposter').setAttribute('aria-label',`View the ${pname(p)} poster`);
 $('#ovcrumb').textContent=`${pname(p)}  /  No. ${e.n}`;
 const sg=p.guides[e.seg]||p.guides['*']||[],sibs=EVENTS.filter(x=>x.p===e.p);
 const facts=[['Programme',pname(p)],['Segment',e.seg],['Format',e.fmt],['Time limit',e.time||'Not specified'],['Eligibility',e.elig||(e.p==='wonder'?'Women':'Open, judged by age group')],['When and where','10–18 Oct, Tummalapalli Kalakshetram']];
 let i=0;const s=()=>`style="--i:${i++}"`;
 ovs.innerHTML=`<span class="ov-chip st" ${s()}>${esc(pname(p))}</span><h2 class="ov-title st" id="ov-title" ${s()}>${esc(e.name)}</h2><p class="ov-sub st" ${s()}>${esc(e.desc)}</p>
 <dl class="facts st" ${s()}>${facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
 ${e.aka?`<div class="note st" ${s()}>Listed as ${esc(e.aka)}. Same competition.</div>`:''}
 ${e.rules.length?`<div class="st" ${s()}><h4>Rules for ${esc(e.name)}</h4><ul class="rl">${e.rules.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></div>`:''}
 ${sg.length?`<div class="st" ${s()}><h4>${p.guides['*']?esc(pname(p)):esc(e.seg)} guidelines</h4><ul class="rl">${sg.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></div>`:''}
 ${sibs.length>1?`<div class="st" ${s()}><h4>More in ${esc(pname(p))}</h4><div class="sibs">${sibs.map(x=>`<button type="button" data-sib="${x.n}" aria-current="${x.n===e.n}">${esc(x.name)}</button>`).join('')}</div></div>`:''}`;
 if(ri.kind==='pending'){ovf.innerHTML=`<div class="note" style="margin-top:0">Crown of Vijayawada has its own registration, separate from the main form. Its link hasn't been published in the guidelines yet. Join the WhatsApp group or check vijayawadautsav.com for it.</div><a class="btn btn-main ext mag" href="${LINKS.whatsapp}" target="_blank" rel="noopener" data-cursor="Join"><span class="t">Join the WhatsApp group</span><span class="ar" aria-hidden="true"></span></a>`}
 else{const tips=ri.kind==='main'?[`Under <b>${esc(ri.section)}</b>, tick <span class="opt">${esc(ri.opt)}</span>.`,`Choose your age category: Sub Junior (6–12), Junior (13–18) or Senior (19+).`]:[`Wonder Women has its own form. This is the link printed as a QR code on the Wonder Women poster.`,`Say which competition you're entering: <span class="opt">${esc(e.name)}</span>.`];
  if(/Group|Team|Band/.test(e.fmt))tips.push('Every member of your group registers separately.');
  if(e.fmt==='Couple')tips.push('Both partners take part together.');
  tips.push('After you submit, tap the WhatsApp group link to join.');
  ovf.innerHTML=`<div class="rp" id="rp"><div><h5>Before you open the form</h5><ol>${tips.map(t=>`<li>${t}</li>`).join('')}</ol></div></div>
  <button class="tk tk-full mag" type="button" id="regbtn" aria-controls="rp" aria-expanded="false" data-cursor="Register"><span class="tk-main"><small class="tk-k">Competition no. ${e.n}, ${esc(e.fmt)}</small><span class="tk-l t">Register for ${esc(e.name)}</span><i class="tk-shine" aria-hidden="true"></i></span><span class="tk-stub" aria-hidden="true"><i class="tk-ring"></i><i class="tk-ar">→</i></span></button>
  <a class="tk tk-full tk-gold mag burst" id="regopen" href="${ri.url}" target="_blank" rel="noopener" data-cursor="Open" hidden><span class="tk-main"><small class="tk-k">Opens in a new tab</small><span class="tk-l t">Open the registration form</span><i class="tk-shine" aria-hidden="true"></i></span><span class="tk-stub" aria-hidden="true"><i class="tk-ring"></i><i class="tk-ar">↗</i></span></a>
  <a class="foot-alt" href="${LINKS.guidelines}" target="_blank" rel="noopener">Read the full guidelines</a>`;
  $('#regbtn').onclick=()=>{$('#rp').classList.add('open');$('#regbtn').hidden=true;const o=$('#regopen');o.hidden=false;o.focus()};
  $('#regopen').addEventListener('click',()=>toast('The registration form opened in a new tab.'))}
 bindMag(ov);ovs.scrollTop=0;$('#ovgrid').scrollTop=0}
function openOv(n,from){ovFrom=from||document.activeElement;fillOv(n);ov.classList.add('on');ovOpen=true;document.body.style.overflow='hidden';setTimeout(()=>$(VW<=900?'#ovmclose':'#ovclose').focus(),80)}
function closeOv(){ov.classList.remove('on');ovOpen=false;document.body.style.overflow='';ovFrom&&ovFrom.focus&&ovFrom.focus()}
function stepOv(d){const list=current.length?current:EVENTS;let i=list.findIndex(x=>x.n===ovCur);if(i<0)i=0;const n=list[(i+d+list.length)%list.length].n;swapOv(n)}
function swapOv(n){if(reduce){fillOv(n);return}ovs.classList.add('swap');setTimeout(()=>{fillOv(n);ovs.classList.remove('swap')},190)}
$('#ovclose').onclick=closeOv;$('#ovmclose').onclick=closeOv;$('#ovprev').onclick=()=>stepOv(-1);$('#ovnext').onclick=()=>stepOv(1);
ovs.addEventListener('click',e=>{const b=e.target.closest('[data-sib]');if(b&&+b.dataset.sib!==ovCur)swapOv(+b.dataset.sib)});

/* ---------- viewer ---------- */
const SETS={comp:PROGS.map(p=>({k:p.poster,t:pname(p),c:'Competition poster'})),fest:[{k:'curtain',t:'Curtain raiser invitation',c:'Festival event'},{k:'contests',t:'Contests, back again',c:'Festival information'}]};
const vw=$('#vw'),vimg=$('#vwimg');let vset=null,vi=0,vFrom=null;
function showV(i,dir){const s=SETS[vset];vi=(i+s.length)%s.length;const it=s[vi];
 const put=()=>{vimg.src=IMG[it.k];vimg.alt=it.t+' poster';$('#vwttl').textContent=it.t;$('#vwcat').textContent=it.c;$$('#vwthumbs button').forEach((b,j)=>b.setAttribute('aria-current',j===vi))};
 if(!dir||reduce){put();return}vimg.className=dir>0?'l':'r';setTimeout(()=>{put();vimg.className=dir>0?'r':'l';vimg.getBoundingClientRect();vimg.className=''},200)}
function openV(set,i){vFrom=document.activeElement;vset=set;$('#vwthumbs').innerHTML=SETS[set].map((it,j)=>`<button type="button" data-j="${j}" aria-label="${esc(it.t)}"><img src="${IMG[it.k]}" alt=""></button>`).join('');
 $('#vwprev').hidden=$('#vwnext').hidden=SETS[set].length<2;showV(i);vw.classList.add('on');document.body.style.overflow='hidden';setTimeout(()=>$('#vwclose').focus(),60)}
function closeV(){vw.classList.remove('on');if(!ovOpen)document.body.style.overflow='';vFrom&&vFrom.focus()}
$('#vwthumbs').addEventListener('click',e=>{const b=e.target.closest('[data-j]');if(b){const j=+b.dataset.j;showV(j,j>vi?1:-1)}});
$('#vwclose').onclick=closeV;$('#vwprev').onclick=()=>showV(vi-1,-1);$('#vwnext').onclick=()=>showV(vi+1,1);
let tx=null;$('#vwstage').addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
$('#vwstage').addEventListener('touchend',e=>{if(tx==null)return;const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)showV(vi+(d<0?1:-1),d<0?1:-1);tx=null});
document.addEventListener('click',e=>{const v=e.target.closest('[data-view]');if(!v)return;const[s,i]=v.dataset.view.split(':');openV(s,+i)});
function trap(e,rootEl){const f=[...rootEl.querySelectorAll('a[href],button,input')].filter(x=>!x.hidden&&x.offsetParent!==null);if(!f.length)return;const a=f[0],z=f[f.length-1];
 if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
document.addEventListener('keydown',e=>{
 if(vw.classList.contains('on')){if(e.key==='Escape')closeV();else if(e.key==='ArrowRight')showV(vi+1,1);else if(e.key==='ArrowLeft')showV(vi-1,-1);else if(e.key==='Tab')trap(e,vw);return}
 if(ovOpen){if(e.key==='Escape')closeOv();else if(e.key==='Tab')trap(e,ov);return}
 if(menu.classList.contains('on')&&e.key==='Escape')toggleMenu(false)});

/* ---------- register routes + rules ---------- */
const mainP=PROGS.filter(p=>p.reg==='main');
$('#routes').innerHTML=`<div class="route lead rv" style="--c:var(--marigold)"><h3>Main registration form</h3><p>One form covers these five programmes. Tick every competition you want to enter.</p><ul class="pl">${mainP.map(p=>`<li style="--c2:${p.color}">${esc(pname(p))}</li>`).join('')}</ul><a class="tk  mag burst" href="${LINKS.mainForm}" target="_blank" rel="noopener" data-cursor="Register" data-toast="1"><span class="tk-main"><small class="tk-k">10–18 October, Vijayawada</small><span class="tk-l t">Register now</span><i class="tk-shine" aria-hidden="true"></i></span><span class="tk-stub" aria-hidden="true"><i class="tk-ring"></i><i class="tk-ar">↗</i></span></a></div>
<div class="route rv" style="--c:${P.wonder.color}"><h3>Wonder Women of Vijayawada</h3><p>Separate registration for all 10 women's competitions, from the QR code on the Wonder Women poster.</p><a class="tk tk-gold mag burst" href="${LINKS.wonderForm}" target="_blank" rel="noopener" data-cursor="Register" data-toast="1"><span class="tk-main"><small class="tk-k">Separate form, 10 competitions</small><span class="tk-l t">Register for Wonder Women</span><i class="tk-shine" aria-hidden="true"></i></span><span class="tk-stub" aria-hidden="true"><i class="tk-ring"></i><i class="tk-ar">↗</i></span></a></div>
<div class="route rv" style="--c:${P.crown.color}"><h3>Crown of Vijayawada</h3><p>Separate registration for the seven pageants. The link isn't in the guidelines yet, so watch the WhatsApp group or vijayawadautsav.com.</p><a class="btn btn-line ext mag" href="${LINKS.whatsapp}" target="_blank" rel="noopener" data-cursor="Join"><span class="t">Join the WhatsApp group</span><span class="ar" aria-hidden="true"></span></a></div>`;
$$('.route').forEach((r,i)=>r.style.clipPath=allTorn(60+i,1.6));
document.addEventListener('click',e=>{const a=e.target.closest('[data-toast]');if(a)toast('The registration form opened in a new tab.')});
$('#gl').innerHTML=GENERAL.map(g=>`<li>${esc(g)}</li>`).join('');

/* ---------- toast + confetti ---------- */
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2800)}
const cols=PROGS.map(p=>p.color).concat('#F2B01E','#8C1D40');
function burst(x,y){if(reduce)return;for(let i=0;i<14;i++){const d=document.createElement('i');d.className='cf';d.style.background=cols[i%cols.length];d.style.clipPath=allTorn(i+x,10);document.body.appendChild(d);
 const a=Math.random()*Math.PI*2,r=60+Math.random()*90;d.animate([{transform:`translate(${x}px,${y}px) rotate(0)`,opacity:1},{transform:`translate(${x+Math.cos(a)*r}px,${y+Math.sin(a)*r+40}px) rotate(${Math.random()*540-270}deg)`,opacity:0}],{duration:800+Math.random()*300,easing:'cubic-bezier(.15,.8,.3,1)'}).onfinish=()=>d.remove()}}
document.addEventListener('pointerdown',e=>{const b=e.target.closest('.burst');if(b)burst(e.clientX,e.clientY)});

/* ---------- nav + menu ---------- */
const nav=$('#nav'),menu=$('#menu'),mb=$('#menubtn');
function toggleMenu(o){mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu');menu.classList.toggle('on',o);nav.classList.toggle('dark',o||navDark);document.body.style.overflow=o?'hidden':''}
mb.onclick=()=>toggleMenu(mb.getAttribute('aria-expanded')!=='true');
menu.addEventListener('click',e=>{if(e.target.tagName==='A')toggleMenu(false)});
const darkSecs=$$('.dark-sec, footer, .reg');let navDark=false;

/* ---------- cursor + magnetic + tilt ---------- */
const cur=$('#cur'),cring=$('#cring'),cdot=$('#cdot'),clab=$('#clab');
let cx=-100,cy=-100,rx=-100,ry=-100,rot=0,curOn=false,hov=0;
if(fine){root.classList.add('cur-on');curOn=true;
 addEventListener('pointermove',e=>{cx=e.clientX;cy=e.clientY},{passive:true});
 addEventListener('pointerdown',()=>cur.classList.add('down'));addEventListener('pointerup',()=>cur.classList.remove('down'));
 document.addEventListener('pointerover',e=>{const t=e.target.closest('[data-cursor]'),inp=e.target.closest('input,textarea');
  cur.classList.toggle('hide',!!inp);
  if(t){clab.textContent=t.dataset.cursor;cur.classList.add('lab');hov=0}else{const a=e.target.closest('a,button,[role=tab]');cur.classList.remove('lab');hov=a?1:0}});
 document.addEventListener('pointerleave',()=>{cx=cy=-100})}
function bindMag(scope){if(!fine||reduce)return;(scope||document).querySelectorAll('.mag').forEach(el=>{if(el._mag)return;el._mag=1;const t=el.querySelector('.t');
 el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);el.style.transform=`translate(${dx*.22}px,${dy*.35}px)`;if(t)t.style.transform=`translate(${dx*.08}px,${dy*.12}px)`});
 el.addEventListener('pointerleave',()=>{el.style.transform='';if(t)t.style.transform=''})})}
bindMag();
function bindTilt(){if(!fine||reduce)return;document.addEventListener('pointermove',e=>{const t=e.target.closest('.tilt,.b-post .fr,.ov-poster');$$('.tilting').forEach(x=>{if(x!==t){x.classList.remove('tilting');x.style.transform=''}});if(!t)return;
 const r=t.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;t.classList.add('tilting');t.style.transform=`rotateY(${px*10}deg) rotateX(${-py*10}deg) scale(1.02)`},{passive:true})}
bindTilt();

/* ---------- reveals ---------- */
$$('.sp').forEach(h=>{let i=0;h.innerHTML=h.textContent.trim().split(/\s+/).map(w=>`<span class="w"><span style="--i:${i++}">${esc(w)}</span></span>`).join(' ')});
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const t=en.target;t.classList.add('in');io.unobserve(t);
 if(!reduce)t.querySelectorAll('[data-count]').forEach(el=>{const v=+el.dataset.count,t0=performance.now();const f=n=>{const k=Math.min(1,(n-t0)/1100);el.textContent=Math.round(v*(1-Math.pow(1-k,4)));if(k<1)requestAnimationFrame(f)};el.textContent='0';requestAnimationFrame(f)})}),{threshold:.2,rootMargin:'0px 0px -8% 0px'});
$$('.rv,.sp').forEach(el=>io.observe(el));

/* ---------- scroll engine ---------- */
const prog=$('#prog'),marq=$('#marq'),fmarq=$('#fmarq'),tebg=$('#tebg'),maniSec=$('#about'),tl=$('#tl'),regSec=$('#register'),footerEl=$('#contact');
let lastY=-1,lastDir=0,geo={};
function layout(){heroLayout();progLayout();
 geo.mani={top:maniSec.offsetTop,h:maniSec.offsetHeight};geo.prog={top:progsSec.offsetTop,h:progsSec.offsetHeight};
 geo.tw=track.scrollWidth;moveInd();lastY=-1}
function onScroll(y){
 const docH=document.documentElement.scrollHeight-VH;prog.style.transform=`scaleX(${clamp(y/docH)})`;
 if(y>lastY+4&&y>200&&!menu.classList.contains('on'))nav.classList.add('up');else if(y<lastY-4)nav.classList.remove('up');
 nav.classList.toggle('solid',y>30);
 navDark=darkSecs.some(s=>{const r=s.getBoundingClientRect();return r.top<=40&&r.bottom>40});nav.classList.toggle('dark',navDark||menu.classList.contains('on'));
 if(reduce){mwords.forEach(w=>w.classList.add('on'));return}
 /* manifesto */
 const mp=clamp((y-geo.mani.top+VH*.3)/((geo.mani.h-VH)*.95));const lit=Math.floor(mp*(mwords.length+1));mwords.forEach((w,i)=>w.classList.toggle('on',i<lit));
 tebg.style.transform=`translate(${-mp*18}vw,-50%)`;
 /* programmes */
 if(!progNative){const pp=clamp((y-geo.prog.top)/(geo.prog.h-VH)),x=-pp*(geo.tw-VW);track.style.transform=`translate3d(${x}px,0,0)`;pword.style.transform=`translate3d(${-x*.35}px,0,0)`;
  pans.forEach(p=>{const l=p.offsetLeft+x;p.style.setProperty('--rv',clamp((VW-l)/(VW*.7)).toFixed(3))})}
 /* marquees */
 const rr=regSec.getBoundingClientRect();marq.style.transform=`translate3d(${-(VH-rr.top)*.35}px,0,0)`;
 const fr=footerEl.getBoundingClientRect();fmarq.style.transform=`translate3d(${-(VH-fr.top)*.3}px,0,0)`;
 const tr=tl.getBoundingClientRect();tl.style.setProperty('--tl',clamp((VH*.85-tr.top)/tr.height).toFixed(3));
}
function heroFrame(y){if(!heroGeo)return;const p=reduce?0:clamp(y/VH),m=VW<760;
 mx=lerp(mx,tmx,.07);my=lerp(my,tmy,.07);const k=m?VW*.5:VW*.45;
 heroGeo.forEach(g=>{const px=mx*g.d*-26,py=my*g.d*-20;g.el.style.transform=`translate3d(${g.x+g.vx*p*k+px}px,${g.y+g.vy*p*k*.7+py}px,0) rotate(${g.r+p*g.vx*18}deg)`});
 const ps=1-p*.18;
 if(m){const b=JSON.parse(paper.dataset.base||'{"x":0,"y":0}'),sb=JSON.parse(strip.dataset.base||'{"x":0,"y":0}');paper.style.left='0';paper.style.top='0';paper.style.transform=`translate3d(${b.x}px,${b.y-p*60}px,0) scale(${ps})`;
  strip.style.left='0';strip.style.top='0';strip.style.transform=`translate3d(calc(${sb.x}px - 50%),${sb.y-p*20}px,0) rotate(${-3-p*8}deg)`}
 else{paper.style.left='';paper.style.top='';paper.style.transform=`translate3d(calc(-50% + ${mx*8}px),calc(-50% + ${my*6-p*80}px),0) scale(${ps})`;
  strip.style.left='';strip.style.transform=`translate3d(calc(-50% + ${mx*-14}px),${my*-10-p*30}px,0) rotate(${-3-p*10}deg)`}
 bigword.style.transform=`translate3d(calc(-50% + ${mx*-30-p*VW*.25}px),calc(-50% + ${my*-20}px),0)`}
function frame(){const y=scrollY;
 if(y!==lastY){onScroll(y);lastY=y}
 if(y<VH*1.2)heroFrame(y);
 if(curOn){rx=lerp(rx,cx,.2);ry=lerp(ry,cy,.2);const v=Math.hypot(cx-rx,cy-ry);rot+=v*.25;cdot.style.transform=`translate3d(${cx}px,${cy}px,0)`;
  cring.style.transform=`translate3d(${rx}px,${ry}px,0) rotate(${cur.classList.contains('lab')?0:rot}deg) scale(${1+hov*.3})`}
 requestAnimationFrame(frame)}
document.fonts&&document.fonts.ready.then(layout);
addEventListener('load',layout);
layout();setProg('all');requestAnimationFrame(frame);

}
