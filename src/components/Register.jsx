// Registration steps and the three registration routes (Google Form links from data).
export default function Register() {
  return (
    <section className="sheet reg" id="register" aria-labelledby="reg-h">
 <div className="marq" id="marq" aria-hidden="true"><span>Register now</span><span>Register now</span><span>Register now</span><span>Register now</span></div>
 <div className="wrap">
  <h2 className="sr" id="reg-h">Register</h2>
  <div className="reg-grid">
   <div className="rv">
    <p style={{"fontSize": "20px", "margin": "0 0 26px", "maxWidth": "36ch"}}>Registration is free-form and quick. Here's the order that saves you trouble.</p>
    <ol className="steps">
     <li><div><b>Read the guidelines</b><span>Check the rules and time limit for your competition. <a href="https://drive.google.com/file/d/10PwWjSzEIFbkNQpcshKDNHovnSPrDDhd/view?usp=drive_link" target="_blank" rel="noopener">Download the guidelines</a>.</span></div></li>
     <li><div><b>Fill in the form</b><span>In group competitions, every participant registers individually. Quiz teams: all three members register.</span></div></li>
     <li><div><b>Join the WhatsApp group</b><span>A link to the group appears after you submit. Updates and token numbers come through it.</span></div></li>
     <li><div><b>Follow on Instagram</b><span><a href="https://www.instagram.com/vijayawadautsav/" target="_blank" rel="noopener">@vijayawadautsav</a> and <a href="https://www.instagram.com/jignasa_artverse/" target="_blank" rel="noopener">@jignasa_artverse</a>.</span></div></li>
     <li><div><b>Watch for your slot</b><span>The schedule of dates and time slots is sent to registered participants and posted in the WhatsApp groups.</span></div></li>
    </ol>
   </div>
   <div className="routes" id="routes"></div>
  </div>
 </div>
</section>
  );
}
