import React from 'react';

interface WorkshopRegistrationProps {
  workshopTitle: string;
}

const WorkshopRegistration: React.FC<WorkshopRegistrationProps> = ({ workshopTitle }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Register for {workshopTitle}</h2>
      <iframe
        src={`https://tally.so/r/wz1jkq?embed=1&workshop=${encodeURIComponent(workshopTitle)}`}
        width="100%"
        height="600px"
        style={{ border: 'none', background: 'white' }}
        title="Workshop Registration"
      />
    </div>
  );
};

export default WorkshopRegistration;
