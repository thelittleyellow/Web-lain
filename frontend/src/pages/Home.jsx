import React from 'react';
import { ArrowRight, Microscope, Atom, Dna, Users, Trophy, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 border border-primary/20">
                Laboratorium Masa Depan
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                STUDIO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  RISET & INOVASI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Mewujudkan ide-ide brilian menjadi solusi nyata. Kami adalah pusat penelitian yang berdedikasi untuk kemajuan teknologi dan sains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="bg-gradient-primary text-white border-0 h-12 px-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all">
                  Jelajahi Lab
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-2 hover:bg-primary/5">
                  Lihat Proyek
                </Button>
              </div>
            </div>
            
            {/* Hero Illustration Placeholder - mimicking the 3D robots in the reference image */}
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
               <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
                  <Atom className="w-48 h-48 text-primary animate-float drop-shadow-2xl" />
                  
                  {/* Floating Cards */}
                  <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                    <Dna className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                    <Microscope className="w-8 h-8 text-primary" />
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">TENTANG KAMI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                LABORATORIUM - adalah pintu gerbang Anda menuju penemuan yang menarik dan inovatif.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Kami adalah tim peneliti yang berdedikasi untuk menciptakan solusi baru, yang membawa sains ke dunia nyata, menantang batasan pengetahuan dan mengembangkan imajinasi.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">+100</h3>
                  <p className="text-sm text-gray-400">Proyek Sukses</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-secondary mb-2">20</h3>
                  <p className="text-sm text-gray-400">Penghargaan</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">10</h3>
                  <p className="text-sm text-gray-400">Tahun Riset</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                  <Microscope className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-xl mb-2">Riset Dasar</h4>
                  <p className="text-sm text-gray-400">Penelitian fundamental untuk memahami prinsip dasar sains.</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all mt-8">
                  <Atom className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-bold text-xl mb-2">Teknologi Nano</h4>
                  <p className="text-sm text-gray-400">Manipulasi materi pada skala atom dan molekuler.</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                  <Dna className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-bold text-xl mb-2">Bio-Informatika</h4>
                  <p className="text-sm text-gray-400">Analisis data biologis menggunakan komputasi canggih.</p>
               </div>
               <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all mt-8">
                  <Trophy className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-xl mb-2">Inovasi</h4>
                  <p className="text-sm text-gray-400">Menciptakan produk baru yang bermanfaat bagi masyarakat.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section - Mimicking the "What we do for you" cards but for members */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Tim Peneliti Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bertemu dengan para ahli di balik inovasi kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Member 1 - Icha */}
            <Link to="/member/icha" className="group">
              <Card className="h-full border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="h-48 bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                   <Users className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">BERGABUNG DENGAN KAMI!</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tinggalkan jejak Anda dan dapatkan konsultasi gratis dengan pengembangan konsep penelitian.
          </p>
          <Button size="lg" className="bg-white text-foreground hover:bg-gray-100 text-lg px-10 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
            DAFTAR SEKARANG
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
