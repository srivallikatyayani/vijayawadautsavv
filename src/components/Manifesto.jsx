// Pinned statement whose words light up on scroll, plus the at-a-glance stats and theme.
export default function Manifesto() {
  return (
    <>
<section className="sheet mani dark-sec" id="about" aria-labelledby="mani-h">
 <div className="mani-stick">
  <div className="te-bg" id="tebg" aria-hidden="true" lang="te">ఉత్సవ్</div>
  <div className="wrap" style={{"position": "relative"}}>
   <h2 className="sr" id="mani-h">About the competitions</h2>
   <p className="mani-text" id="mani">Nine days. Forty-six competitions. Seven stages. From six-year-olds to sixty-plus, the whole city takes the stage.</p>
   <p className="mani-side muted">Vijayawada Utsav is a Society for Vibrant Vijayawada initiative in association with the Government of Andhra Pradesh. Its competitions are open to solo performers, groups, teams, couples and whole families.</p>
  </div>
 </div>
</section>
<div className="stats dark-sec" aria-label="At a glance">
 <div className="wrap">
  <div className="stat-row rv">
   <div className="stat"><span className="n" data-count="46">46</span><span className="l">competitions</span></div>
   <div className="stat"><span className="n" data-count="7">7</span><span className="l">programmes</span></div>
   <div className="stat"><span className="n" data-count="9">9</span><span className="l">days, 10–18 October</span></div>
   <div className="stat"><span className="n" data-count="3">3</span><span className="l">age categories</span></div>
  </div>
  <div className="themes rv"><b>This year's theme</b><span>Dussehra</span><span>Devi avatars</span><span>Vijayawada heritage</span><span>Telugu culture &amp; tradition</span></div>
 </div>
</div>
    </>
  );
}
