import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-3xl">New Generation High School</h1>
          </div>
          <div className="flex">
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;