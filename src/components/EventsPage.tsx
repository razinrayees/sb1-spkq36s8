import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [events, setEvents] = useState({ upcoming: [], past: [] });

  useEffect(() => {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1FwMHh5uyxN5Z0_Fu57xFW8-21ZemOkdyYOcw1NBVnqE/values/events?key=AIzaSyBWUstEae96E-SWITiV_sy_r4UGRdwCCxo")
      .then(response => response.json())
      .then(data => {
        const rows = data.values.slice(1);
        const upcoming = [];
        const past = [];
        
        rows.forEach(row => {
          const event = {
            id: row[0],
            title: row[1],
            titleEn: row[2],
            date: row[3],
            time: row[4],
            location: row[5],
            image: row[6],
            registerLink: row[7],
            attendees: row[8] || null
          };
          
          new Date(event.date) > new Date() ? upcoming.push(event) : past.push(event);
        });

        setEvents({ upcoming, past });
      });
  }, []);

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

        {/* Upcoming Events Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming
              <span className="text-[#99CCFF]"> Events</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join us at our upcoming events and connect with the Malayalee tech community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {events.upcoming.map((event) => (
              <div key={event.id} className="bg-[#003B5C]/50 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div 
                    className="h-64 md:h-auto bg-center bg-cover"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {event.title}
                      <span className="block text-lg font-normal text-[#99CCFF] mt-1">
                        {event.titleEn}
                      </span>
                    </h3>

                    <div className="space-y-4 text-white/80 mt-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-[#99CCFF]" />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-[#99CCFF]" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-[#99CCFF] flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="mt-8">
                      <a 
                        href={event.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#3399FF] hover:bg-[#1a8cff] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Past
              <span className="text-[#99CCFF]"> Events</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.past.map((event) => (
              <div key={event.id} className="bg-[#003B5C]/30 backdrop-blur-sm rounded-xl overflow-hidden">
                <div 
                  className="h-48 bg-center bg-cover"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                    <span className="block text-sm font-normal text-[#99CCFF] mt-1">
                      {event.titleEn}
                    </span>
                  </h3>

                  <div className="space-y-3 text-white/80 mt-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#99CCFF]" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#99CCFF]" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-[#99CCFF] flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-[#99CCFF]">
                      {event.attendees}+ Attendees
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
