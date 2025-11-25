import React from 'react';
import MemberProfile from '../MemberProfile';

const NurfaikaProfile = () => {
  const memberData = {
    name: "NURFAIKA",
    nim: "H021231048",
    address: "Enrekang",
    dob: "4 Juli 2005",
    image: "https://customer-assets.emergentagent.com/job_lab-team/artifacts/an9bns59_nurfaika.jpeg",
    education: [
      { level: "Sekolah Dasar", school: "SDN 37 Tungka" },
      { level: "Sekolah Menengah Pertama", school: "SMPN 1 ENREKANG" },
      { level: "Sekolah Menengah Atas", school: "SMAN 2 ENREKANG" },
      { level: "Perguruan Tinggi", school: "UNIVERSITAS HASANUDDIN" },
    ]
  };

  return <MemberProfile member={memberData} />;
};

export default NurfaikaProfile;
