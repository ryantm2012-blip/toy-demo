import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
  activeSection,
  onSearchClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop Toys' },
    { id: 'categories', label: 'Categories' },
    { id: 'bestsellers', label: 'Best Sellers' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Playful Announcement Bar */}
      {!bannerDismissed && (
        <div className="bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 text-white text-xs font-medium py-1.5 px-4 text-center flex items-center justify-between relative z-50">
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="hidden sm:inline-block animate-bounce">🎈</span>
            <span className="font-medium">
              A World of Fun Awaits! Explore our magical toy collection · Demo Store Prototype
            </span>
            <span className="hidden md:inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-semibold">
              <Sparkles className="w-3 h-3" /> Free simulated delivery over R500
            </span>
          </div>
          <button
            onClick={() => setBannerDismissed(true)}
            className="text-white/80 hover:text-white p-1 ml-2 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-purple-900/5 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-purple-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="flex items-center gap-2.5 group cursor-pointer shrink-0 select-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
                <span className="text-xl">🧸</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-purple-600 transition-colors">
                  Purity’s Toy Extravaganza
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-purple-600 font-sans hidden sm:block">
                  Magic · Imagination · Play
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1.5 transition-colors whitespace-nowrap hover:text-purple-600 cursor-pointer ${
                      isActive ? 'text-purple-600 font-bold' : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions: Search Button & Live Cart Button */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Quick Search Button */}
              <button
                onClick={onSearchClick}
                className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all cursor-pointer"
                title="Search toys"
                aria-label="Search toys"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-3.5 sm:px-4 py-2 rounded-2xl shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                aria-label={`Shopping Cart with ${cartCount} items`}
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2.5 -right-2.5 bg-amber-400 text-purple-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm font-sans tabular-nums animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="font-semibold text-sm hidden sm:inline-block">
                  Cart
                </span>
                {cartCount > 0 && (
                  <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full font-bold tabular-nums hidden md:inline-block">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-purple-600 rounded-xl hover:bg-purple-50 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-purple-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                    activeSection === link.id
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Purity’s Toy Extravaganza
                </span>
                <span className="text-purple-600 font-medium">Demo Store</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
