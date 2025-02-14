import React from 'react';
import { Globe2, Users2, Rocket, Building2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#003B5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            About
            <span className="text-[#99CCFF]"> Linked-ഇൻ</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A community built by Malayalees, for Malayalees worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#003A57] rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
            <Globe2 className="w-12 h-12 text-[#99CCFF] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
            <p className="text-white/80">
              Connecting Malayalee professionals across continents, creating a powerful network
              that transcends geographical boundaries.
            </p>
          </div>

          <div className="bg-[#003A57] rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
            <Users2 className="w-12 h-12 text-[#99CCFF] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Community First</h3>
            <p className="text-white/80">
              Building a supportive ecosystem where Malayalees help each other grow,
              share opportunities, and celebrate success together.
            </p>
          </div>

          <div className="bg-[#003A57] rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
            <Rocket className="w-12 h-12 text-[#99CCFF] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Career Growth</h3>
            <p className="text-white/80">
              Facilitating professional development through mentorship, job opportunities,
              and knowledge sharing within the community.
            </p>
          </div>

          <div className="bg-[#003A57] rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
            <Building2 className="w-12 h-12 text-[#99CCFF] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Industry Leaders</h3>
            <p className="text-white/80">
              Showcasing Malayalee excellence across tech giants and startups,
              inspiring the next generation of leaders.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Join us in building the largest professional network of Malayalees,
            where culture meets career growth, and community drives success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;