/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
 -  Type Error, terjadi ketika argumen yang diberikan pada suatu fungsi tidak sesuai/kompatibel
    dengan yang diharapkan, bisa karena tipe data yang salah atau lainnya. contohnya kita
    menggunakan built-in function upperCase pada number, maka akan muncul error ini. Atau bisa
    juga kita mencoba mengubah nilai dari constanta

 - Reference Error, terjadi ketika kita mencoba memanggil variabel yang belum dideklarasikan

 - Range Error, error yang terjadi ketika nilai tidak dalam rentang nilai yang diizinkan, contoh
   ketika kita membuat program yang mengatur jumlah digit tidak boleh lebih dari 1000, maka jika
   melebihi maka akan terjadi error ini.

 - Syntax Error, terjadi ketika kita salah menuliskan syntax code, entah kurang titik koma (;) atau
   kurang kutip('), brackets({) dan lainnya
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

/*
- akan terjadi error -> ReferenceError: Cannot access 'salaryWithConst' before initialization
- termasuk reference error
- karena kita mencoba console.log variabel yang belum dideklarasikan, dibaris 33 & 34 kita mencoba
  menampilakan variabel salaryWithVar dan salaryWithConst padahal keduanya baru dideklarasikan
  pada baris 36 & 37
*/