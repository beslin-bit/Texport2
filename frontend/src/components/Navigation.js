import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Who we are', path: '/' },
    { name: 'Our Capabilities', path: '/manufacturing' },
    {
      name: 'Products',
      path: '#',
      hasDropdown: true,
      subItems: [
        { name: 'Mens Outerwear', path: '/products/mens-outerwear' },
        { name: 'Mens Shirt', path: '/products/mens-shirt' },
        { name: 'Mens Shorts', path: '/products/mens-shorts' },
        { name: 'Mens Trousers', path: '/products/mens-trousers' },
        { name: 'Womens Outerwear', path: '/products/womens-outerwear' },
        { name: 'Womens Shirts', path: '/products/womens-shirts' },
        { name: 'Women Trousers', path: '/products/women-trousers' },
        { name: 'Womens Skirt', path: '/products/womens-skirt' },
        { name: 'Women Shorts', path: '/products/women-shorts' },
        { name: 'Women Dress', path: '/products/women-dress' },
      ],
    },
    { name: 'We care', path: '/we-care' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
      data-testid="main-navigation"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="nav-logo">
            <span className="font-oswald text-2xl font-bold text-[#0f172a] tracking-tight">
              TEXPORT OVERSEAS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex items-center gap-1 font-inter text-sm font-medium text-slate-700 hover:text-[#ea580c] transition-colors duration-200 uppercase tracking-wide"
                      data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onMouseEnter={() => setIsProductsOpen(true)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Dropdown */}
                    <div
                      className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <div className="py-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 font-inter text-sm text-slate-700 hover:bg-slate-50 hover:text-[#ea580c] transition-colors"
                            data-testid={`nav-dropdown-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-inter text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${
                      location.pathname === item.path
                        ? 'text-[#ea580c]'
                        : 'text-slate-700 hover:text-[#ea580c]'
                    }`}
                    data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 hover:text-[#ea580c] transition-colors"
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200" data-testid="mobile-menu">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 font-inter text-sm font-medium text-slate-700 hover:text-[#ea580c] transition-colors uppercase tracking-wide"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isProductsOpen && (
                      <div className="bg-slate-50 py-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-8 py-2 font-inter text-sm text-slate-600 hover:text-[#ea580c] transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 font-inter text-sm font-medium transition-colors uppercase tracking-wide ${
                      location.pathname === item.path
                        ? 'text-[#ea580c]'
                        : 'text-slate-700 hover:text-[#ea580c]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
