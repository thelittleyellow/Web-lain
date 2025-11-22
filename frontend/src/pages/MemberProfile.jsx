import React from 'react';
import { Calendar, MapPin, GraduationCap, User, School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MemberProfile = ({ member }) => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Profile */}
        <div className="relative mb-12">
          <div className="h-48 md:h-64 w-full bg-gradient-primary rounded-3xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          </div>
          
          <div className="relative -mt-24 px-6 md:px-12 flex flex-col md:flex-row items-end gap-6">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-background bg-white shadow-xl flex items-center justify-center overflow-hidden">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-20 h-20 text-muted-foreground" />
              )}
            </div>
            
            <div className="pb-4 flex-1">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">{member.name}</h1>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-base px-4 py-1 rounded-full">
                  {member.nim}
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-1 rounded-full bg-background/50 backdrop-blur-sm">
                  Anggota Lab
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Informasi Pribadi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Alamat</p>
                    <p className="text-base font-semibold">{member.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tanggal Lahir</p>
                    <p className="text-base font-semibold">{member.dob}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md bg-white/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Riwayat Pendidikan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 py-4">
                  {member.education.map((edu, index) => (
                    <div key={index} className="relative pl-8 group">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors"></div>
                      
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all hover:-translate-y-1">
                        <div className="flex items-center gap-2 mb-1">
                          <School className="w-4 h-4 text-secondary" />
                          <span className="text-sm font-bold text-secondary uppercase tracking-wider">{edu.level}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
                        {edu.year && <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
