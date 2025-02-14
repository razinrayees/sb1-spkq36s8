import React from 'react';
import { Globe2, Users2, Rocket, Building2, ArrowLeft, Briefcase, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
            About
            <span className="text-[#99CCFF]"> Linked-ഇൻ</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're building the largest professional network of Malayalees worldwide, 
            connecting talent, opportunities, and cultural heritage in one powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#003B5C]/50 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-[#003B5C]/70">
            <div className="bg-[#99CCFF]/10 rounded-xl p-4 inline-block mb-6">
              <Globe2 className="w-12 h-12 text-[#99CCFF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
            <p className="text-white/80 leading-relaxed">
              Connecting Malayalee professionals across continents, creating a powerful network
              that transcends geographical boundaries.
            </p>
          </div>

          <div className="bg-[#003B5C]/50 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-[#003B5C]/70">
            <div className="bg-[#99CCFF]/10 rounded-xl p-4 inline-block mb-6">
              <Target className="w-12 h-12 text-[#99CCFF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To empower Malayalee professionals worldwide by creating meaningful connections,
              fostering growth, and celebrating our shared heritage.
            </p>
          </div>

          <div className="bg-[#003B5C]/50 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-[#003B5C]/70">
            <div className="bg-[#99CCFF]/10 rounded-xl p-4 inline-block mb-6">
              <Users2 className="w-12 h-12 text-[#99CCFF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Community First</h3>
            <p className="text-white/80 leading-relaxed">
              Building a supportive ecosystem where Malayalees help each other grow,
              share opportunities, and celebrate success together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#003B5C]/30 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">What We Do</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#99CCFF]/10 rounded-lg p-3">
                  <Briefcase className="w-6 h-6 text-[#99CCFF]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Career Growth</h4>
                  <p className="text-white/80">Facilitating professional development through mentorship and job opportunities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#99CCFF]/10 rounded-lg p-3">
                  <Award className="w-6 h-6 text-[#99CCFF]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Industry Excellence</h4>
                  <p className="text-white/80">Showcasing Malayalee achievements across various industries globally.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#99CCFF]/10 rounded-lg p-3">
                  <Rocket className="w-6 h-6 text-[#99CCFF]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Innovation Hub</h4>
                  <p className="text-white/80">Creating a platform for collaboration and knowledge sharing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#003B5C]/30 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Our Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-[#003A57] rounded-xl">
                <div className="text-4xl font-bold text-[#99CCFF] mb-2">2000+</div>
                <div className="text-white/80">Active Members</div>
              </div>
              <div className="text-center p-6 bg-[#003A57] rounded-xl">
                <div className="text-4xl font-bold text-[#99CCFF] mb-2">500+</div>
                <div className="text-white/80">Companies</div>
              </div>
              <div className="text-center p-6 bg-[#003A57] rounded-xl">
                <div className="text-4xl font-bold text-[#99CCFF] mb-2">50+</div>
                <div className="text-white/80">Industry Leaders</div>
              </div>
              <div className="text-center p-6 bg-[#003A57] rounded-xl">
                <div className="text-4xl font-bold text-[#99CCFF] mb-2">20+</div>
                <div className="text-white/80">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;