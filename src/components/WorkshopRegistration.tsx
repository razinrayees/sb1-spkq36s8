import React from 'react';
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
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedTitle = encodeURIComponent(workshop.title);
    window.location.href = `https://tally.so/r/wz1jkq?workshop=${encodedTitle}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#003B5C] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#003B5C] p-6 border-b border-white/10 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">{workshop.title}</h2>
            <p className="text-[#99CCFF]">{workshop.titleEn}</p>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white">
                <p className="font-semibold">Workshop Details:</p>
                <p className="text-white/80">{workshop.date} | {workshop.time}</p>
                <p className="text-[#99CCFF] font-bold">{workshop.price}</p>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-[#3399FF] hover:bg-[#1a8cff] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkshopRegistration;