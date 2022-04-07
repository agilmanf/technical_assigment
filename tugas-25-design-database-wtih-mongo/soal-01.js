/* Soal 1

Buatlah skema untuk kebutuhan data profile pengguna aplikasi Skiljek dan relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:
- Full Name
- Email
- Phone Number

*/

/* Jawaban

Relasi yang tepat adalah menggunakan one to one. karena satu orang hanya boleh punya satu akun dan datanya tidak akan terhubung dengan akun lainnya

*/

const data = [
  {
    _id: "ObjectId('AAA')",
    fullName: "John Doe",
    email: "john@gmail.com",
    phoneNumber: "08123456789",
  },
];
