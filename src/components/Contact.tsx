import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = ({ id }: { id?: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbys3OFXOMzxwXfOBIdEDI9HzDuXlB8_PD3eR0UUKUddJYfRQ-s3Z0C-7cH-sIyT7tm6sg/exec"; // Replace with your actual script URL

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id={id} className="py-24 bg-[#004F74]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in 
            <span className="bg-gradient-to-r from-[#66B2FF] to-[#99CCFF] text-transparent bg-clip-text"> Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions or want to join our community? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 ${
                isSubmitting ? "bg-gray-400" : "bg-[#3399FF] hover:bg-[#1a8cff] text-white"
              }`}
              disabled={isSubmitting}
            >
              <span className="inline-flex items-center">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-5 h-5" />
              </span>
            </button>

            {successMessage && (
              <p className="text-center text-white mt-4">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
