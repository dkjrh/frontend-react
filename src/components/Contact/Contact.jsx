import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://backend-portfolio-z4kv.onrender.com/api/contact/",
        formData
      );

      if (res.data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      setStatus("Server error ❌");
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="contact-input"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button className="contact-button" type="submit">
          Send Message
        </button>

        <p className="contact-status">{status}</p>
      </form>
    </div>
  );
}