import React from 'react';
import MemberProfile from '../MemberProfile';

const EkaProfile = () => {
  const memberData = {
    name: "EKA ADELIA PUTRI SARIMAN",
    nim: "H021231065",
    address: "Telkomas",
    dob: "3 September 2005",
    image: "https://customer-assets.emergentagent.com/job_lab-team/artifacts/yvjyo7gk_eka.jpeg",
    education: [
      { level: "Sekolah Dasar", school: "SD AL ASHRI" },
      { level: "Sekolah Menengah Pertama", school: "SMPN 17 MAKASSAR" },
      { level: "Sekolah Menengah Atas", school: "SMAN 3 BONE" },
      { level: "Perguruan Tinggi", school: "UNIVERSITAS HASANUDDIN" },
    ]
  };

  return <MemberProfile member={memberData} />;
};

export default EkaProfile;
