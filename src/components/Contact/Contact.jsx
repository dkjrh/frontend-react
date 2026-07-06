import { useState } from "react";

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
      // Breaking up the string prevents global build tool overrides
      const subdomain = "backend-portfolio-z4kv";
      const domain = "onrender.com";
      const fullUrl = `https://${subdomain}.${domain}/api/contact/`;

      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send ❌");
      }

    } catch (err) {
      console.log("FETCH ERROR DETAILS:", err);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={formData.name} placeholder="Name" />
      <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
      <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Message" />

      <button type="submit">Send Message</button>

      <p>{status}</p>
    </form>
  );
}
