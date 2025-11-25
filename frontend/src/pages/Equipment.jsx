import React from 'react';
import { Scan, Activity, Zap, Monitor, Database, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Equipment = () => {
  const equipmentList = [
    {
      id: 1,
      name: "CT Scan (Computed Tomography)",
      description: "Teknologi pencitraan medis menggunakan sinar-X untuk menghasilkan gambar penampang tubuh yang detail. Digunakan untuk diagnosis kanker, kelainan tulang, dan trauma.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
      icon: <Scan className="w-6 h-6 text-white" />,
      specs: ["128 Slice", "Low Dose Radiation", "High Resolution Imaging"],
      category: "Pencitraan"
    },
    {
      id: 2,
      name: "MRI (Magnetic Resonance Imaging)",
      description: "Pencitraan menggunakan medan magnet kuat dan gelombang radio untuk menghasilkan gambar organ dalam yang sangat jelas, terutama jaringan lunak seperti otak dan otot.",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop",
      icon: <Activity className="w-6 h-6 text-white" />,
      specs: ["3.0 Tesla", "Silent Scan Technology", "Wide Bore"],
      category: "Pencitraan"
    },
    {
      id: 3,
      name: "Linear Accelerator (LINAC)",
      description: "Alat terapi radiasi eksternal yang digunakan untuk mengobati kanker dengan mengirimkan sinar-X berenergi tinggi ke tumor dengan presisi tinggi.",
      image: "https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=2070&auto=format&fit=crop",
      icon: <Zap className="w-6 h-6 text-white" />,
      specs: ["6MV & 10MV Photons", "IMRT & VMAT Capable", "Real-time Tracking"],
      category: "Radioterapi"
    },
    {
      id: 4,
      name: "Treatment Planning System (TPS)",
      description: "Sistem komputer canggih untuk merencanakan distribusi dosis radiasi yang optimal pada pasien kanker sebelum pelaksanaan terapi.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      icon: <Monitor className="w-6 h-6 text-white" />,
      specs: ["Monte Carlo Algorithm", "3D Dose Reconstruction", "AI-Assisted Contouring"],
      category: "Komputasi"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-foreground text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ALAT & FASILITAS</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Laboratorium kami dilengkapi dengan teknologi terkini untuk mendukung riset dan pendidikan fisika medik.
          </p>
        </div>
      </div>

      {/* Equipment Grid */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipmentList.map((item) => (
            <Card key={item.id} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-primary text-white hover:bg-primary/90">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                  <div className="bg-red-600 p-2 rounded-lg shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-card">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase text-primary mb-3 tracking-wider">Spesifikasi Unggulan</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.specs.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipment;
