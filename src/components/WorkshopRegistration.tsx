import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const WorkshopRegistration: React.FC = () => {
  const { titleEn } = useParams<{ titleEn: string }>(); // Get workshop title from URL
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <button
        onClick={() => navigate("/workshop")}
        className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        ← Back to Workshops
      </button>
      
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Register for {decodeURIComponent(titleEn!)}
        </h2>
        <iframe
          src={`https://tally.so/r/wz1jkq?embed=1&Workshop%20Name=${encodeURIComponent(titleEn!)}`}
          width="100%"
          height="600px"
          style={{ border: "none", background: "white" }}
          title="Workshop Registration"
        />
      </div>
    </div>
  );
};

export default WorkshopRegistration;
