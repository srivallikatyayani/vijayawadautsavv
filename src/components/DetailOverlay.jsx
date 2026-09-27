// Full-screen competition detail page with the two-step Register flow.
export default function DetailOverlay() {
  return (
    <>
<div className="ov" id="ov" role="dialog" aria-modal="true" aria-labelledby="ov-title">
 <div className="ov-grid" id="ovgrid">
  <div className="ov-media" id="ovmedia"><div className="big" id="ovbig" aria-hidden="true"></div><button className="ov-poster" id="ovposter" type="button" data-cursor="View"><div className="fr"><img id="ovimg" alt="" /></div></button></div>
  <div className="ov-body">
   <div className="ov-bar"><span className="crumb" id="ovcrumb"></span><button className="icon-btn" id="ovprev" type="button" aria-label="Previous competition">←</button><button className="icon-btn" id="ovnext" type="button" aria-label="Next competition">→</button><button className="icon-btn" id="ovclose" type="button" aria-label="Close">×</button></div>
   <div className="ov-scroll" id="ovscroll"></div>
   <div className="ov-foot" id="ovfoot"></div>
  </div>
 </div>
 <button className="icon-btn ov-mclose" id="ovmclose" type="button" aria-label="Close">×</button>
</div>
    </>
  );
}
