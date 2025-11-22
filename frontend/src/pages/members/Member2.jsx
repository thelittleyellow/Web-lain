import React from 'react';
import MemberProfile from '../MemberProfile';

const Member2 = () => {
  const memberData = {
    name: "Member 2 Name",
    nim: "XXXXXXXX",
    address: "Alamat Member 2",
    dob: "01 Januari 2000",
    image: null,
    education: [
      { level: "Sekolah Dasar", school: "Nama SD Member 2" },
      { level: "Sekolah Menengah Pertama", school: "Nama SMP Member 2" },
      { level: "Sekolah Menengah Atas", school: "Nama SMA Member 2" },
      { level: "Perguruan Tinggi", school: "Nama Universitas Member 2" },
    ]
  };

  return <MemberProfile member={memberData} />;
};

export default Member2;
