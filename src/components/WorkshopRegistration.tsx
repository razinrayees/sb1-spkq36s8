import React, { useState } from 'react';
import { X } from 'lucide-react';

interface WorkshopRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  workshop: {
    title: string;
    titleEn: string;
    date: string;
    time: string;
    price: string;
  };
}

const WorkshopRegistration = ({ isOpen, onClose, workshop }: WorkshopRegistrationProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    expectations: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeiLXqBEJaW3nv3taRZ59cveiKDAtEvfKb72exPRP3xMy3G-g/formResponse";
    
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("entry.1670368569", formData.name);
    formDataToSubmit.append("entry.1780360706", formData.email);
    formDataToSubmit.append("entry.1755047989", formData.phone);
    formDataToSubmit.append("entry.1814276583", formData.company);
    formDataToSubmit.append("entry.1999042917", formData.experience);
    formDataToSubmit.append("entry.2127362758", formData.expectations);
    formDataToSubmit.append("entry.283179263", workshop.titleEn);
    
    fetch(googleFormURL, {
      method: "POST",
      body: formDataToSubmit,
      mode: "no-cors"
    }).then(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }).catch(error => console.error("Error submitting form:", error));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#003B5C] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#003B5C] p-6 border-b border-white/10 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">{workshop.title}</h2>
            <p className="text-[#99CCFF]">{workshop.titleEn}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-white text-center">
            <p className="text-xl font-semibold">Thank you for registering!</p>
            <p className="text-white/80">Your form has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" placeholder="Your full name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" placeholder="your@email.com" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone *</label>
                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" placeholder="Your phone number" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company/Institution *</label>
                <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" placeholder="Your company or institution" />
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-white mb-2">Experience Level *</label>
                <select id="experience" name="experience" required value={formData.experience} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white">
                  <option value="" disabled className="bg-[#003B5C] text-white">Select your experience level</option>
                  <option value="Beginner" className="bg-[#003B5C] text-white">Beginner</option>
                  <option value="Intermediate" className="bg-[#003B5C] text-white">Intermediate</option>
                  <option value="Advanced" className="bg-[#003B5C] text-white">Advanced</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="expectations" className="block text-sm font-medium text-white mb-2">What do you expect to learn? *</label>
              <textarea id="expectations" name="expectations" required value={formData.expectations} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" placeholder="Your expectations"></textarea>
            </div>

            <div className="border-t border-white/10 pt-6">
              <button type="submit" className="w-full md:w-auto bg-[#3399FF] hover:bg-[#1a8cff] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">Confirm Registration</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default WorkshopRegistration;
  