/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE 
/*
 - Ada 2, Global Scope dan Local Scope
 - Global Scope, berarti variabel yang kita buat bisa diakses dimanapun dalam suatu File.
   Local Scope, berarti kita mendeklarasikan variabel dalam suatu blocks, maka variable itu 
   hanya bisa diakses dalam block tersebut saja.

 - Contoh Global Scope :
    
   let nama = "Gilman";
   function printNama(){
     return nama; // nama = Gilman, bisa mengakses variabel diluar block
   }
   console.log(nama); // yang muncul di console Gilman

   Contoh Local Scope :

   function printNama(){
     let nama = "Gilman";
     return nama;
   }

   console.log(printNama()); // di console akan muncul Gilman
   console.log(nama); // di console akan error karena kita mendeklarasikan variabel nama dalam
                      // block function, sehingga diluar blok variabel nama tidak diketahui */

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang akan tampil adalah "Mariah"
/// - karena kebiasaan function adalah akan mengambil variabel local dulu baru kalo tidak ada dia
///   akan mencari ke global. meskipun nama variabelnya sama tapi sebenarnya berbeda, yang satu
///   variabel global dan yang satu parameter function. Dalam kasus ini karena si function menemukan
///   name di local(parameter) maka dia akan mengambil name yang local. Dan kenapa yang tampil di
///   console "Mariah"? karena dibaris 52 kita memanggil function dengan memberikan argument "Mariah Carrey"
const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));