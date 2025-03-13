
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, TrendingUp, ShieldCheck } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gym-dark to-transparent opacity-70" />
        <div 
          className="h-[70vh] w-full bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Upgrade Your <span className="text-gym-orange">Gym Gear</span>
              </h1>
              <p className="text-xl text-white mb-8">
                High-quality gym accessories, directly from suppliers. Take your workouts to the next level.
              </p>
              <Link to="/products">
                <Button className="bg-gym-orange hover:bg-gym-orange/90 text-white font-bold py-3 px-6 rounded-md text-lg">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Products?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
            <div className="mx-auto w-16 h-16 bg-gym-orange/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-gym-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              All our products are made with high-quality materials designed to last through intense workouts.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
            <div className="mx-auto w-16 h-16 bg-gym-blue/10 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-gym-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Performance Enhancing</h3>
            <p className="text-gray-600">
              Our gear is designed to help you improve your performance and achieve your fitness goals faster.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105">
            <div className="mx-auto w-16 h-16 bg-gym-pink/10 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-8 w-8 text-gym-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-3">100% Guaranteed</h3>
            <p className="text-gray-600">
              We stand behind our products with a 100% satisfaction guarantee on all purchases.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gym-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Workouts?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our collection of premium gym accessories and take your fitness journey to the next level.
          </p>
          <Link to="/products">
            <Button className="bg-gym-orange hover:bg-gym-orange/90 text-white font-bold py-3 px-8 rounded-md text-lg animate-pulse-glow">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
