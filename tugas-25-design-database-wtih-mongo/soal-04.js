/* Soal 4

Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama SkilFlix. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada Setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut?
Contoh Data yang dibutuhkan:

Cinemas

First Cinema
Cinema Name: CGF
Films:
Venom 2
Spiderman No Way Home
Location: Pondok Indah Mall

Second Cinema
Cinema Name: Cinema31
Films:
Venom 2
Spiderman No Way Home
Location: Mall Kelapa Gading

*/

/* Jawaban

Relasi yang tepat adalah menggunakan many to many. karena satu film bisa ditayangkan di banyak cinema dan satu cinema bisa menayangkan banyak film

*/

const cinemas = [
  {
    _id: "ObjectId('C01')",
    cinemaName: "CGF",
    location: "Pondok Indah Mall",
    movies: [ObjectId("M001"), ObjectId("M002")],
  },
  {
    _id: "ObjectId('C02')",
    cinemaName: "Cinema 31",
    location: "Mall Kelapa Gading",
    movies: [ObjectId("M001"), ObjectId("M002")],
  },
];

const movies = [
  {
    _id: "ObjectId('M001')",
    movieName: "Spiderman No Way Home",
    airedOn: [ObjectId("C01"), ObjectId("C02")],
  },
  {
    _id: "ObjectId('M002')",
    movieName: "Venom",
    airedOn: [ObjectId("C01"), ObjectId("C02")],
  },
];
