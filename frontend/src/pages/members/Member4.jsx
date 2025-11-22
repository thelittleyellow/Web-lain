import React from 'react';
import MemberProfile from '../MemberProfile';

const Member3 = () => {
  const memberData = {
    name: "Member 3 Name",
    nim: "XXXXXXXX",
    address: "Alamat Member 3",
    dob: "01 Januari 2000",
    image: null,
    education: [
      { level: "Sekolah Dasar", school: "Nama SD Member 3" },
      { level: "Sekolah Menengah Pertama", school: "Nama SMP Member 3" },
      { level: "Sekolah Menengah Atas", school: "Nama SMA Member 3" },
      { level: "Perguruan Tinggi", school: "Nama Universitas Member 3" },
    ]
  };

  return <MemberProfile member={memberData} />;
};

export default Member3;
