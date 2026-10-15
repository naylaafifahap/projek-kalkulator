// Nama  : Nayla Afifah Aprilia
// NIM   : 250302118
// Kelas : TI-2D
const angkaA = document.getElementById("angka-a");
const angkaB = document.getElementById("angka-b");

const tombolTambah = document.getElementById("tombol-tambah");
const tombolKurang = document.getElementById("tombol-kurang");
const tombolKali = document.getElementById("tombol-kali");
const tombolBagi = document.getElementById("tombol-bagi");

const tombolHapus = document.getElementById("tombol-hapus");

const hasil = document.getElementById("hasil");
const statistik = document.getElementById("statistik");
const sifatHasil = document.getElementById("sifat-hasil");

const panduan = document.getElementById("panduan");
const tombolPanduan = document.getElementById("tombol-panduan");

const infoPembuat = document.getElementById("info-pembuat");

// Menghitung jumlah perhitungan
let jumlahPerhitungan = 0;

// Mengatur panduan
let panduanTampil = false;


// Fungsi utama kalkulator
function hitung(operasi) {

  // Validasi input kosong
  if (angkaA.value === "" || angkaB.value === "") {
    hasil.textContent =
      "Masukkan kedua angka terlebih dahulu.";

    sifatHasil.textContent =
      "Sifat hasil: -";

    return;
  }

  // Mengubah input menjadi angka
  const a = Number(angkaA.value);
  const b = Number(angkaB.value);

  let hasilHitung;


  // Memilih operasi hitung
  if (operasi === "tambah") {

    hasilHitung = a + b;

  } else if (operasi === "kurang") {

    hasilHitung = a - b;

  } else if (operasi === "kali") {

    hasilHitung = a * b;

  } else if (operasi === "bagi") {

    // Tidak boleh dibagi dengan nol
    if (b === 0) {

      hasil.textContent =
        "Tidak bisa dibagi dengan nol.";

      sifatHasil.textContent =
        "Sifat hasil: -";

      return;
    }

    hasilHitung = a / b;
  }


  // Menampilkan hasil
  hasil.textContent =
    "Hasil: " + hasilHitung;


  // Menambah jumlah perhitungan
  jumlahPerhitungan++;

  statistik.textContent =
    "Jumlah perhitungan: " + jumlahPerhitungan;


  // Memeriksa sifat hasil
  if (hasilHitung > 0) {

    sifatHasil.textContent =
      "Sifat hasil: Positif";

  } else if (hasilHitung < 0) {

    sifatHasil.textContent =
      "Sifat hasil: Negatif";

  } else {

    sifatHasil.textContent =
      "Sifat hasil: Nol";
  }
}


// Tombol tambah
tombolTambah.addEventListener("click", function () {
  hitung("tambah");
});


// Tombol kurang
tombolKurang.addEventListener("click", function () {
  hitung("kurang");
});


// Tombol kali
tombolKali.addEventListener("click", function () {
  hitung("kali");
});


// Tombol bagi
tombolBagi.addEventListener("click", function () {
  hitung("bagi");
});


// Tombol hapus
tombolHapus.addEventListener("click", function () {

  angkaA.value = "";
  angkaB.value = "";

  hasil.textContent = "Hasil: 0";

  sifatHasil.textContent =
    "Sifat hasil: -";
});


// Tombol tampil/sembunyi panduan
tombolPanduan.addEventListener("click", function () {

  if (panduanTampil === false) {

    panduan.style.display = "block";

    tombolPanduan.textContent =
      "Sembunyikan Panduan";

    panduanTampil = true;

  } else {

    panduan.style.display = "none";

    tombolPanduan.textContent =
      "Tampilkan Panduan";

    panduanTampil = false;
  }
});


// Informasi pembuat
infoPembuat.textContent =
  "2026 Praktikum Pemrograman Web Dasar | Dibuat oleh Nayla Afifah Aprilia";