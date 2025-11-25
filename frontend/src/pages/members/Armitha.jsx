import React from 'react';
import MemberProfile from '../MemberProfile';

const ArmithaProfile = () => {
  const memberData = {
    name: "ARMITHA ANAS",
    nim: "H021231060",
    address: "Daya",
    dob: "8 APRIL 2005",
    image: "https://customer-assets.emergentagent.com/job_lab-team/artifacts/muxjq84c_armitha.jpeg",
    education: [
      { level: "Sekolah Dasar", school: "SD INPRES 10/73 BULU BULU" },
      { level: "Sekolah Menengah Pertama", school: "SMPN 1 TONRA" },
      { level: "Sekolah Menengah Atas", school: "SMAN 10 BONE" },
      { level: "Perguruan Tinggi", school: "UNIVERSITAS HASANUDDIN" },
    ]
  };

  return <MemberProfile member={memberData} />;
};

export default ArmithaProfile;
