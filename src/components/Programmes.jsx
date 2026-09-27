// Horizontal pinned scroll through the seven programme panels (built from data at runtime).
export default function Programmes() {
  return (
    <section className="sheet progs" id="programmes" aria-labelledby="progs-h">
 <div className="progs-stick" id="pstick">
  <div className="p-word" id="pword" aria-hidden="true">Seven stages</div>
  <div className="track" id="track">
   <div className="pan pan-intro">
    <div><span className="kick">Competition programmes</span><h2 id="progs-h" className="sp">Seven stages</h2><p className="muted">Each programme has its own poster, its own rules and its own set of competitions. Start with the one that sounds like you.</p><p className="hint" id="phint">Keep scrolling <i></i></p></div>
   </div>
  </div>
 </div>
</section>
  );
}
