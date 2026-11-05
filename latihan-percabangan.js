// Soal 1: Sistem Penilaian Sederhana
function cekStatus(nilai) {
  if (nilai >= 75) {
    console.log("Lulus");
  } else {
    console.log("Remedial");
  }
}

cekStatus(80); // Lulus
cekStatus(60); // Remedial

// Soal 2: Konversi Kode Peran (Role)
function konversiRole(kode) {
  switch (kode) {
    case "A":
      console.log("Admin");
      break;
    case "U":
      console.log("User");
      break;
    default:
      console.log("Guest");
  }
}

konversiRole("A"); // Admin
konversiRole("U"); // User
konversiRole("X"); // Guest