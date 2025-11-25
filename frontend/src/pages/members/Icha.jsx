import React from 'react';
import MemberProfile from '../MemberProfile';

const IchaProfile = () => {
  const memberData = {
    name: "Icha Nurandhini",
    nim: "H021231021",
    address: "Sudiang",
    dob: "20 Desember 2004",
    image: "https://customer-assets.emergentagent.com/job_lab-team/artifacts/biwzag6a_icha.jpeg",
    education: [
      { level: "Sekolah Dasar", school: "SD INPRES KALANG TUBUNG 1" },
      { level: "Sekolah Menengah Pertama", school: "SMPN 16 MAKASSAR" },
      { level: "Sekolah Menengah Atas", school: "SMAN 22 MAKASSAR" },
      { level: "Perguruan Tinggi", school: "UNIVERSITAS HASANUDDIN" },
    ]
  };

  return <MemberProfile member={memberData} />;
};

export default IchaProfile;
