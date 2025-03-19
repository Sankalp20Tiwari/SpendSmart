import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Brand Name */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-2xl font-bold">SpendSmart</h2>
          <p className="text-sm mt-1">Smart financial decisions start here.</p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex space-x-6 my-4 md:my-0">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-white transition">Privacy</Link>
        </div>

        {/* Right: Social Media */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebookF size={20} className="hover:text-white transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter size={20} className="hover:text-white transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram size={20} className="hover:text-white transition" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin size={20} className="hover:text-white transition" />
          </Link>
        </div>
      </div>

      {/* Bottom: Copyright Notice */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} SpendSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

