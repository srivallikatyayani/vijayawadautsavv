// Pinned hero: logo paper, programme swatches (added at runtime from data), countdown, CTA.
export default function Hero() {
  return (
    <section className="hero intro-anim" id="top" aria-labelledby="h1">
 <div className="hero-stick">
  <div className="bigword" id="bigword" aria-hidden="true">UTSAV</div>
  <div className="wrap collage" id="collage">
   <div className="paper" id="paper" style={{"--i": "0"}}>
    <h1 id="h1" className="sr">Vijayawada Utsav 2026 competitions</h1>
    <img className="logo-img" alt="Vijayawada Utsav" width="640" height="373" />
    <div className="te" lang="te">విజయవాడ ఉత్సవ్ 2026</div>
    <div className="tag">Our city. Our people. Our celebration.</div>
   </div>
   <div className="strip" id="strip" style={{"--i": "8"}} aria-hidden="true">Contests, back again<small>46 of them, for every age</small></div>
   <div className="scrib hand" aria-hidden="true">Same spirit,<br />bigger stories ahead!</div>
  </div>
  <div className="cue" aria-hidden="true">SCROLL<i></i></div>
  <div className="wrap">
   <div className="hero-bar">
    <div><div className="k">Competitions</div><div className="v">10–18 October</div></div>
    <div className="venue"><div className="k">Venue</div><div className="v">Tummalapalli Kalakshetram</div></div>
    <div><div className="k" id="cd-k">Starts in</div><div className="v" id="cd">&nbsp;</div></div>
    <div className="ctas"><a className="xb mag burst" href="#explore" data-cursor="Explore"><span className="xb-n" aria-hidden="true">46</span><span className="xb-txt"><small>46 competitions, 7 programmes</small><span className="t">Explore competitions</span></span><span className="xb-fan" aria-hidden="true"><img alt="" data-k="idol" /><img alt="" data-k="wonder" /><img alt="" data-k="talent" /></span><span className="xb-bar" aria-hidden="true"><i style={{"--c": "#F3A79D", "--d": "0"}}></i><i style={{"--c": "#9DCFD9", "--d": "1"}}></i><i style={{"--c": "#BBA5DD", "--d": "2"}}></i><i style={{"--c": "#95CCA8", "--d": "3"}}></i><i style={{"--c": "#EDC592", "--d": "4"}}></i><i style={{"--c": "#F3A0BE", "--d": "5"}}></i><i style={{"--c": "#F7C948", "--d": "6"}}></i></span></a></div>
   </div>
  </div>
 </div>
</section>
  );
}
