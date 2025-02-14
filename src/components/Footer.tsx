import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002D45] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Linked-ഇൻ</h3>
            <p className="text-white/70">
              Connecting Malayalee professionals worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#community" className="text-white/70 hover:text-white transition-colors">Community</a>
              </li>
              <li>
                <a href="#events" className="text-white/70 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#resources" className="text-white/70 hover:text-white transition-colors">Resources</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Join Community</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Newsletter</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50">
            © {new Date().getFullYear()} Linked-ഇൻ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;