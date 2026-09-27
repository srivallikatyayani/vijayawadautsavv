// Key dates timeline, ground rules and age categories.
export default function Rules() {
  return (
    <section className="sheet rules" id="rules" aria-labelledby="rules-h">
 <div className="wrap rules-grid">
  <div className="dates">
   <h2 className="sp" id="rules-h">Key dates</h2>
   <ol className="tl" id="tl">
    <li style={{"--c": "#8C1D40"}}><div className="when">28 September</div><p>Curtain raiser, Ambedkar Kalavedika, 12:30 PM.</p></li>
    <li style={{"--c": "#BBA5DD"}}><div className="when">8 October</div><p>Katha Tarang and Katha Rachana topics announced on @jignasa_artverse and the WhatsApp groups.</p></li>
    <li style={{"--c": "#F2B01E"}}><div className="when">10–18 October</div><p>Competitions at Tummalapalli Kalakshetram. Detailed schedules and time slots will be released to registered participants.</p></li>
   </ol>
  </div>
  <div className="ground">
   <h2 className="sp">Ground rules</h2>
   <ul className="gl rv" id="gl"></ul>
   <div className="ages rv" aria-label="Age categories on the registration form"><div><b>Sub Junior</b><span>6–12 years</span></div><div><b>Junior</b><span>13–18 years</span></div><div><b>Senior</b><span>19 and above</span></div></div>
  </div>
 </div>
</section>
  );
}
