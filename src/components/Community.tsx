import React, { useState, useEffect } from 'react';
import { Users, Award, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GOOGLE_SHEET_ID = '1FwMHh5uyxN5Z0_Fu57xFW8-21ZemOkdyYOcw1NBVnqE';
const API_KEY = 'AIzaSyBWUstEae96E-SWITiV_sy_r4UGRdwCCxo';
const SHEET_NAME = 'CommunityMembers';

const Community = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );
        const data = await response.json();

        if (data.values && data.values.length > 1) {
          // Extract the first 4 rows (excluding headers)
          const formattedData = data.values.slice(1, 5).map((row) => ({
            name: row[1], // Assuming first column is 'name'
            role: row[2], // Assuming second column is 'role'
            linkedin: row[4], // Assuming third column is 'linkedin'
            company: row[3] ? row[3] : 'Freelancer / Individual', // Handling missing company field
          }));

          setInfluencers(formattedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-24 bg-[#003A57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Our <span className="text-[#99CCFF]">Community</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Connect with 2000+ leading Malayalee professionals shaping the
            future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {influencers.map((person, index) => (
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
              <h3 className="text-lg font-semibold text-white mb-1">
                {person.name}
              </h3>
              <p className="text-sm text-[#99CCFF]">{person.role}</p>
              <p className="text-sm text-white/70">{person.company}</p>
            </a>
          ))}
        </div>

        <div className="text-center mb-16">
          <Link
            to="/community"
            className="inline-flex items-center space-x-2 text-[#99CCFF] hover:text-white transition-colors group"
          >
            <span className="text-xl">View Full Community</span>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-[#004F74]/30 rounded-lg p-6">
            <Users className="w-10 h-10 text-[#99CCFF] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">2000+</h3>
            <p className="text-white/80">Active Members</p>
          </div>
          <div className="bg-[#004F74]/30 rounded-lg p-6">
            <Briefcase className="w-10 h-10 text-[#99CCFF] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">500+</h3>
            <p className="text-white/80">Companies</p>
          </div>
          <div className="bg-[#004F74]/30 rounded-lg p-6">
            <Award className="w-10 h-10 text-[#99CCFF] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">50+</h3>
            <p className="text-white/80">Industry Leaders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
