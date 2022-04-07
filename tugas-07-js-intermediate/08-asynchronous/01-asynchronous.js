// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    doSetTimeout(i);
  }

  // Jawaban no.6 /////
function doSetTimeout(i){
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}

// Jawaban /////////////////////////////////////////////////////////////
/*
1.  Synchronous secara sederhana adalah proses pengeksekusian kode yang dijalankan
    secara berurutan berdasarkan kode yang tertulis.

2.  Asynchronous adalah proses pengeksekusian kode yang tidak sesuai dengan urutan
    yang ada atau bisa disebut menjalankan perintah selanjutnya tanpa menunggu
    perintah sebelumnnya selesai.

3.  Bisa

4.  Di console akan tercetak first log: 1 sampai 5 dan diikuti tercetak second log: 6
    yang berulang sebanyak 5 kali.

5.  Console.log pertama dijalankan dengan cara synchronous sehingga code langsung dijalankan
    dan langsung dicetak di console. sedangkan console.log kedua dia menggunakan cara
    asynchronous sehingga code tidak akan langsung dijalankan, namun menunggu terlebih dahulu
    sesuai ketentuan.
*/