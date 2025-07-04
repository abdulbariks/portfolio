import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>❤️</span>
        <p className="text-white">{currentYear} &copy; Copyright Abdul Barik</p>
      </div>
    </footer>
  );
};

export default Footer;
