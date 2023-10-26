import "./contact.css";

import { AiFillMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiFillMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jawamutech@gmail.com</h5>
            <a href="mailto:jawamutech@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+254723060034</h5>
            <a
              href="https://api.whatsapp.com/send?phone=254723060034"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jah'Key John</h5>
            <a href="m.facebook.com">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
