import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, MapPin, Clock, Users, ArrowLeft, Laptop, BookOpen, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SHEET_ID = '1FwMHh5uyxN5Z0_Fu57xFW8-21ZemOkdyYOcw1NBVnqE';
const API_KEY = 'AIzaSyBWUstEae96E-SWITiV_sy_r4UGRdwCCxo';
const SHEET_NAME = 'workshops';
const GOOGLE_SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

interface Workshop {
  id: number;
  title: string;
  titleEn: string;
  date: string;
  time: string;
  location: string;
  instructor: string;
  seats: string;
  price: string;
  description: string;
  topics: string[];
}

const Workshop: React.FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(GOOGLE_SHEET_URL)
      .then((response) => {
        const rows = response.data.values;
        if (rows && rows.length > 1) {
          const formattedWorkshops = rows.slice(1).map((row: string[], index: number) => ({
            id: index + 1,
            title: row[0],
            titleEn: row[1],
            date: row[2],
            time: row[3],
            location: row[4],
            instructor: row[5],
            seats: row[6],
            price: row[7],
            description: row[8],
            topics: row[9] ? row[9].split(';') : [],
          }));
          setWorkshops(formattedWorkshops);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleRegisterClick = (workshopTitle: string) => {
    navigate(`/workshopregister?workshop=${encodeURIComponent(workshopTitle)}`);
  };

  return (
    <div className="pt-20 pb-24 bg-[#003A57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-[#99CCFF] hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Tech <span className="text-[#99CCFF]">Workshops</span></h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">Learn from industry experts in Malayalam. Hands-on workshops designed for practical skill development.</p>
        </div>

        {workshops.length === 0 ? (
          <div className="text-center text-white/80">Loading workshops...</div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-[#004F74]/50 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:scale-[1.02]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">{workshop.title}
                      <span className="block text-lg font-normal text-[#99CCFF] mt-1">{workshop.titleEn}</span>
                    </h3>
                    <p className="text-white/80">{workshop.description}</p>
                    <div className="space-y-4 text-white/80">
                      <div className="flex items-center space-x-3"><Calendar className="w-5 h-5 text-[#99CCFF]" /><span>{workshop.date}</span></div>
                      <div className="flex items-center space-x-3"><Clock className="w-5 h-5 text-[#99CCFF]" /><span>{workshop.time}</span></div>
                      <div className="flex items-start space-x-3"><MapPin className="w-5 h-5 text-[#99CCFF] flex-shrink-0" /><span>{workshop.location}</span></div>
                      <div className="flex items-center space-x-3"><Users className="w-5 h-5 text-[#99CCFF]" /><span>{workshop.seats} seats available</span></div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-[#003B5C] rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center"><Laptop className="w-5 h-5 text-[#99CCFF] mr-2" />Topics Covered</h4>
                      <ul className="space-y-2">
                        {workshop.topics.map((topic, index) => (
                          <li key={index} className="text-white/80 flex items-center">
                            <BookOpen className="w-4 h-4 text-[#99CCFF] mr-2" />{topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#003B5C] rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center"><Award className="w-5 h-5 text-[#99CCFF] mr-2" />Instructor</h4>
                      <p className="text-white/80">{workshop.instructor}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#99CCFF]">{workshop.price}</span>
                      <button 
                        onClick={() => handleRegisterClick(workshop.title)}
                        className="bg-[#3399FF] hover:bg-[#1a8cff] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshop;
