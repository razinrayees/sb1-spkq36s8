import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = ({ id }: { id?: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full group relative overflow-hidden bg-[#3399FF] hover:bg-[#1a8cff] text-white px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105"
            >
              <span className="relative z-10 inline-flex items-center">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#66B2FF] to-[#3399FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;