// Festival events (curtain raiser) and festival information (contests announcement).
export default function Beyond() {
  return (
    <section className="sheet beyond dark-sec" id="beyond" aria-labelledby="by-h">
 <div className="wrap">
  <span className="kick" style={{"color": "var(--marigold)"}}>Festival events and information</span>
  <h2 id="by-h" className="sp" style={{"marginTop": "14px"}}>Beyond the competitions</h2>
  <div className="b-grid">
   <article className="b-item b-ev rv">
    <button className="b-post" type="button" data-view="fest:0" data-cursor="View" aria-label="View the curtain raiser invitation"><div className="fr"><img className="poster-img" data-key="curtain" alt="Curtain raiser invitation poster, in Telugu" /></div></button>
    <div className="b-txt">
     <span className="kick">Festival event</span>
     <h3>Curtain raiser</h3>
     <ul className="b-facts">
      <li><b>Date</b><span>28 September 2026</span></li>
      <li><b>Time</b><span>12:30 PM</span></li>
      <li><b>Venue</b><span>Ambedkar Kalavedika, Vijayawada</span></li>
      <li><b>Host</b><span>Kesineni Sivanath (Chinni), Member of Parliament, Vijayawada</span></li>
      <li><b>Guests</b><span>Kandula Durgesh, Minister for Tourism; Satyakumar Yadav, Minister for Health, Medical &amp; Family Welfare; Anam Ramanarayana Reddy, Minister for Endowments</span></li>
     </ul>
     <p className="muted">An invitation from the Department of Tourism, Government of Andhra Pradesh, to the launch of Vijayawada Utsav 2026.</p>
    </div>
   </article>
   <article className="b-item b-info rv">
    <div className="b-txt">
     <span className="kick">Festival information</span>
     <h3>Contests, back again</h3>
     <p className="muted" style={{"margin": "0 0 20px"}}>The official announcement for this year's contests, powered by Greenko with Jignasa as organising partner.</p>
     <ul className="b-facts">
      <li><b>Website</b><span><a href="https://www.vijayawadautsav.com/" target="_blank" rel="noopener">vijayawadautsav.com</a></span></li>
      <li><b>Instagram</b><span><a href="https://www.instagram.com/vijayawadautsav/" target="_blank" rel="noopener">@vijayawadautsav</a></span></li>
     </ul>
    </div>
    <button className="b-post" type="button" data-view="fest:1" data-cursor="View" aria-label="View the contests announcement poster"><div className="fr"><img className="poster-img" data-key="contests" alt="Contests back again announcement poster" /></div></button>
   </article>
  </div>
 </div>
</section>
  );
}
