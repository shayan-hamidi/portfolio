import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const constsendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gdignkb",
        "template_sl0onaa",
        form.current,
        "JmK7QIb4jhfmMc7K-"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sha.hamidi10@gmail.com</h5>
            <a href="mailto:sha.hamidi10@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillFacebook className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Shayan Hamidi</h5>
            <a href="https://www.facebook.com/profile.php?id=100072877444506">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+989301023512</h5>
            <a href="https://api.whatsapp.com/send?phone=+989301023512">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={constsendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
