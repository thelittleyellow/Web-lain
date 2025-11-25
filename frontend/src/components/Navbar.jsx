import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Activity, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const members = [
    { name: 'Icha Nurandhini', path: '/member/icha' },
    { name: 'Armitha Anas', path: '/member/armitha' },
    { name: 'Eka Adelia', path: '/member/eka' },
    { name: 'Nurfaika', path: '/member/nurfaika' },
  ];

  const isActive = (path) => location.pathname === path;

  const scrollToAbout = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById('about');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary font-bold' : 'text-muted-foreground'
              }`}
            >
              Beranda
            </Link>

            <button
              onClick={scrollToAbout}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
            >
              Informasi Lab
            </button>

            <Link
              to="/equipment"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/equipment') ? 'text-primary font-bold' : 'text-muted-foreground'
              }`}
            >
              Alat & Fasilitas
            </Link>

            {/* Members Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary outline-none">
                Anggota <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background/95 backdrop-blur-sm border-border">
                {members.map((member) => (
                  <DropdownMenuItem key={member.path} asChild>
                    <Link to={member.path} className="cursor-pointer w-full">
                      {member.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
                  Hubungi Lab
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-background border-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">Hubungi Kami</DialogTitle>
                  <DialogDescription>
                    Silakan hubungi kami melalui kontak di bawah ini untuk informasi lebih lanjut mengenai riset dan layanan laboratorium.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="bg-secondary p-2 rounded-full text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Telepon / WhatsApp</p>
                      <p className="font-bold text-foreground">0895339014830</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="bg-primary p-2 rounded-full text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p className="font-bold text-foreground">ichanurandhini1204@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted border border-border">
                    <div className="bg-foreground p-2 rounded-full text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Alamat</p>
                      <p className="font-bold text-foreground text-sm">Jl. Perintis Kemerdekaan Km.10, Tamalanrea, Makassar</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium py-3 px-4 rounded-md transition-colors hover:bg-primary/5 ${
                isActive('/') ? 'text-primary bg-primary/10 font-bold' : 'text-foreground'
              }`}
            >
              Beranda
            </Link>
            
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToAbout();
              }}
              className="text-sm font-medium py-3 px-4 rounded-md transition-colors hover:bg-primary/5 text-left text-foreground"
            >
              Informasi Lab
            </button>

            <Link
              to="/equipment"
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium py-3 px-4 rounded-md transition-colors hover:bg-primary/5 ${
                isActive('/equipment') ? 'text-primary bg-primary/10 font-bold' : 'text-foreground'
              }`}
            >
              Alat & Fasilitas
            </Link>

            <div className="px-4 py-2">
              <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Anggota</p>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {members.map((member) => (
                  <Link
                    key={member.path}
                    to={member.path}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-foreground hover:text-primary py-1"
                  >
                    {member.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 pb-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-0 shadow-md">
                    Hubungi Lab
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%] rounded-lg bg-background border-border">
                  <DialogHeader>
                    <DialogTitle>Hubungi Kami</DialogTitle>
                    <DialogDescription>Kontak Laboratorium Fisika Medik UNHAS</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm font-bold">0895339014830</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm font-bold">ichanurandhini1204@gmail.com</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
