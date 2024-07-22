import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iovwcmc",
        "template_brehr2g",
        e.target,
        "bYENio9G-8AHYNk8D"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get in touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <p className="contact_details">
            Let's discuss everything. Dislike filling out forms? Please email
            me.
          </p>
        </div>

        <form action="" className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                required
                className="contact_form-input"
                placeholder="Your name..."
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="contact_form-input"
                placeholder="Your email..."
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact_form-div">
            <input
              type="text"
              name="subject"
              required
              className="contact_form-input"
              placeholder="Your subject..."
              id="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact_form-div">
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              required
              className="contact_form-input contact_form-area"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
