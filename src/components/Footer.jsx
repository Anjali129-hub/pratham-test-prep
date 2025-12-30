import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 to-gray-800 text-gray-300 px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Brand */}
        <h3 className="text-2xl font-bold text-white mb-4">
          Pratham Test Prep
        </h3>

        <p className="text-sm text-gray-400 max-w-md mx-auto mb-8">
          Empowering students with expert guidance, structured learning, and the
          confidence to succeed in competitive exams.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-sky-500 transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Pratham Test Prep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
