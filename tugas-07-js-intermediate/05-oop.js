// Soal - 01 ////////////////////////////////////////////////////////////////////////

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.

// JAWABAN
/*
   1. Akan menampilkan di console log fun 1 & 2 dan isi this-nya
   2. Tidak
   3. Berbeda kalo yang pertama karena menggunakan function biasa maka this nya akan me-refer dari si objectnya,
      sedangkan yang kedua karena menggunakan arrow function this-nya refer ke windows / documentnya
*/
const obj = {
    fun1: function() {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();

// Soal - 02 ////////////////////////////////////////////////////////////////////////

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

// JAWABAN
/*
    1. Escapsulation, cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
       kita membutuhkannya salah satunya untuk mencegah memodifikasi data secara tidak sengaja.
       selain itu nilai property dan method dalam class harus independen tidak boleh diganti diluar class

    2. Abstraction, metode untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya 
       menampilkan fungsionalitas atau fitur penting dari objek tersebut. kita menggunakannya salah satu
       tujuannya agar codingan kita lebih sederhana dan rapi, contoh penggunaannya kita buat class abstrak
       yang nantinya akan menjadi kerangka dasar untuk class turunannya. dan tinggal disesuaikan.

    3. Inheritance, proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
       salah satu tujuannya agar kode lebih efisien dan tidak ada kode yang berulang. sesuai dengan prinsip
       programming DRY(Don't repeat yourself).

    4. Polymorpishm, konsep OOP yang berarti kemampuan dari suatu objek untuk memiliki banyak bentuk. 
       konsep ini sangat diperlukan, yaitu method yang diwariskan bisa kita ubah dengan behaviour yang
       berbeda menyesuaikan child class yang kita buat.
*/

// Soal - 03 ////////////////////////////////////////////////////////////////////////

class Phone {
    constructor(brand, storage, ram) {
        let _brand = brand;
        let _storage = storage;
        let _ram = ram;

        this.getBrandName = function() {
            return _brand;
        }

        this.setBrandName = function(b) {
            _brand = b;
        }

        this.printSpecification = function() {
            return console.log(`Ponsel ini memiliki storage: ${_storage} dan ram ${_ram}`);
        }

        this.setSpecification = function(s, r) {
            _storage = s;
            _ram = r;
        }
    }
}

console.log("\n// Soal 3 /////////////////////////")

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// Soal - 04 ////////////////////////////////////////////////////////////////////////

class Student {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.courseOfferings = [];
    }

    takeNewCourse(course) {
        let isHaveCourse = false;
        this.courseOfferings.forEach(c => {
            if (c.subject == course.subject) isHaveCourse = true;
        })

        if (isHaveCourse) console.log(`Kamu sudah mengikuti course ${course.subject} !`)
        else {
            course.decreaseQuota();
            const newCourse = new CourseOffering(course.subject, course.quota, course.attendance)
            this.courseOfferings.push(newCourse);
        }

    }

    takeATest(course) {
        this.courseOfferings.forEach(c => {
            if (c.subject == course.subject) {
                if (c.attendance >= course.attendance) c.grade = Math.round(Math.random() * 10);
                else console.log("Absen kamu kurang, harap isi absen dahulu");
            }
        })
    }

    courseAttendance(course) {
        this.courseOfferings.forEach(c => {
            if (c.subject == course.subject) c.attendance += 1
        })
    }
}

class Course {
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
    }

    getSubject() {
        return this.subject
    }

    getAttendance() {
        return this.attendance
    }

    decreaseQuota() {
        this.quota -= 1
    }
}

class CourseOffering extends Course {
    constructor(subject, quota, attendance) {
        super(subject, quota, attendance);
        this.minAttendance = attendance;
        this.attendance = 0;
        this.minGrade = 5;
        this.grade = 0;
    }
}

console.log("\n// Soal 4 /////////////////////////")

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);