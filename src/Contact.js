
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
        {/* <a href="mailto:chase.doug88@gmail.com">chase.doug88@gmail.com</a> */}

        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="to_email" value={"chase.doug88@gmail.com"} />
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="reply_to" />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
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
