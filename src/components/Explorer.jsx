// Competition finder: animated programme tabs, search, segment chips, featured poster and list.
export default function Explorer() {
  return (
    <section className="sheet explore" id="explore" aria-labelledby="ex-h">
 <div className="wrap">
  <div className="ex-head">
   <h2 id="ex-h" className="sp">Find your competition</h2>
   <p className="muted">Pick a programme, or search for what you do: dance, painting, pickle, pageant. Open any competition for its rules and registration.</p>
  </div>
  <div className="tabs" id="tabs" role="tablist" aria-label="Programmes"><span className="tab-ind" id="tabind"></span></div>
  <div className="ex-tools">
   <label className="search"><span className="sr">Search competitions</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>
    <input id="q" type="search" placeholder="Search competitions" autoComplete="off" />
    <button className="clear" id="qclear" type="button" aria-label="Clear search" hidden>×</button>
   </label>
   <div className="segchips" id="segs" role="group" aria-label="Filter by segment"></div>
  </div>
  <p className="rmeta" id="rmeta" aria-live="polite"></p>
  <div className="ex-body">
   <div className="feat" aria-hidden="true">
    <div className="feat-frame" id="fframe"><img id="fimg" alt="" /></div>
    <div className="feat-cap"><span className="fp" id="fprog"></span><div className="fn" id="fname"></div></div>
   </div>
   <ul className="rows" id="rows"></ul>
  </div>
 </div>
</section>
  );
}
