import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddCommunityMemberProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCommunityMember = ({ isOpen, onClose }: AddCommunityMemberProps) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    linkedin: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Form URL for submission (replace with the actual URL)
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeXdIIDnChe52WARcFoBkbIYx9N4X2xAoF28zM-OoTMQVIOrg/formResponse";
    
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("entry.803419516", formData.name);
    formDataToSubmit.append("entry.2066429613", formData.role);
    formDataToSubmit.append("entry.1016759809", formData.company);
    formDataToSubmit.append("entry.1885695706", formData.linkedin);
    
    fetch(googleFormURL, {
      method: "POST",
      body: formDataToSubmit,
      mode: "no-cors"
    }).then(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();

        // Auto refresh after 5 seconds
        window.location.reload();  // This will refresh the page
      }, 5000);
    }).catch(error => console.error("Error submitting form:", error));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // If the field is 'linkedin', ensure the prefix is added
    if (name === 'linkedin' && !value.startsWith('https://www.linkedin.com/in/')) {
      setFormData({
        ...formData,
        [name]: `https://www.linkedin.com/in/${value}`,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#003B5C] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#003B5C] p-6 border-b border-white/10 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Add Community Member</h2>
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
            <p className="text-xl font-semibold">Thank you for adding the member!</p>
            <p className="text-white/80">The details have been submitted successfully.</p>
            <p className="text-white/80">The page will refresh in 5 seconds.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" 
                  placeholder="Member's full name" 
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-white mb-2">Role *</label>
                <input 
                  type="text" 
                  id="role" 
                  name="role" 
                  required 
                  value={formData.role} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" 
                  placeholder="Member's role (e.g., Software Engineer)" 
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  required 
                  value={formData.company} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" 
                  placeholder="Member's company" 
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-white mb-2">LinkedIn Profile Link *</label>
                <input 
                  type="url" 
                  id="linkedin" 
                  name="linkedin" 
                  required 
                  value={formData.linkedin} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#66B2FF] focus:border-transparent text-white placeholder-white/50" 
                  placeholder="https://www.linkedin.com/in/" 
                />
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <button 
                type="submit" 
                className="w-full md:w-auto bg-[#3399FF] hover:bg-[#1a8cff] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Add Member
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddCommunityMember;
