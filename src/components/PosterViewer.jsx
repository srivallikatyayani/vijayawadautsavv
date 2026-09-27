// Full-screen poster viewer with thumbnails, arrows and swipe.
export default function PosterViewer() {
  return (
    <>
<div className="vw" id="vw" role="dialog" aria-modal="true" aria-label="Poster viewer">
 <div className="vw-top"><span className="cat" id="vwcat"></span><span className="ttl" id="vwttl"></span><button className="icon-btn" id="vwclose" type="button" aria-label="Close viewer">×</button></div>
 <div className="vw-stage" id="vwstage"><img id="vwimg" alt="" /><button className="icon-btn vw-nav vw-prev" id="vwprev" type="button" aria-label="Previous poster">←</button><button className="icon-btn vw-nav vw-next" id="vwnext" type="button" aria-label="Next poster">→</button></div>
 <div className="vw-thumbs" id="vwthumbs"></div>
</div>
    </>
  );
}
