import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";


const GOOGLE_SHEET_ID ='1FwMHh5uyxN5Z0_Fu57xFW8-21ZemOkdyYOcw1NBVnqE';
const GOOGLE_API_KEY = 'AIzaSyBWUstEae96E-SWITiV_sy_r4UGRdwCCxo';
const SHEET_NAME = 'events'; // Change if your sheet has a different name

const Events = ({ id }: { id?: string }) => {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    const fetchLatestEvent = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${SHEET_NAME}?key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();

        if (!data.values) return;

        // Extract the header and rows
        const headers = data.values[0]; // First row is header
        const rows = data.values.slice(1); // Remaining rows are data

        // Convert rows into objects
        const events = rows.map((row) =>
          Object.fromEntries(row.map((value, index) => [headers[index], value]))
        );

        // Filter only valid events with date and sort by latest date
        const upcomingEvents = events
          .filter((event) => new Date(event.date) >= new Date()) // Only future events
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort by date

        if (upcomingEvents.length > 0) {
          setEvent(upcomingEvents[0]); // Take the latest event
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchLatestEvent();
  }, []);

  if (!event) {
    return <p className="text-white text-center">Loading event...</p>;
  }

  return (
    <section id={id} className="py-24 bg-[#003A57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Upcoming
            <span className="text-[#99CCFF]"> Events</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#004F74]/50 backdrop-blur-sm rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 md:mb-0">
                {event.title}
                <span className="block text-lg font-normal text-[#99CCFF] mt-1">
                  {event.titleEn}
                </span>
              </h3>
              <div className="flex items-center space-x-2 text-white/80">
                <Calendar className="w-5 h-5" />
                <span>{new Date(event.date).toDateString()}</span>
              </div>
            </div>

            <div className="space-y-4 text-white/80">
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
    </section>
  );
};

export default Events;
