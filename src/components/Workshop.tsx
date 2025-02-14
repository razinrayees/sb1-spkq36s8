import React, { useState } from "react";
import WorkshopRegistration from "./WorkshopRegistration";

const workshops = [
  { id: 1, title: "React Basics", description: "Learn the fundamentals of React.js" },
  { id: 2, title: "Advanced TypeScript", description: "Deep dive into TypeScript" },
];

const Workshop: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  const handleRegisterClick = (workshopTitle: string) => {
    setSelectedWorkshop(workshopTitle);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Smooth scroll to top after setting workshop
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {selectedWorkshop && <WorkshopRegistration workshopTitleEn={selectedWorkshop} />}
      
      <h1 className="text-3xl font-bold text-center mb-6">Available Workshops</h1>
      
      <div className="grid gap-6">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold">{workshop.title}</h2>
            <p className="text-gray-700">{workshop.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleRegisterClick(workshop.title)}
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshop;
