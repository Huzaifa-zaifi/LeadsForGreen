import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = ({ setFormOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isPoliciesOpen, setPoliciesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef();
  const policiesRef = useRef();
  const location = useLocation();

  // Unified active class logic
  const getNavLinkClass = (path, exact = false) =>
    (exact ? location.pathname === path : location.pathname.startsWith(path))
      ? "bg-white text-sky-700 font-semibold px-2 py-1 rounded transition"
      : "hover:underline";

  const getDropdownLinkClass = (path) =>
    location.pathname.startsWith(path)
      ? "bg-white-700 text-black font-semibold px-4 py-2"
      : "hover:bg-sky-700 hover:text-white px-4 py-2 transition";

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

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <FaBars size={22} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className={getNavLinkClass("/", true)}>Home</Link>
          <Link to="/about" className={getNavLinkClass("/about", true)}>About</Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button onClick={() => setServicesOpen(!isServicesOpen)} className="hover:underline">
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white text-black shadow rounded mt-2 py-2 w-60 z-10">
                <Link to="/free-external-wall-insulation" className={`block ${getDropdownLinkClass("/free-external-wall-insulation")}`}>
                  Free External Wall Insulation
                </Link>
                <Link to="/free-solar-panels" className={`block ${getDropdownLinkClass("/free-solar-panels")}`}>
                  Free Solar Panels Grants
                </Link>
                <Link to="/free-internal-wall-insulation" className={`block ${getDropdownLinkClass("/free-internal-wall-insulation")}`}>
                  Free Internal Wall Insulation
                </Link>
                <Link to="/free-air-source-heat-pump" className={`block ${getDropdownLinkClass("/free-air-source-heat-pump")}`}>
                  Free Air Source Heat Pump Grants
                </Link>
                <Link to="/free-back-boiler-replacement" className={`block ${getDropdownLinkClass("/free-back-boiler-replacement")}`}>
                  Free Back Boiler Replacement
                </Link>
                <Link to="/free-boiler-replacement" className={`block ${getDropdownLinkClass("/free-boiler-replacement")}`}>
                  Free Boiler Replacement
                </Link>
                <Link to="/free-loft-insulation" className={`block ${getDropdownLinkClass("/free-loft-insulation")}`}>
                  Free Loft Insulation
                </Link>
              </div>
            )}
          </div>

          <Link to="/faq" className={getNavLinkClass("/faq", true)}>FAQ</Link>
          <Link to="/contact" className={getNavLinkClass("/contact", true)}>Contact Us</Link>
          <Link to="/policies" className={getNavLinkClass("/policies", true)}>Policies</Link>

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
        <div className="md:hidden px-4 pb-4 bg-sky-600 text-white space-y-2">
          <div className="flex flex-col space-y-2">
            <Link to="/" className={getNavLinkClass("/", true)}>Home</Link>
            <Link to="/about" className={getNavLinkClass("/about", true)}>About</Link>

            {/* Mobile Services Dropdown */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="text-left w-full  rounded"
            >
              Services
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col space-y-1">
                <Link to="/free-external-wall-insulation" className={getDropdownLinkClass("/free-external-wall-insulation")}>
                  Free External Wall Insulation
                </Link>
                <Link to="/free-solar-panels" className={getDropdownLinkClass("/free-solar-panels")}>
                  Free Solar Panels Grants
                </Link>
                <Link to="/free-internal-wall-insulation" className={getDropdownLinkClass("/free-internal-wall-insulation")}>
                  Free Internal Wall Insulation
                </Link>
                <Link to="/free-air-source-heat-pump" className={getDropdownLinkClass("/free-air-source-heat-pump")}>
                  Free Air Source Heat Pump Grants
                </Link>
                <Link to="/free-back-boiler-replacement" className={getDropdownLinkClass("/free-back-boiler-replacement")}>
                  Free Back Boiler Replacement
                </Link>
                <Link to="/free-boiler-replacement" className={getDropdownLinkClass("/free-boiler-replacement")}>
                  Free Boiler Replacement
                </Link>
                <Link to="/free-loft-insulation" className={getDropdownLinkClass("/free-loft-insulation")}>
                  Free Loft Insulation
                </Link>
              </div>
            )}

            <Link to="/faq" className={getNavLinkClass("/faq", true)}>FAQ</Link>
            <Link to="/contact" className={getNavLinkClass("/contact", true)}>Contact Us</Link>
            <Link to="/policies" className={getNavLinkClass("/policies", true)}>Policies</Link>
          </div>

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
