// Short branded loader. The torn-paper curtain lifts once per session.
export default function Loader() {
  return (
    <div id="loader" aria-hidden="true"><div className="ld-in"><div className="ld-paper"><img className="logo-img" alt="" /></div><div className="ld-te" lang="te">విజయవాడ ఉత్సవ్</div><div className="ld-bar"><i></i></div></div></div>
  );
}
