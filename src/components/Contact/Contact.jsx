import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://backend-portfolio-z4kv.onrender.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      console.log("SERVER RESPONSE:", data);

      if (response.ok && data.success) {
        setStatus("Message sent successfully ✅");

        setFormData({
          name: "",
          email: "",
          message: ""
        });

      } else {
        setStatus(
          data.error || "Failed to send message ❌"
        );
      }

    } catch (error) {
      console.log("CONTACT ERROR:", error);
      setStatus("Server error ❌");
    }
  };


  return (
    <section id="contact" className="contact">

      <h2 className="contact-title">
        Contact Me
      </h2>


      <form 
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />


        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />


        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />


        <button 
          className="contact-button"
          type="submit"
        >
          Send Message
        </button>


        <p className="contact-status">
          {status}
        </p>

      </form>

    </section>
  );
}