"use client"


import React, { useState } from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-500 to-pink-500 justify-center items-center">
      <h1 className="text-6xl font-bold text-white animate-pulse">
        Welcome to our Revolutionary GYM!
      </h1>
      <p className="text-xl text-white mt-5">
        Join us now and experience the future of fitness!
      </p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-500 to-green-500 justify-center items-center">
      <h1 className="text-6xl font-bold text-white animate-pulse">
        About Our Revolutionary GYM
      </h1>
      <p className="text-xl text-white mt-5">
        Our mission is to provide the best fitness experience for the younger generation.
        With our colorful and modern design, we aim to make fitness fun and engaging for everyone.
      </p>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-orange-500 to-yellow-500 justify-center items-center">
      <h1 className="text-6xl font-bold text-white animate-pulse">
        Our Services
      </h1>
      <p className="text-xl text-white mt-5">
        We offer a variety of services to help you reach your fitness goals. From personal training to group classes, we have something for everyone.
      </p>
    </div>
  );
};

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <button onClick={() => setPage('home')} className="mx-2 py-1 px-2 rounded-md bg-blue-500 hover:bg-blue-700">Home</button>
        <button onClick={() => setPage('about')} className="mx-2 py-1 px-2 rounded-md bg-green-500 hover:bg-green-700">About</button>
        <button onClick={() => setPage('services')} className="mx-2 py-1 px-2 rounded-md bg-yellow-500 hover:bg-yellow-700">Services</button>
      </nav>
      <main className="flex-1 p-4">
        {page === 'home' && <HomePage />}
        {page === 'about' && <AboutPage />}
        {page === 'services' && <ServicesPage />}
      </main>
    </div>
  );
};

export default App;