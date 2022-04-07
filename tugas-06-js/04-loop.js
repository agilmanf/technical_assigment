/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 1; i <= 100; i++) {
    let pembagi = 2;
    for (pembagi; pembagi <= i; pembagi++) {
        if (i % pembagi == 0) {
            break;
        }
    }
    if (i == pembagi) console.log(i);
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let n = 0;
let pembagi = 2;
while (primeCounter < 50) {
    while (pembagi <= n) {
        if (n % pembagi == 0) {
            break;
        }
        pembagi++;
    }

    if (n == pembagi) {
        pembagi = 2;
        //console.log(primeCounter + 1 + ".  " + n); // Cek urutan bilangan prima
        primeCounter++;
        if (primeCounter == 50) {
            fiftiethPrime = n;
            console.log("Bilangan prima ke-50 adalah " + n);
        }
    } else {
        pembagi = 2;
    }

    n++;
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = "";

/// EDIT HERE
let number = 0;
do {
    if (number % 2 != 0) {
        //console.log(oddCounter + ". " + number); // cek urutan bilangan ganjil
        oddCounter++;
        if (oddCounter == 50) {
            fiftiethOdd = number;
            console.log("Bilangan ganjil ke-50 adalah " + fiftiethOdd);
        }
    }
    number++;
} while (oddCounter < 50)