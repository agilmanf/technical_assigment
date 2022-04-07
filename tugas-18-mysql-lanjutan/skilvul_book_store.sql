CREATE database skilvulbookstore;
USE skilvulbookstore;

CREATE table penerbit(
	id int(10) auto_increment primary key not null,
    nama varchar(50),
    kota varchar(50)
);

CREATE table penulis(
	id int(10) auto_increment primary key not null,
    nama varchar(50),
    kota varchar(50)
);

CREATE table buku(
	id int(10) auto_increment primary key not null,
    ISBN varchar(50),
    judul varchar(50),
    penulis int(10),
    penerbit int(10),
    harga int(10),
    stock int(10),
    foreign key (penulis) references penulis(id),
    foreign key (penerbit) references penerbit(id)
);

INSERT INTO penerbit values
(1, "Gramedia Pustaka Utama", "Jakarta"),
(2, "Penerbit Erlangga", "Jakarta"),
(3, "Elex Media Komputindo", "Jakarta"),
(4, "Bentang Pustaka", "Yogyakarta");

INSERT INTO penulis values
(1, "Andrea Hirata", "Belitung"),
(2, "Tere Liye", "Lahat"),
(3, "Raditya Dika", "Jakarta"),
(4, "Ika Natassa", "Medan"),
(5, "Eka Kurniawan", "Tasikmalaya");

INSERT INTO buku (ISBN, judul,penulis,penerbit,harga,stock) values
("9793062797", "Laskar Pelangi", 1, 4, 75000, 0),
("9792285520", "Negeri Para Bedebah", 2, 1, 125000, 12),
("6020312585", "Cantik Itu Luka", 5, 1, 97500, 4),
("9792287981", "A Very Yuppy Wedding", 4, 1, 64800, 8),
("979780531X", "Manusia Setengah Salmon",3,null,54450,5);

SELECT * FROM buku JOIN penerbit ON buku.penerbit = penerbit.id;
SELECT * FROM buku LEFT JOIN penerbit ON buku.penerbit = penerbit.id;
SELECT * FROM buku RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT MAX(harga) AS harga_tertinggi_stok_dibawah_10 FROM buku WHERE stock < 10;
SELECT MIN(harga) AS harga_buku_termurah FROM buku;

SELECT COUNT(id) AS jumlah_buku_dibawah_100000 FROM buku WHERE harga < 100000;