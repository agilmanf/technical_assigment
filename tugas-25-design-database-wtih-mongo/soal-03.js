/* Soal 3

Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi SkilShop. Jelasskan juga relasi apakah yang tepat untuk data tersebut? Contoh data yang dibutuhkan adalah:

Product

Product Name: Kaos Polos
Brand Name: SkilShirt

Varian Pertama
Varian Name 1: Kaos Polos Hitam
Color: Hitam
Quantity: 12
Price: Rp 99.000

Varian Kedua
Varian Name 1: Kaos Polos Navy
Color: Navy
Quantity: 10
Price: Rp 99.000

*/

/* Jawaban

Relasi yang tepat adalah menggunakan one to many. karena varian baiknya menjadi collection yang terpisah dengan produk. dan disetiap produk kita cukup me-reference ke id variannya

*/

const product = [
  {
    _id: "ObjectId('P01')",
    productName: "Kaos Polos",
    brandName: "SkilShirt",
    varian: "ObjectId('V001')",
  },
];

const varian = [
  {
    _id: "ObjectId('V001')",
    varianName: "Kaos Polos Hitam",
    color: "Hitam",
    quantity: 12,
    price: 99000,
  },
  {
    _id: "ObjectId('V002')",
    varianName: "Kaos Polos Navy",
    color: "Navy",
    quantity: 10,
    price: 99000,
  },
];
