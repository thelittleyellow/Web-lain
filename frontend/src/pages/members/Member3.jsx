import React from 'react';
import MemberProfile from '../MemberProfile';

const Member4 = () => {
  const memberData = {
    name: "Member 4 Name",
    nim: "XXXXXXXX",
    address: "Alamat Member 4",
    dob: "01 Januari 2000",
    image: null,
    education: [
      { level: "Sekolah Dasar", school: "Nama SD Member 4" },
      { level: "Sekolah Menengah Pertama", school: "Nama SMP Member 4" },
      { level: "Sekolah Menengah Atas", school: "Nama SMA Member 4" },
      { level: "Perguruan Tinggi", school: "Nama Universitas Member 4" },
    ]
  };

  return <MemberProfile member={memberData} />;
};

export default Member4;
