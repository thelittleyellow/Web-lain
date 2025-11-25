import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Icha', path: '/member/icha' },
    { name: 'Armitha', path: '/member/armitha' },
    { name: 'Eka', path: '/member/eka' },
    { name: 'Nurfaika', path: '/member/nurfaika' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full glass-nav bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg shadow-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none text-foreground">FISIKA MEDIK</span>
              <span className="text-xs font-bold text-red-600 tracking-widest">UNHAS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary font-bold' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              Hubungi Lab
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background shadow-xl absolute w-full left-0 top-16 z-50 animate-accordion-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-3 px-4 rounded-md transition-colors hover:bg-primary/5 ${
                  isActive(link.path) ? 'text-primary bg-primary/10 font-bold' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pb-2">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-0 shadow-md">
                Hubungi Lab
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
