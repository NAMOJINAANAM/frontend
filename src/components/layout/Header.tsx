'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaGamepad,
  FaUtensils,
  FaGlassCheers,
  FaImages,
  FaPhone,
  FaChevronUp,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaBook,
  FaDice,
  FaTrophy
} from 'react-icons/fa';

const navigation = [
  { 
    name: "Home", 
    href: "/",
    icon: FaHome,
  },
  { 
    name: "Gaming", 
    href: "/gaming",
    icon: FaGamepad,
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
  },
  { 
    name: "Celebration", 
    href: "/celebrations",
    icon: FaGlassCheers,
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
  },
  { 
    name: "Contact", 
    href: "/contact",
    icon: FaPhone,
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showBookText, setShowBookText] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setShowScrollTop(currentScrollY > 400);
      
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsScrolled(false);
        } else {
          setIsScrolled(true);
        }
      } else {
        setIsScrolled(currentScrollY > 10);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
    setActiveDropdown(null);
  };

  // Desktop Navigation Item
  const DesktopNavItem = ({ item }: { item: typeof navigation[0] }) => (
    <div className="relative group">
      {item.dropdown ? (
        <>
          <button
            onClick={() => toggleDropdown(item.name)}
            className={`flex items-center gap-1 px-4 py-3 rounded-lg transition-all duration-200 border-2 ${
              pathname.startsWith(item.href)
                ? 'bg-[var(--color-primary)] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-black text-white border-white hover:border-[var(--color-primary)] cursor-pointer hover:text-[var(--color-primary)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            } text-sm xl:text-base 2xl:text-lg`}
          >
            <item.icon className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
            {item.name}
            <FaChevronDown className={`w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 transition-transform duration-200 ${
              activeDropdown === item.name ? 'rotate-180' : ''
            }`} />
          </button>
          
          {activeDropdown === item.name && (
            <div className="absolute top-full left-0 mt-2 w-48 xl:w-56 2xl:w-64 bg-black border-2 border-[var(--color-primary)] rounded-lg shadow-[4px_4px_0px_0px_rgba(239,249,35,1)] z-50">
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  title={subItem.href}
                  className="block px-4 py-3 xl:px-5 xl:py-4 2xl:px-6 2xl:py-5 text-white hover:bg-[var(--color-primary)] hover:text-black transition-all duration-200 border-b border-gray-700 last:border-b-0 first:rounded-t-lg last:rounded-b-lg text-sm xl:text-base 2xl:text-lg"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-4">
                    <FaDice className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-[var(--color-primary)]" />
                    {subItem.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          title={item.href}
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 border-2 ${
            pathname === item.href
              ? 'bg-[var(--color-primary)] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-black text-white border-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
          } text-sm xl:text-base 2xl:text-lg`}
        >
          <item.icon className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
          {item.name}
        </Link>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#000000cc] shadow-lg border-b-2 border-[var(--color-primary)] backdrop-blur-sm' 
          : 'bg-black'
      } hidden lg:block`}>
        <nav className="max-w-7xl xl:max-w-full mx-auto px-4 xl:px-6 2xl:px-8 py-3 xl:py-4 2xl:py-5">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
              {navigation.slice(1, 4).map((item) => (
                <DesktopNavItem key={item.name} item={item} />
              ))}
            </div>

            {/* Center Logo */}
            <Link 
              href="/" 
              title="/" 
              className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200 relative"
            >
              {/* Geometric Background Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Hexagon */}
                <div className="w-24 h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-transparent relative">
                  {/* Large Hexagon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-yellow-300/20 clip-path-hexagon transform rotate-30"></div>
                  
                  {/* Medium Hexagon */}
                  <div className="absolute inset-2 xl:inset-3 2xl:inset-4 bg-gradient-to-br from-[var(--color-primary)]/30 to-yellow-300/30 clip-path-hexagon transform rotate-60"></div>
                  
                  {/* Small Hexagon */}
                  <div className="absolute inset-4 xl:inset-5 2xl:inset-6 bg-gradient-to-br from-[var(--color-primary)]/40 to-yellow-300/40 clip-path-hexagon transform rotate-90"></div>
                  
                  {/* Center Star Points */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 bg-[var(--color-primary)]/60 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Main Logo */}
              <div className="relative w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-[var(--color-primary)] rounded-full border-4 border-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 z-10">
                <div className="relative">
                  <span className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-black">FZ</span>
                  <FaTrophy className="absolute -top-2 -right-3 xl:-top-3 xl:-right-4 2xl:-top-4 2xl:-right-5 text-black text-sm xl:text-base 2xl:text-lg" />
                </div>
              </div>
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
              {navigation.slice(4).map((item) => (
                <DesktopNavItem key={item.name} item={item} />
              ))}
              <button
                className={`flex items-center gap-1 px-4 py-3 rounded-lg transition-all duration-200 border-2 cursor-pointer bg-[var(--color-primary)] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm xl:text-base 2xl:text-lg`}
              >
                <FaBook className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
                Book Now
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Tablet/Mobile Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black border-b-2 border-[var(--color-primary)] lg:hidden`}>
        <div className="px-3 py-2">
          <div className="flex items-center justify-between">
            {/* Menu Button */}
            <button
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="p-2 rounded-lg bg-black text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black transition-all duration-200"
            >
              {showMobileNav ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
            
            {/* Logo */}
            <Link href="/" title="/" className="flex-shrink-0">
              <div className="w-14 h-14 bg-[var(--color-primary)] rounded-full border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-lg font-bold text-black">FZ</span>
              </div>
            </Link>
            
            {/* Contact Button */}
            <Link
              href="/contact"
              title="/contact"
              className="bg-black text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-3 py-2 rounded-lg text-sm hover:bg-[var(--color-primary)] hover:text-black transition-all duration-200"
            >
              <FaPhone className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {showMobileNav && (
          <div className="absolute top-full left-0 right-0 bg-black border-b-2 border-[var(--color-primary)] shadow-lg">
            <div className="p-3 space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200 border-2 ${
                          pathname.startsWith(item.href)
                            ? 'bg-[var(--color-primary)] text-black border-black'
                            : 'bg-black text-white border-[var(--color-primary)]'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <item.icon className="w-4 h-4" />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-[var(--color-primary)] pl-3">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              title={subItem.href}
                              className="block px-3 py-2 text-white hover:bg-[var(--color-primary)] hover:text-black rounded transition-all duration-200"
                              onClick={closeMobileNav}
                            >
                              <div className="flex items-center gap-4">
                                <FaDice className="w-3 h-3" />
                                <span className="text-sm">{subItem.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      title={item.href}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 border-2 ${
                        pathname === item.href
                          ? 'bg-[var(--color-primary)] text-black border-black'
                          : 'bg-black text-white border-[var(--color-primary)]'
                      }`}
                      onClick={closeMobileNav}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation - Optimized for small screens */}
      <nav className={`fixed bottom-0 left-0 right-0 z-40 bg-black border-t-2 border-[var(--color-primary)] transition-transform duration-300 ${
        isScrolled ? 'translate-y-0' : 'translate-y-full'
      } lg:hidden`}>
        <div className="flex items-center justify-between p-2">
          {/* Gaming */}
          <Link
            href="/gaming"
            title="/gaming"
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 min-w-[60px] ${
              pathname.startsWith('/gaming')
                ? 'text-[var(--color-primary)] bg-black'
                : 'text-white'
            }`}
          >
            <FaGamepad className="w-5 h-5 mb-1" />
            <span className="text-xs">Gaming</span>
          </Link>

          {/* Celebration */}
          <Link
            href="/celebrations"
            title="/celebrations"
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 min-w-[60px] ${
              pathname.startsWith('/celebrations')
                ? 'text-[var(--color-primary)] bg-black'
                : 'text-white'
            }`}
          >
            <FaGlassCheers className="w-5 h-5 mb-1" />
            <span className="text-xs">Party</span>
          </Link>

          {/* Home - Center */}
          <Link
            href="/"
            title="/"
            className={`flex flex-col items-center p-3 rounded-full transition-all duration-200 min-w-[60px] -mt-4 ${
              pathname === '/'
                ? 'bg-[var(--color-primary)] text-black border-2 border-black'
                : 'bg-black text-[var(--color-primary)] border-2 border-[var(--color-primary)]'
            }`}
          >
            <FaHome className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold">Home</span>
          </Link>

          {/* Food */}
          <Link
            href="/food"
            title="/food"
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 min-w-[60px] ${
              pathname.startsWith('/food')
                ? 'text-[var(--color-primary)] bg-black'
                : 'text-white'
            }`}
          >
            <FaUtensils className="w-5 h-5 mb-1" />
            <span className="text-xs">Food</span>
          </Link>

          {/* Gallery */}
          <Link
            href="/gallery"
            title="/gallery"
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 min-w-[60px] ${
              pathname.startsWith('/gallery')
                ? 'text-[var(--color-primary)] bg-black'
                : 'text-white'
            }`}
          >
            <FaImages className="w-5 h-5 mb-1" />
            <span className="text-xs">Gallery</span>
          </Link>
        </div>
      </nav>

      {/* Floating Book Now Button */}
      {/* <Link
        href="/book-now"
        title="/book-now"
        className="fixed z-50 bg-[var(--color-primary)] text-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:scale-105 flex items-center gap-4"
        style={{
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)'
        }}
        onMouseEnter={() => setShowBookText(true)}
        onMouseLeave={() => setShowBookText(false)}
      >
        <div className={`flex items-center gap-4 transition-all duration-300 ${
          showBookText ? 'pr-4 pl-3 py-3 xl:pr-5 xl:pl-4 xl:py-4 2xl:pr-6 2xl:pl-5 2xl:py-5' : 'p-3 xl:p-4 2xl:p-5'
        }`}>
          <FaBook className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 flex-shrink-0" />
          <span className={`whitespace-nowrap transition-all duration-300 ${
            showBookText ? 'max-w-32 opacity-100' : 'max-w-0 opacity-0'
          } overflow-hidden text-sm xl:text-base 2xl:text-lg font-medium`}>
            Book Now
          </span>
        </div>
      </Link> */}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-[var(--color-primary)] text-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 lg:bottom-6 lg:right-6"
        >
          <FaChevronUp className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
        </button>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-24 xl:h-28 2xl:h-32"></div>
    </>
  );
}