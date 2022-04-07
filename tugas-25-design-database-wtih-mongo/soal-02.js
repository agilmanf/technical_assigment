/* Soal 2

Buatlah skema untuk kebutuhan data alamat pengguna SkilShop dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:
- Full Name
- Phone Number
- Address (Max 2)

*/

/* Jawaban

Relasi yang tepat adalah menggunakan one to few. karena dibutuhkan lebih dari satu alamat

*/

const data = [
  {
    _id: "ObjectId('AAA')",
    fullName: "John Doe",
    phoneNumber: "08123456789",
    address: {
      alamat1: "Alamat 1",
      alamat2: "Alamat 2",
    },
  },
];
