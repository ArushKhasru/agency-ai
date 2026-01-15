import assets from '../assets/assets';
import { MdOutlineDarkMode } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { useState } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState();
  const handleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <nav className={`w-full sticky top-0 z-50 transition-colors duration-300 ${isDark ? 'bg-black/90 text-white' : 'bg-white/90 text-gray-900'} backdrop-blur-xl`}>
      
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4'>
        
        {/* Logo Toggle */}
        <img
          src={isDark ? assets.logo_dark : assets.logo}
          className='w-32 sm:w-40 cursor-pointer'
          alt='logo'
        />

        {/* Navigation Links */}
        <div className='hidden md:block'>
          <ul className={`flex gap-8 font-medium cursor-pointer ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className="hover:text-blue-500 transition">Home</li>
            <li className="hover:text-blue-500 transition">Services</li>
            <li className="hover:text-blue-500 transition">Our Work</li>
            <li className="hover:text-blue-500 transition">Testimonials</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className='flex items-center gap-4'>
          <button 
            onClick={handleTheme} 
            className={`text-2xl border rounded-full w-10 h-10 flex items-center justify-center transition-all
              ${isDark ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400/10' : 'border-gray-400 text-gray-600 hover:bg-gray-100'}`}
          >
            {isDark ? <CiLight /> : <MdOutlineDarkMode />}
          </button>

          <button className='hidden sm:flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full transition-all gap-2 group'>
            Connect 
            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;