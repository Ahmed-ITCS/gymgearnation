
import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gym-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-gym-orange" />
            <span className="text-xl font-bold">AU Gym Accessories</span>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gym-orange transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gym-orange transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gym-orange transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-300">
            © 2025 AU Gym Store. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
