// Nentukan umur
const tahunlahir = 2008;
let tahunsekarang = new Date().getFullYear();
let bulansekarang = new Date().getMonth();
let umur = function () {
  if (bulansekarang - 7 > 1) {
    return tahunsekarang - tahunlahir - 1;
  } else {
    return tahunsekarang - tahunlahir;
  }
};
let span = document.querySelector(".umur");
span.innerHTML = umur();

// Nentukan apakah sudah lulus atau belum
const tahunmpls = 2024 - 0.4;
let tahunlulus = new Date().getFullYear() + 0.6;
let tahunkelas = function () {
  if (tahunlulus - tahunmpls === 0) {
    const kelas = "X";
    return kelas;
  }
  if (tahunlulus - tahunmpls === 1) {
    const kelas = "XI";
    return kelas;
  }
  if (tahunlulus - tahunmpls === 2) {
    const kelas = "XII";
    return kelas;
  }
};
let lulus = function () {
  if (tahunlulus - tahunmpls >= 3) {
    return `Manusia ini lulusan dari sekolah SMK Negeri 3 Singkawang dengan jurusan Pengembangan Perangkat Lunak dan Gim(PPLG) pada tahun 2025.`;
  } else {
    return `Seorang murid yang berasal dari SMK Negeri 3 Singkawang yang sekarang duduk di kelas ${tahunkelas()} dengan jurusan RPL/PPLG `;
  }
};
let span2 = document.querySelector(".lulusan");
span2.innerHTML = lulus();
