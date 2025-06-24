import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = ({ setFormOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isPoliciesOpen, setPoliciesOpen] = useState(false);

  const servicesRef = useRef();
  const policiesRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (policiesRef.current && !policiesRef.current.contains(event.target)) {
        setPoliciesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-sky-600 text-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
  <img src="/Logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full shadow-lg" />
  <span className="font-extrabold text-lg sm:text-xl tracking-wide">LeadsForGreen</span>
</Link>


        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <FaBars size={22} />
          </button>
        </div>

        {/* Nav links - Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button onClick={() => setServicesOpen(!isServicesOpen)} className="hover:underline">
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white text-black shadow rounded mt-2 py-2 w-60 z-10">
                <Link to="/free-external-wall-insulation" className="block px-4 py-2 hover:bg-gray-100">Free External Wall Insulation</Link>
                <Link to="/free-solar-panels" className="block px-4 py-2 hover:bg-gray-100">Free Solar Panels Grants</Link>
                <Link to="/free-internal-wall-insulation" className="block px-4 py-2 hover:bg-gray-100">Free Internal Wall Insulation</Link>
                <Link to="/free-air-source-heat-pump" className="block px-4 py-2 hover:bg-gray-100">Free Air Source Heat Pump Grants</Link>
                <Link to="/free-back-boiler-replacement" className="block px-4 py-2 hover:bg-gray-100">Free Back Boiler Replacement</Link>
                <Link to="/free-boiler-replacement" className="block px-4 py-2 hover:bg-gray-100">Free Boiler Replacement</Link>
              </div>
            )}
          </div>

          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <Link to="/policies" className="hover:underline">Policies</Link>

          <button
            onClick={() => setFormOpen(true)}
            className="bg-white text-cyan-600 px-4 py-2 rounded hover:bg-gray-100 text-sm"
          >
            Apply Now
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-sky-600 text-white">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/about" className="block hover:underline">About</Link>
          <Link to="/faq" className="block hover:underline">FAQ</Link>
          <Link to="/contact" className="block hover:underline">Contact Us</Link>
          <Link to="/policies" className="block hover:underline">Policies</Link>

          <div className="pt-2">
            <button
              onClick={() => setFormOpen(true)}
              className="w-full bg-white text-cyan-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
