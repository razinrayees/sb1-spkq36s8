import React, { useEffect, useState } from 'react';
import { Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SHEET_ID = '1FwMHh5uyxN5Z0_Fu57xFW8-21ZemOkdyYOcw1NBVnqE';
const API_KEY = 'AIzaSyBWUstEae96E-SWITiV_sy_r4UGRdwCCxo';
const SHEET_NAME = 'Form responses 1';

const CommunityFull = () => {
  const [allMembers, setAllMembers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchGoogleSheetData();
  }, []);

  const fetchGoogleSheetData = async () => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
      );
      const data = await response.json();
      const rows = data.values.slice(1); // Remove headers

      const members = rows.map((row) => ({
        name: row[1],
        role: row[2],
        company: row[3],
        linkedin: row[4],
      }));
      setAllMembers(members);
    } catch (error) {
      console.error('Error fetching Google Sheet data:', error);
    }
  };

  return (
    <div className="pt-20 pb-24 bg-[#003A57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-[#99CCFF] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our
            <span className="text-[#99CCFF]"> Community</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Meet the talented Malayalee professionals making waves across the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allMembers.map((person, index) => (
            <a
              key={index}
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004F74]/50 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-[#99CCFF]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-[#99CCFF] font-bold">
                  {person.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{person.name}</h3>
              <p className="text-sm text-[#99CCFF] mb-1">{person.role}</p>
              <p className="text-sm text-white/60">@ {person.company}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityFull;