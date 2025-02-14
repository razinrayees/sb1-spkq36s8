import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WorkshopRegistration: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const titleEn = searchParams.get("titleEn") || "the Workshop"; // Default fallback

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on load
  }, []);

  // Pass titleEn to the Tally form as a prefilled parameter
  const tallyFormUrl = `https://tally.so/r/wz1jkq?workshop_name=${encodeURIComponent(titleEn)}`;

  return (
    <div className="min-h-screen bg-[#003A57] flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-[#004F74]/50 backdrop-blur-sm p-8 rounded-xl shadow-lg text-white">
        <Link to="/workshop" className="inline-flex items-center text-[#99CCFF] hover:text-white transition-colors group mb-6">
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Workshops
        </Link>

        <h1 className="text-3xl font-bold text-center mb-6">
          Register for <span className="text-[#99CCFF]">{titleEn}</span>
        </h1>

        <div className="w-full h-[500px]">
          <iframe
            src={tallyFormUrl} // Updated URL with prefilled Workshop Name
            title="Workshop Registration"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WorkshopRegistration;
