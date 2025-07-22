import React from 'react';

// Main Buttons
const mainButtons = () => {
  return (
    <div className="hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex justify-start text-2xl items-center shadow-xl z-10 bg-[#e8e4df] dark:bg-[#191818] gap-2 p-2 rounded-full">
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Like'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#191818] rounded-full p-2 px-3">
        <img src="../../assets/images/about.png" alt="about" />
      </button>
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Cheer'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#191818] rounded-full p-2 px-3">
        <img src="../../assets/images/work.png" alt="work" />
      </button>
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Celebrate'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#191818] rounded-full p-2 px-3">
        <img src="../../assets/images/home.png" alt="home" />
      </button>
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Appreciate'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#191818] rounded-full p-2 px-3">
        <img src="../../assets/images/education.png" alt="education" />
      </button>
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Smile'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white dark:bg-[#191818] rounded-full p-2 px-3">
        <img src="../../assets/images/links.png" alt="links" />
      </button>
    </div>
  );
}

export default mainButtons;
