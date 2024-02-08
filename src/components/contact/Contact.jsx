import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/img/contact-img.svg";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_imjf4e9",
        "template_a0ooubb",
        form.current,
        "9YNPLNnUL_8KTQzs6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={contactImg} alt="...." />
          </div>
          <div className="col-md-6 col-sm-12">
            <form ref={form} onSubmit={sendEmail}>
              <h1 className="mb-4 fw-bold fw-normal fs-1">Get in Touch</h1>
              <div className="form">
                <input type="text" placeholder="First Name" name="user_name" />
                <input type="text" placeholder="Last Name" name="last_name" />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="user_email"
                />
                <input
                  type="number"
                  placeholder="Phone No."
                  name="user_phone"
                />
              </div>
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                name="message"
              ></textarea>
              <button className="btn btn-light ps-5 pe-5 fs-5 mt-3 fw-bolder">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
