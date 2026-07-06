import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setStatus("Please fill in all fields");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        formData
      );

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          className="contact-button"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

      {status && (
        <p
          className="contact-status"
          style={{
            color: status.includes("✅") ? "#22c55e" : "#ef4444"
          }}
        >
          {status}
        </p>
      )}
    </section>
  );
}