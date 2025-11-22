import React from 'react';
import { Beaker, Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Beaker className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">LABORATORIUM</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pusat inovasi dan penelitian teknologi masa depan. Kami berdedikasi untuk mengembangkan solusi cerdas bagi masyarakat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Penelitian</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Publikasi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Makassar, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>lab@universitas.ac.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 812 3456 7890</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Laboratorium Inovasi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
