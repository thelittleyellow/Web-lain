import React from 'react';
import { Activity, Mail, MapPin, Phone, Globe, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t-4 border-red-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">FISIKA MEDIK</span>
                <span className="text-xs font-bold text-red-500 tracking-widest">UNHAS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Laboratorium Fisika Medik<br/>
              Fakultas Matematika dan Ilmu Pengetahuan Alam<br/>
              Universitas Hasanuddin
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-red-600 inline-block pb-1">Tautan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-red-500 transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Profil Lab</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Riset & Publikasi</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Anggota</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-red-600 inline-block pb-1">Kontak</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-red-500 mt-1" />
                <span>Jl. Perintis Kemerdekaan Km.10, Tamalanrea, Makassar, Sulawesi Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span>ichanurandhini1204@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span>0895339014830</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-red-600 inline-block pb-1">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2024 Laboratorium Fisika Medik FMIPA UNHAS.</p>
          <p className="text-xs">Universitas Hasanuddin - Kampus Merah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
