SHOW databases;
CREATE database bookstore;
USE bookstore;
SHOW tables;

CREATE table books(
	id integer primary key auto_increment,
    author1 varchar(100) not null,
    author2 varchar(100),
    author3 varchar(100),
    title varchar(100),
    description text,
    place_sell char(3),
    stock integer default 0,
    creation_date datetime default current_timestamp()
);

ALTER table books
add price integer default 0,
add status enum('available','out of stock', 'limited'),
drop place_sell;

INSERT INTO books VALUES
(1,"Matt Haig",null,null,"The Midnight Library", "Di antara kehidupan dan kematian terdapat sebuah perpustakaan yang jumlah bukunya tak terhingga.",10, current_timestamp(),67500,'available'),
(2,"Tere Liye",null,null,"Tentang Kamu", "Terima kasih untuk kesempatan mengenalmu, itu adalah salah satu anugerah terbesar hidupku.",7, current_timestamp(),45000,'limited'),
(3,"Ichiro Kishimi","Fumitake Koga",null,"Berani Tidak Disukai", "Membaca buku ini bisa mengubah hidup anda. jutaan orang sudah menarik manfaat darinya. sekarang giliran anda.",0, current_timestamp(),70000,'out of stock');

SELECT * FROM books;
SELECT id as ID, author2 as A2, author3 as A3 FROM books;
SELECT * FROM books WHERE id=1;
SELECT * FROM books WHERE id=2 AND status='limited';
SELECT * FROM books WHERE status='available' OR status='limited';
SELECT * FROM books WHERE author2 IS NOT NULL;
SELECT * FROM books order by id ASC;
SELECT * FROM books limit 2;

UPDATE books SET author1="Matt Damon", price="70000" WHERE id=1;
DELETE FROM books WHERE id=3;