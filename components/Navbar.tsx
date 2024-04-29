'use client'
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo or brand icon */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="https://res.cloudinary.com/dua8sce9b/image/upload/v1714064785/Screenshot_2024-04-25_at_10.34.01_PM-removebg-preview_cvuhgr.png" alt="Logo" />
            <div className='mx-1 text-white'>| Arni</div>
          </div>
          {/* Navigation links */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#" className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle className based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-white block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-white block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium">Products</a>
          <a href="#" className="text-white block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-white block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
