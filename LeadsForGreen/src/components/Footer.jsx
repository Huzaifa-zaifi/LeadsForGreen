import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-white text-gray-800 py-10 px-6 md:px-20 border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left section - Logo and description */}
          <div>
            <img src="/Logo.jpeg" alt="Logo" className="w-40 mb-4" />
            <p className="text-sm">
              The ECO4 scheme is the UK government's latest initiative to support low-income households
              in creating energy-efficient homes. It replaced the previous initiative in April 2022
              with the goal of improving energy efficiency in more UK homes. LeadsForGreen ECO is a trading
              name for LeadsForGreen LTD.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-green-600 hover:text-green-800"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-green-600 hover:text-green-800"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-green-600 hover:text-green-800"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
  
          {/* Quick Links */}
          <div>
  <h4 className="font-semibold mb-3">Quick Links</h4>
  <ul className="space-y-2 text-sm">
    <li><Link to="/" className="hover:text-green-600">Home</Link></li>
    <li><Link to="/about" className="hover:text-green-600">About</Link></li>
    <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
    <li><Link to="/faq" className="hover:text-green-600">FAQ</Link></li>
    <li><Link to="/contact" className="hover:text-green-600">Contact Us</Link></li>
    <li><Link to="/policies" className="hover:text-green-600">Policies</Link></li>
  </ul>
</div>
  
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">Get In Touch</h4>
            <p className="text-sm">
              <i className="fas fa-envelope mr-0"></i>
              info@leadsforgreen.com
            </p>
            <p className="text-sm mt-2">
              <i className="fas fa-phone-alt mr-0"></i>
              +44 7590 481136
            </p>
          </div>
  
          {/* Policy Links */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-red-600">
              <Link to="/policies/PrivacyPolicy" className="text-sky-700 hover:underline">
                Privacy Policy
              </Link><br />
              <Link to="/policies/ComplaintsPolicy" className="text-sky-700 hover:underline">
                Complaints Policy
              </Link><br />
              <Link to="/policies/CustomerCharter" className="text-sky-700 hover:underline">
                Terms of Use
              </Link>
            
            </ul>
          </div>
        </div>
  
        <div className="text-center text-sm mt-10 text-gray-500">
          &copy; {new Date().getFullYear()} LeadsForGreen. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  