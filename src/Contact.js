import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_7eubqut",
      "template_qj6pacr",
      e.target,
      "O2b1KAsReoWbjlV9X"
    )
    .then(
      (result) => {
        window.location.reload();
      },
      (error) => {
        console.log(error.text);
      }
    );
}

function ContactBody() {
  return (
    <div className="main-body">
      <div className="contact-info">
        <h1>Contact Info</h1>
        <br></br>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="to_email" value={"chase.doug88@gmail.com"} />
          <FloatingLabel controlId="floatingInput" label="Name" className="form-label mb-3">
            <Form.Control type="text" name="from_name" placeholder="John Doe" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email" className="form-label mb-3">
            <Form.Control type="email" name="reply_to" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Subject" className="form-label mb-3">
            <Form.Control type="text" name="subject" placeholder="Subject" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea" label="Message" className="form-label mb-3">
            <Form.Control as="textarea" name="message" placeholder="Your message..." style={{ height: '100px' }}/>
          </FloatingLabel>
          <button type="submit" value="Send" className="send-button">
            <span>Send</span>
            <div className="dot"></div>
          </button>
        </form>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>

        <script type="text/javascript">
          emailjs.init('O2b1KAsReoWbjlV9X')
        </script>
        <br />
        <a href="https://github.com/Helix088">GitHub: Helix088</a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
      <h1 className="header">Contact Me</h1>
      <ContactBody />
    </>
  );
}

export default Contact;
