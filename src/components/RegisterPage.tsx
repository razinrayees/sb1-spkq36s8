import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/workshop'); // Navigate back to the workshop page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Ensure scrolling to top
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#00304D] text-white">
      <h1 className="text-3xl font-bold mb-6">Register for the Workshop</h1>
      {/* Add registration form or embedded content here */}
      <button 
        onClick={goBack} 
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
      >
        Go Back to Workshops
      </button>
    </div>
  );
};

export default RegisterPage;
