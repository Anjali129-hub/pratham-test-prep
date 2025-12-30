import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          Pratham Test Prep
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#courses" className="hover:text-blue-600">Courses</a></li>
          <li><a href="#why-us" className="hover:text-blue-600">Why Us</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Reviews</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enroll Now
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            <li><a onClick={() => setIsOpen(false)} href="#hero">Home</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#courses">Courses</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#why-us">Why Us</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#testimonials">Reviews</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>

            <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Enroll Now
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
