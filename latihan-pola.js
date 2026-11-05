const out = [];
const judul = (t) => out.push("@@" + t);
const garis = (s) => out.push(s);

// Soal 1: Segitiga
judul("Soal 1: Segitiga");
for (let i = 1; i <= 4; i++) garis("*".repeat(i));

// Soal 2: Persegi panjang
judul("Soal 2: Persegi Panjang");
for (let i = 0; i < 4; i++) garis("*".repeat(8));

// Soal 3: Persegi panjang kosong
judul("Soal 3: Persegi Panjang Kosong");
const lebar = 8, tinggi = 5;
for (let i = 0; i < tinggi; i++) {
  if (i === 0 || i === tinggi - 1) garis("*".repeat(lebar));
  else garis("*" + " ".repeat(lebar - 2) + "*");
}

// Soal 4: Segitiga sama sisi (angka sama)
judul("Soal 4: Segitiga Sama Sisi");
for (let i = 1; i <= 4; i++) garis(String(i).repeat(i));

// Soal 5: Segitiga sama sisi 2 (angka berurutan)
judul("Soal 5: Segitiga Sama Sisi 2");
let angka = 1;
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 0; j < i; j++) baris += angka++;
  garis(baris);
}

// Soal 6: Belah ketupat
judul("Soal 6: Belah Ketupat");
const n = 4;
for (let i = 1; i <= n; i++) garis(" ".repeat(n - i) + "*".repeat(2 * i - 1));
for (let i = n - 1; i >= 1; i--) garis(" ".repeat(n - i) + "*".repeat(2 * i - 1));

// Soal 7: Segitiga jam pasir
judul("Soal 7: Segitiga Jam Pasir");
const m = 4;
for (let i = m; i >= 1; i--) garis(" ".repeat(m - i) + "*".repeat(2 * i - 1));
for (let i = 2; i <= m; i++) garis(" ".repeat(m - i) + "*".repeat(2 * i - 1));

// Soal 8: Segitiga kosong
judul("Soal 8: Segitiga Kosong");
const t = 5;
for (let i = 1; i <= t; i++) {
  const spasi = " ".repeat(t - i);
  if (i === 1) garis(spasi + "*");
  else if (i === t) garis("*".repeat(2 * t - 1));
  else garis(spasi + "*" + " ".repeat(2 * i - 3) + "*");
}

const teksPola=out.join("\n"); 
console.log(teksPola);