"use client"
import React, { useState } from 'react';

const Header = () => (
  <header className="bg-blue-500 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Revolution GYM</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="bg-cover bg-center py-20" style={{ 
    backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?gym,fitness)' 
  }}>
    <div className="container mx-auto flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Revolution GYM</h1>
      <p className="text-white mb-8">Join the revolution and transform your body with us!</p>
      <button className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-200">Join Now</button>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="flex flex-col text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-dumbbell text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Weight Lifting</h3>
            <p className="text-gray-600 mb-4">Build your strength and endurance with our state-of-the-art weight lifting equipment.</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="flex flex-col text-center">
            <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-running text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Cardio</h3>
            <p className="text-gray-600 mb-4">Get your heart rate up with our top-of-the-line cardio machines.</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="flex flex-col text-center">
            <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Group Classes</h3>
            <p className="text-gray-600 mb-4">Join our exciting group classes and get fit with your friends.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="bg-gray-100 py-20">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Pricing</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="bg-white text-gray-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="mb-4">Access to gym and basic equipment</p>
            <div className="text-2xl font-bold mb-4">$29.99</div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gray-200">Sign Up</button>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="bg-white text-gray-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="mb-4">Access to all equipment, group classes, and personal training</p>
            <div className="text-2xl font-bold mb-4">$49.99</div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gray-200">Sign Up</button>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="bg-white text-gray-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Elite</h3>
            <p className="mb-4">Everything in Premium, plus unlimited massages and meals</p>
            <div className="text-2xl font-bold mb-4">$79.99</div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gray-200">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="bg-white text-gray-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Address</h3>
            <p>1234 Revolution Ave</p>
            <p>Los Angeles, CA 90001</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="bg-white text-gray-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Phone</h3>
            <p>1-800-GYM-REV</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-4 mb-8">
          <div className="bg-white text-gray-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Email</h3>
            <p>hello@revolutiongym.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
};

export default App;