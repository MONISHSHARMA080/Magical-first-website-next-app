"use client" 
import React, { useState } from 'react';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl text-white font-bold text-center">
            Revolutionary GYM
          </h1>
        </div>
      </header>

      <main className="flex-grow flex">
        <aside className="w-64 bg-gray-200">
          <nav className="py-4">
            <ul className="space-y-2">
              <li>
                <button
                  className={w-full block py-2 px-4 rounded hover:bg-gray-300 ${
                    page === 'home' ? 'bg-gray-300' : ''
                  }}
                  onClick={() => setPage('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={w-full block py-2 px-4 rounded hover:bg-gray-300 ${
                    page === 'about' ? 'bg-gray-300' : ''
                  }}
                  onClick={() => setPage('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className={w-full block py-2 px-4 rounded hover:bg-gray-300 ${
                    page === 'services' ? 'bg-gray-300' : ''
                  }}
                  onClick={() => setPage('services')}
                >
                  Services
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="flex-1 p-4">
          {page === 'home' && (
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="text-4xl text-blue-500 font-bold">
                Welcome to the Revolutionary GYM
              </h2>
              <p className="text-gray-600 mt-4">
                Join us and be a part of the future of fitness.
              </p>
            </div>
          )}
          {page === 'about' && (
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="text-4xl text-blue-500 font-bold">
                About Us
              </h2>
              <p className="text-gray-600 mt-4">
                We are a group of fitness enthusiasts who believe in pushing
                the boundaries of what is possible. Join us and be a part of
                the revolution.
              </p>
            </div>
          )}
          {page === 'services' && (
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="text-4xl text-blue-500 font-bold">
                Our Services
              </h2>
              <ul className="list-disc list-inside text-gray-600 mt-4">
                <li>Personal Training</li>
                <li>Group Classes</li>
                <li>Nutrition Coaching</li>
                <li>Massage Therapy</li>
              </ul>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-blue-500 py-4 text-center text-white">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Revolutionary GYM. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;