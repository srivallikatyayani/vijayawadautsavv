// Sticky navigation and the full-screen mobile menu.
export default function Nav() {
  return (
    <>
<header className="nav" id="nav">
 <div className="wrap">
  <a className="brand" href="#top" aria-label="Vijayawada Utsav, back to top"><img className="logo-img" alt="" /><span><b>Utsav 2026</b><small>Competitions</small></span></a>
  <nav aria-label="Main"><ul className="nav-links">
   <li><a href="#programmes">Programmes</a></li><li><a href="#explore">Competitions</a></li><li><a href="#beyond">Festival events</a></li><li><a href="#rules">Dates &amp; rules</a></li>
  </ul></nav>
  <a className="tk tk-sm mag burst" href="#register" data-cursor="Register"><span className="tk-main"><span className="tk-l t">Register now</span><i className="tk-shine" aria-hidden="true"></i></span><span className="tk-stub" aria-hidden="true"><i className="tk-ring"></i><i className="tk-ar">→</i></span></a>
  <button className="menu-btn" id="menubtn" aria-expanded="false" aria-controls="menu" aria-label="Open menu"><span></span><span></span></button>
 </div>
</header>
<div className="menu" id="menu" aria-label="Menu">
 <ul>
  <li><a href="#programmes" style={{"--i": "0"}}>Programmes</a></li><li><a href="#explore" style={{"--i": "1"}}>Competitions</a></li><li><a href="#beyond" style={{"--i": "2"}}>Festival events</a></li><li><a href="#register" style={{"--i": "3"}}>Register</a></li><li><a href="#rules" style={{"--i": "4"}}>Dates &amp; rules</a></li>
 </ul>
 <p>10–18 October 2026<br />Tummalapalli Kalakshetram, Vijayawada</p>
</div>
    </>
  );
}
