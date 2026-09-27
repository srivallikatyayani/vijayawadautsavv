// Custom muggu-dot cursor (desktop/fine pointers only). Behaviour lives in lib/experience.js.
export default function Cursor() {
  return (
    <div id="cur" aria-hidden="true"><div className="c-ring" id="cring"><div className="c-bg"></div><div className="c-dots"><i style={{"--k": "0"}}></i><i style={{"--k": "1"}}></i><i style={{"--k": "2"}}></i><i style={{"--k": "3"}}></i><i style={{"--k": "4"}}></i><i style={{"--k": "5"}}></i><i style={{"--k": "6"}}></i><i style={{"--k": "7"}}></i></div><div className="c-lab" id="clab"></div></div><div className="c-dot" id="cdot"></div></div>
  );
}
