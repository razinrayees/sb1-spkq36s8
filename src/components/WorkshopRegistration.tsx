import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const WorkshopRegistration: React.FC = () => {
  const [searchParams] = useSearchParams();
  const workshopTitle = searchParams.get('title') || '';
  const workshopTitleEn = searchParams.get('titleEn') || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registered for: ${workshopTitle} (${workshopTitleEn})`);
  };

  return (
    <div className="pt-20 pb-24 bg-[#003A57] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/workshop" className="inline-flex items-center text-[#99CCFF] hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Workshops
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-6">Register for <span className="text-[#99CCFF]">{workshopTitle}</span></h1>

        <form onSubmit={handleSubmit} className="bg-[#004F74] p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="text-white block mb-2">Workshop Name</label>
            <input type="text" value={`${workshopTitle} (${workshopTitleEn})`} disabled className="w-full p-3 rounded bg-gray-700 text-white"/>
          </div>
          <div className="mb-4">
            <label className="text-white block mb-2">Your Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded"/>
          </div>
          <button type="submit" className="bg-[#3399FF] text-white px-4 py-2 rounded">Register</button>
        </form>
      </div>
    </div>
  );
};

export default WorkshopRegistration;
