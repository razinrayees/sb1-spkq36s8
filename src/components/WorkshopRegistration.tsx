import React from 'react';

interface WorkshopRegistrationProps {
  workshopTitle: string;
}

const WorkshopRegistration: React.FC<WorkshopRegistrationProps> = ({ workshopTitle }) => {
  return (
    <iframe
      src={`https://tally.so/r/wz1jkq?embed=1&workshop=${encodeURIComponent(workshopTitle)}`}
      width="100%"
      height="600px"
      style={{ border: 'none', background: 'white' }}
      title="Workshop Registration"
    />
  );
};

export default WorkshopRegistration;
