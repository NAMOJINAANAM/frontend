"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/button";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Gaming Zone", 
      href: "/gaming",
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
    },
    { 
      name: "Celebrations", 
      href: "/celebrations",
      dropdown: [
        { name: "Birthday Parties", href: "/celebrations/birthdays" },
        { name: "Corporate Events", href: "/celebrations/corporate" },
        { name: "Custom Events", href: "(/celebrations/custom" },
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Custom logo component
  const Logo = () => (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-md mr-2">
        <img src="/images/logo.png" alt="logo" className="m-5"/>
      </div>
    </div>
  );

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-[var(--color-light-gray)] shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                
                return (
                  <div key={item.name} className="relative group">
                    <div
                      className={`flex items-center transition-all duration-300 py-2 px-1 cursor-pointer ${
                        isActive 
                          ? "text-[var(--color-purple)] font-semibold" 
                          : "text-[var(--color-black)] dark:text-[var(--color-white)] hover:text-[var(--color-purple)]"
                      }`}
                      onClick={() => hasDropdown ? toggleDropdown(item.name) : null}
                    >
                      {hasDropdown ? (
                        <>
                          <span>{item.name}</span>
                          <HiChevronDown className={`ml-1 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </>
                      ) : (
                        <Link href={item.href}>
                          {item.name}
                        </Link>
                      )}
                      
                      {(isActive || activeDropdown === item.name) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-purple)]"></span>
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-purple)] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                    
                    {hasDropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-black dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 border border-[var(--color-white)]">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-[var(--color-black)] dark:text-[var(--color-white)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-purple)]"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-to-r from-[var(--color-flame-orange)] to-[var(--color-flame-red)] text-white hover:shadow-lg transition-all duration-300 hover:scale-105 px-6 py-2 rounded-md font-semibold"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-[var(--color-light-gray)] transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6 text-[var(--color-black)] dark:text-[var(--color-white)]" />
              ) : (
                <HiMenu className="h-6 w-6 text-[var(--color-black)] dark:text-[var(--color-white)]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-[var(--color-light-gray)] bg-white">
  <div className="px-2 pt-2 pb-4 space-y-1">
    {navigation.map((item) => {
      const isActive = pathname === item.href;
      const hasDropdown = item.dropdown && item.dropdown.length > 0;
      
      return (
        <div key={item.name}>
          {hasDropdown ? (
            <>
              <div
                className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-md transition-all duration-150 ${
                  isActive 
                    ? "text-[var(--color-purple)] bg-gray-100 font-semibold" 
                    : "text-black hover:text-[var(--color-purple)] hover:bg-gray-100"
                }`}
                onClick={() => toggleDropdown(item.name)}
              >
                <span>{item.name}</span>
                <HiChevronDown className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
              </div>
              
              {activeDropdown === item.name && (
                <div className="pl-6 mt-1 space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm rounded-md transition-all duration-150 text-black hover:text-[var(--color-purple)] hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-150 ${
                isActive 
                  ? "text-[var(--color-purple)] bg-gray-100 font-semibold" 
                  : "text-black hover:text-[var(--color-purple)] hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          )}
        </div>
      );
    })}
    <div className="px-4 py-3">
      <Button 
        variant="default" 
        className="w-full bg-gradient-to-r from-[var(--color-flame-orange)] to-[var(--color-flame-red)] text-white hover:shadow-lg transition-all duration-300 py-3 rounded-md font-semibold"
        onClick={() => setIsMenuOpen(false)}
      >
        Book Now
      </Button>
    </div>
  </div>
</div>
          )}
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      {/* {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black dark:bg-black border-t border-[var(--color-light-gray)] lg:hidden">
          <div className="flex justify-around items-center h-16">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 ${
                  pathname === item.href 
                    ? "text-[var(--color-purple)]" 
                    : "text-[var(--color-black)] dark:text-[var(--color-white)]"
                }`}
              >
                <span className="text-xs">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )} */}
    </>
  );
};

export default Header;