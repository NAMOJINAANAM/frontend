'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaGamepad, 
  FaUtensils, 
  FaGlassCheers, 
  FaImages, 
  FaPhone, 
  FaChevronDown,
  FaChevronUp,
  FaArrowUp,
  FaBars
} from 'react-icons/fa';

const navigation = [
  { 
    name: "Home", 
    href: "/",
    icon: FaHome,
    color: "home"
  },
  { 
    name: "Gaming", 
    href: "/gaming",
    icon: FaGamepad,
    color: "gaming",
    dropdown: [
      { name: "Arcade Games", href: "/gaming/arcade" },
      { name: "Bowling Alley", href: "/gaming/bowling" },
      { name: "VR Games", href: "/gaming/vr" },
      { name: "All Games", href: "/gaming" },
    ]
  },
  { 
    name: "Food", 
    href: "/food",
    icon: FaUtensils,
    color: "food"
  },
  { 
    name: "Celebration", 
    href: "/celebrations",
    icon: FaGlassCheers,
    color: "celebration",
    dropdown: [
      { name: "Birthday Parties", href: "/celebrations/birthdays" },
      { name: "Corporate Events", href: "/celebrations/corporate" },
      { name: "Custom Events", href: "/celebrations/custom" },
    ]
  },
  { 
    name: "Gallery", 
    href: "/gallery",
    icon: FaImages,
    color: "gallery"
  },
  { 
    name: "Contact", 
    href: "/contact",
    icon: FaPhone,
    color: "contact"
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (activeDropdown !== null && 
          dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown]!.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Toggle dropdown
  const toggleDropdown = (e:any, index:any) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Handle hover for desktop dropdowns
  const handleMouseEnter = (index:any) => {
    if (window.innerWidth >= 1024) { // Only for desktop
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // Only for desktop
      setActiveDropdown(null);
    }
  };

  // Check if a nav item is active
  const isActive = (href:string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden lg:block fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white backdrop-blur-md shadow-lg py-2' 
          : 'bg-[#0D0D2B] py-4'
      }`}>
        <div className="container-fluid mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isScrolled ? 'bg-[#0D0D2B]' : 'bg-white'
              }`}> */}
                  <img src="/images/logo.png" className='w-12 h-12' alt="logo" />
              {/* </div> */}
            </Link>

            {/* Navigation */}
            <nav className="flex items-center space-x-1">
              {navigation
              .filter(item=>item.name!="Home")
              .map((item, index) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  ref={(el) => {
  dropdownRefs.current[index] = el;
}}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-[#0D0D2B] text-white shadow-lg'
                        : isScrolled
                        ? 'text-[#0D0D2B] hover:bg-gray-100'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                    onClick={(e) => item.dropdown && toggleDropdown(e, index)}
                  >
                    <item.icon className="mr-2" />
                    {item.name}
                    {item.dropdown && (
                      <span className="ml-2">
                        {activeDropdown === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </span>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div 
                      className={`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-lg overflow-hidden transition-all duration-300 origin-top ${
                        activeDropdown === index
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95 pointer-events-none'
                      } ${
                        isScrolled 
                          ? 'bg-white border border-gray-200' 
                          : 'bg-[#0D0D2B] border border-gray-800'
                      }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-4 py-3 transition-all duration-200 ${
                            isScrolled
                              ? 'text-[#0D0D2B] hover:bg-gray-100'
                              : 'text-gray-200 hover:bg-white/10 hover:text-white'
                          } ${isActive(dropdownItem.href) ? (isScrolled ? 'bg-gray-100' : 'bg-white/10 text-white') : ''}`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <button className={`px-6 py-2 rounded-full font-semibold transition-all ${
              isScrolled
                ? 'bg-[#0D0D2B] text-white hover:shadow-lg'
                : 'bg-white text-[#0D0D2B] hover:bg-gray-100'
            }`}>
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Top Bar (visible on small screens) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0D0D2B] text-white p-3 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center"> */}
              <img src="/images/logo.png" className='w-12 h-12' alt="logo" />
            {/* </div> */}
          </Link>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/contact" 
              className="px-3 py-1 bg-white text-[#0D0D2B] rounded-full text-sm font-medium"
            >
              Contact
            </Link>
            <button className="px-3 py-1 bg-[#4D4DFF] text-white rounded-full text-sm font-medium">
              Book Now
            </button>
            <button 
              className="p-2 hidden sm:flex"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (expanded when menu button is clicked) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 z-50 bg-[#0D0D2B] text-white shadow-lg">
          <div className="p-4 border-t border-gray-700">
            {navigation.map((item, index) => (
              <div key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    isActive(item.href) ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                  onClick={() => item.dropdown ? toggleDropdown({}, index) : setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-3" />
                    {item.name}
                  </div>
                  {item.dropdown && (
                    <span>
                      {activeDropdown === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </span>
                  )}
                </Link>
                
                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div className="ml-6 mt-1 bg-[#1A1A3B] rounded-lg overflow-hidden">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className={`block px-4 py-3 transition-all duration-200 ${
                          isActive(dropdownItem.href) ? 'bg-white/10' : 'hover:bg-white/5'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-5">
          {/* Gaming Zone */}
          <Link
            href="/gaming"
            className={`flex flex-col items-center justify-center py-3 transition-all ${
              isActive("/gaming") ? 'text-[#0D0D2B]' : 'text-gray-500 hover:text-[#0D0D2B]'
            }`}
          >
            <FaGamepad size={20} />
            <span className="text-xs mt-1">Gaming</span>
          </Link>
          
          {/* Food Zone */}
          <Link
            href="/food"
            className={`flex flex-col items-center justify-center py-3 transition-all ${
              isActive("/food") ? 'text-[#0D0D2B]' : 'text-gray-500 hover:text-[#0D0D2B]'
            }`}
          >
            <FaUtensils size={20} />
            <span className="text-xs mt-1">Food</span>
          </Link>
          
          {/* Home - Centered */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-3 transition-all ${
              isActive("/") ? 'text-[#0D0D2B]' : 'text-gray-500 hover:text-[#0D0D2B]'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-[#0D0D2B] flex items-center justify-center -mt-6">
              <FaHome size={20} className="text-white" />
            </div>
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          {/* Celebration Zone */}
          <Link
            href="/celebrations"
            className={`flex flex-col items-center justify-center py-3 transition-all ${
              isActive("/celebrations") ? 'text-[#0D0D2B]' : 'text-gray-500 hover:text-[#0D0D2B]'
            }`}
          >
            <FaGlassCheers size={20} />
            <span className="text-xs mt-1">Celebrate</span>
          </Link>
          
          {/* Gallery */}
          <Link
            href="/gallery"
            className={`flex flex-col items-center justify-center py-3 transition-all ${
              isActive("/gallery") ? 'text-[#0D0D2B]' : 'text-gray-500 hover:text-[#0D0D2B]'
            }`}
          >
            <FaImages size={20} />
            <span className="text-xs mt-1">Gallery</span>
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-16 lg:bottom-4 z-50 w-12 h-12 rounded-full bg-[#0D0D2B] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Add padding to content for fixed header */}
      <div className="pt-14 sm:pt-12 lg:pt-20 pb-5 lg:pb-0" />

      <style jsx>{`
        /* Animation for scroll to top button */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fixed button {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;