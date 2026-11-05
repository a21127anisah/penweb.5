// Soal 1: FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzBuzz(15);

// Soal 2: Cek Genap & Ganjil
function cekGenapGanjil(angka) {
  return angka % 2 === 0 ? "Genap" : "Ganjil";
}
console.log(cekGenapGanjil(4)); // Genap
console.log(cekGenapGanjil(7)); // Ganjil

// Soal 3: Balik String
function balikString(str) {
  let hasil = "";
  for (let i = str.length - 1; i >= 0; i--) {
    hasil += str[i];
  }
  return hasil;
}
console.log(balikString("halo")); // olah