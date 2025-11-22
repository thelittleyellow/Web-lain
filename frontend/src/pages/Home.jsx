import React from 'react';
import { ArrowRight, Microscope, Atom, Dna, Users, Trophy, Activity, Scan, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 text-red-600 font-bold text-sm mb-4 border border-red-600/20">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                UNIVERSITAS HASANUDDIN
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                LABORATORIUM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  FISIKA MEDIK
                </span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground/80">
                  Fakultas Matematika dan Ilmu Pengetahuan Alam
                </h2>
                <h3 className="text-lg font-medium text-muted-foreground">
                  Program Studi Fisika
                </h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Pusat unggulan riset dan pengembangan aplikasi fisika dalam bidang medis, radioterapi, dan pencitraan medis untuk kesehatan masa depan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="bg-gradient-primary text-white border-0 h-12 px-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all">
                  Profil Lab
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-2 hover:bg-primary/5">
                  Riset Kami
                </Button>
              </div>
            </div>
            
            {/* Hero Illustration - Medical Physics Theme */}
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
               <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
                  
                  {/* Central Icon - Atom/Medical */}
                  <Activity className="w-48 h-48 text-primary animate-float drop-shadow-2xl" />
                  
                  {/* Floating Cards */}
                  <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                    <Scan className="w-8 h-8 text-secondary" />
                    <p className="text-xs font-bold text-center mt-1">CT Scan</p>
                  </div>
                  <div className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                    <Zap className="w-8 h-8 text-yellow-500" />
                    <p className="text-xs font-bold text-center mt-1">Radiasi</p>
                  </div>
                  
                  {/* Unhas Attribute Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    UNHAS
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Dark Background */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">TENTANG LAB KAMI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Laboratorium Fisika Medik FMIPA Universitas Hasanuddin berdedikasi untuk mengembangkan ilmu fisika dalam aplikasi klinis dan kesehatan.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Kami fokus pada penelitian dosimetri, proteksi radiasi, pencitraan medis (Medical Imaging), dan biofisika untuk mendukung kemajuan teknologi kesehatan di Indonesia.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">FMIPA</h3>
                  <p className="text-sm text-gray-400">Fakultas</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-secondary mb-2">A</h3>
                  <p className="text-sm text-gray-400">Akreditasi</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">UNHAS</h3>
                  <p className="text-sm text-gray-400">Universitas</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                  <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                  <h4 className="font-bold text-xl mb-2">Radioterapi</h4>
                  <p className="text-sm text-gray-400">Analisis dosis dan perencanaan terapi radiasi.</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all mt-8">
                  <Scan className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-bold text-xl mb-2">Pencitraan Medis</h4>
                  <p className="text-sm text-gray-400">Pengolahan citra MRI, CT-Scan, dan USG.</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                  <Activity className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-bold text-xl mb-2">Dosimetri</h4>
                  <p className="text-sm text-gray-400">Pengukuran dan kalibrasi dosis radiasi.</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all mt-8">
                  <Atom className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-xl mb-2">Fisika Nuklir</h4>
                  <p className="text-sm text-gray-400">Aplikasi nuklir dalam bidang medis.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Anggota Laboratorium</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mahasiswa dan Peneliti Fisika Medik Universitas Hasanuddin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Member 1 - Icha */}
            <Link to="/member/icha" className="group">
              <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="h-48 bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                   <Users className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">UNHAS</div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">Icha Nurandhini</h3>
                  <p className="text-sm text-muted-foreground mb-4">H021231021</p>
                  <Button className="w-full rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                    Lihat Profil
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Member 2 */}
            <Link to="/member/2" className="group">
              <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="h-48 bg-gradient-to-br from-secondary to-pink-400 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                   <Users className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">UNHAS</div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1 group-hover:text-secondary transition-colors">Member 2</h3>
                  <p className="text-sm text-muted-foreground mb-4">NIM: XXXXXXXX</p>
                  <Button className="w-full rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all">
                    Lihat Profil
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Member 3 */}
            <Link to="/member/3" className="group">
              <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                   <Users className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">UNHAS</div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1 group-hover:text-blue-500 transition-colors">Member 3</h3>
                  <p className="text-sm text-muted-foreground mb-4">NIM: XXXXXXXX</p>
                  <Button className="w-full rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                    Lihat Profil
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Member 4 */}
            <Link to="/member/4" className="group">
              <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                   <Users className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">UNHAS</div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1 group-hover:text-emerald-500 transition-colors">Member 4</h3>
                  <p className="text-sm text-muted-foreground mb-4">NIM: XXXXXXXX</p>
                  <Button className="w-full rounded-full bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
                    Lihat Profil
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">BERGABUNG DENGAN RISET KAMI</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Jadilah bagian dari inovasi fisika medik untuk masa depan kesehatan Indonesia bersama Universitas Hasanuddin.
          </p>
          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 text-lg px-10 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform border-2 border-red-500">
            HUBUNGI KAMI
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
