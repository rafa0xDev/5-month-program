// day 1
const num = [1, 2, 3, 4, 5];

function filterGanjil(num) {
    const ganjil = num.filter(n => n % 2 !== 0);
    return ganjil;
}

function kaliGanjil(num) {
    return num.filter(n => n % 2 !== 0).map(n => n * 2);
}

console.log(filterGanjil(filterGanjil(num))); // [1, 3, 5]
console.log(kaliGanjil(num));     // [2, 6, 10]

function proses(arr) {
    const ganjil = arr.filter(n => n % 2 !== 0);
    const kali = ganjil.map(n => n * 2);
    return kali
}
console.log(proses(num));

const angka = [1, 2, 3, 4, 5, 6];
function pangkatGenap (arr){
    const genap = arr.filter(angka => angka % 2 === 0);
    const pangkatduwa = genap.map(angka => angka ** 2);
    return pangkatduwa ;
}

console.log(pangkatGenap(angka));

const data = [1, 2, 3, 4, 5];
function statistkGanjil(data) {
    const ganjil = data.filter(angka => angka % 2 !== 0);
    const total = ganjil.reduce((val,acc) => val + acc, 0);

    const rata2 = total / ganjil.length

    return {
        total: total,
        rata2: rata2.toFixed(2)
    }
}

console.log(statistkGanjil(data));

const nilai = [70, 85, 90, 60, 75, 100, 80];
function statistikNilai (data){
    const oal = data.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
    const rataRata = oal / data.length;
    const tertinggi = Math.max(...data);
    const terendah = Math.min(...data);

    return {
        total: oal,
        rataRata: rataRata.toFixed(2),
        tertinggi: tertinggi,
        terendah: terendah
    }
};

console.log(statistikNilai(nilai));

// day 2
const rapot = [81, 91, 88, 85, 87, 87, 90, 89, 90, 82, 87];
function analisaScore (arr){
    const total = arr.reduce((acc,val) => acc + val, 0);
    const average = total / arr.length;
    let predikat ;
    if (average >= 90){
        predikat = "A";
    } else if (average >= 80){
        predikat = "B";
    } else if(average >= 70){
        predikat = "C"
    } else if(average >= 60){
        predikat = "D";
    } else {
        predikat = "E";
    }

    return {
        total: total,
        average: average.toFixed(2),
        predikat: predikat
    }
};

const transaksi = [ 15000000, // Gaji bulan 1
  -3000000, // Sewa kos
  -1500000, // Makan & minum
  -800000,  // Transportasi
  -200000,  // Internet
  16000000, // Gaji bulan 2
  -3200000, // Sewa naik
  -1800000, // Makan & minum
  -1000000, // Belanja kebutuhan pribadi
  -250000,  // Netflix + Spotify
  17000000, // Gaji bulan 3
  -3500000, // Liburan!
  -2000000, // Makan & jajan
  -500000,  // Upgrade mouse + keyboard
];
function analisaKeuangan(arr){
   const gaji = arr.filter(val => val > 0 ).reduce((acc,val) => acc + val, 0);
   const pengeluaran = arr.filter(val => val < 0).reduce((acc,val) => Math.abs(val), 0);
   const saldo = gaji - pengeluaran ;
   
   return {
    gaji: gaji,
    pengeluaran: pengeluaran,
    saldo: saldo
   }
}

console.log(analisaKeuangan(transaksi));

const balance = [15000000, -4000000, 2000000, -2500000];
function laporanKeuangan (arr){
    const pemasukan = arr.filter(val => val > 0).reduce((acc,val) => acc + val, 0);
    const pengeluaran = arr.filter(val => val < 0).reduce((acc, val) =>acc + Math.abs(val),0);
    const saldo = pemasukan - pengeluaran;

    return {
        pemasukan: pemasukan,
        pengeluaran: pengeluaran,
        saldo
    }
};

console.log(laporanKeuangan(balance));

const huruf = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'c'];
function hitungHuruf(arr){
    const hasil = arr.reduce((acc,val) => {
        if(!acc[val]){
            acc[val] = 1
        } else {
            acc[val]++;
        }
        return acc;
    }, {});

    return hasil
}

console.log(hitungHuruf(huruf));

const ongko = [1, 2, 3, 4, 5, 6];
function hitungGanjilGenap (arr){
    const totalGanjil = arr.filter(val => val % 2 !== 0).reduce((acc, val) => acc + val, 0);
    const totalGenap = arr.filter(val => val % 2 === 0).reduce((acc, val) => acc + val, 0);

    return {
        totalGanjil: totalGanjil,
        totalGenap: totalGenap
    }
};

console.log(hitungGanjilGenap(ongko));

const numero = [12, 7, 25, 18, 30, 5, 10];
function hitungStatistik (arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const total = arr.reduce((acc,val) => acc + val , 0);
    const avg = total / arr.length;

    return {
        min : min,
        max : max,
        avg : avg.toFixed(2)
    }
}

console.log(hitungStatistik(numero));

// day 3
const randNums = [3, 8, 15, 22, 7, 10, 5, 6];
function isOdd (arr){
    const filter = arr.filter(num => num % 2 !== 0);
    return filter ;
}

console.log(isOdd(randNums));

const namaSiswa = ["Rafa", "Andriana", "Bayu", "Jonathan", "Dita", "Alexandra"];
function hitungPanjangNama (arr){
    const filterNama = arr.filter(nama => nama.length > 5);
    return filterNama;
};

console.log(hitungPanjangNama(namaSiswa));

const namaOrangSukses = ["Rafa", "Andriana", "Bayu", "Jonathan", "Dita", "Alexandra"];
function uppercaseName (arr){
    const filterLebihLima = arr.filter(nama => nama.length > 5);
    const uppercase = filterLebihLima.map(nama => nama.toUpperCase());

    return uppercase;
};

console.log(uppercaseName(namaOrangSukses));

const namaSiswaKece = ["Rafa", "Andriana", "Bayu", "Jonathan", "Dita", "Alexandra"];
function totalHurufNama(arr){
    const totalHuruf = arr.reduce((prev, next) => prev + next.length, 0);
    return totalHuruf;
}

console.log(totalHurufNama(namaSiswaKece));

const siswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Bayu", nilai: 90 },
  { nama: "Dita", nilai: 75 },
  { nama: "Andriana", nilai: 88 },
  { nama: "Jonathan", nilai: 92 }
];

function totalNilai (arr){
    const total = arr.reduce((prev, next) => prev + next.nilai, 0);
    return total;
}
 console.log(totalNilai(siswa));

const namasiswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Bayu", nilai: 90 },
  { nama: "Dita", nilai: 75 },
  { nama: "Andriana", nilai: 88 },
  { nama: "Jonathan", nilai: 92 }
];
function ratarata (arr){
    const ratarata = arr.reduce((prev, next) => prev + next.nilai, 0) / arr.length;
    return ratarata.toFixed(2);
};

console.log(ratarata(namasiswa));

const DataNilaisiswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Bayu", nilai: 55 },
  { nama: "Dita", nilai: 75 },
  { nama: "Andriana", nilai: 40 },
  { nama: "Jonathan", nilai: 92 }
];

function LulusUppercase(arr){
    const siswaLulus = arr.filter(siswa => siswa.nilai >= 70);
    const uppercase = siswaLulus.map(siswa => siswa.nama.toUpperCase());

    return uppercase;
};

console.log(LulusUppercase(DataNilaisiswa));

//day 4 
const randomnumber = [1, 2, 3, 4, 5, 6];
function genapString(arr){
    const filter = arr.map(n => n % 2 === 0 ? "genap" : n );
    return filter
};

console.log(genapString(randomnumber));

function tampilUser ({nama, usia = 0}) {
        console.log(`hallo nama saya ${nama}, usia saya ${usia}`);
};

tampilUser({ nama: "Rafa", usia: 17 });  
// Output: Halo, nama saya Rafa, umur saya 17

tampilUser({ nama: "Bayu" });  
// Output: Halo, nama saya Bayu, umur saya 0

const dataSiswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Bayu", nilai: 70 },
  { nama: "Dita", nilai: 60 },
  { nama: "Andi", nilai: 90 }
];

function cekKelulusan(nama, nilai){
    if(nilai >= 75){
        console.log(`${nama} dinyatakan lulus`)
    } else {
        console.log(`${nama} dinyatakan tidak lulus`)
    }
};

dataSiswa.forEach(siswa => cekKelulusan(siswa.nama, siswa.nilai));

const keranjang = [
  { nama: "keyboard", harga: 150000 },
  { nama: "monitor", harga: 1000000 },
  { nama: "mouse", harga: 80000 },
  { nama: "headset", harga: 200000 }
];
function cariMouse(data){
    const cariMouse = data.find(item => item.nama === "mouse");
    if(cariMouse){
        console.log(`item ${cariMouse.nama} ditemukan dengan harga ${cariMouse.harga}`);
    } else {
        console.log("item tidak ditemukan");
    }
};
cariMouse(keranjang);

// day 5 belajar dasar
// soal 1
let nama = "rafa";
let umur = 17;
let isSiswa = true;

console.log(nama, umur, isSiswa);
// soal 2
let angka1 = 10;
let angka2 = 7;
console.log(angka1 + angka2);

if(angka1 > angka2){
    console.log(angka1 + " lebih besar dari " + angka2);
} else {
    console.log(angka1 + "tidak lebih besar dari" + angka2);
};

if(angka1 % angka2){
    console.log("tidak habis dibagi");
} else {
    console.log("habis dibagi")
};
// soal 3
let belajar = true;
let ngantuk = false;
console.log(belajar || ngantuk);
console.log(belajar && ngantuk);

// tantangan 1
let jeneng = "Arka";
let tuwaa = 16;
let statusSiswa = true;
console.log(`Hello namaku ${jeneng}. Saya berusia ${tuwaa}. Status saya: siswa = ${statusSiswa}`)

// tantangan 2
let umurAnak = 16;
if(umurAnak > 12 && umurAnak < 20){
    console.log("banjindul ws iso ngaceng");
} else {
    console.log("bayekk")
};
// tantangan 3
let nilai1 = 86;
let nilai2 = 90;
let rotoroto = (nilai1 + nilai2) / 2;
if(rotoroto >= 75){
    console.log("lulus");
} else {
    console.log("balen kelas deng");
};

// day 6
let namo = "alok";
let oemoer = 17;
let status = true;
let hasil = `hallo, nama saya ${namo}, umur saya ${oemoer}, status pelajar : ${status}`;
console.log(hasil);
let kapan20 = 20 - oemoer;
console.log(kapan20);

let nilaiUjian = 90;
if(nilaiUjian >= 75){
    console.log("senengggg, lulus og")
} else {
    console.log("sinau neh jon!")
}

let nilaiUjian2 = 89;
if(nilaiUjian2 >= 90){
    console.log("Calon profesor nek iki");
} else if(nilaiUjian2 >= 80 && nilaiUjian2 < 90){
    console.log("iso iki munggah neh");
} else if(nilaiUjian2 >= 70 && nilaiUjian2 < 80){
    console.log("ok lahh, sng sregep ngunu loo");
} else if(nilaiUjian2 < 70){
    console.log("walah walah, ngene ko pengen banggakke wong tuo");
};

let dinoo = "jum'at";
switch(dinoo){
    case "senin":
        console.log("cokk senin");
        break
    case "rabu":
        console.log("walah ws tengahan");
        break
    case "jum'at":
        console.log("asikk moleh gasik");
        break
    case "sabtu":
        console.log("asikk juuu");
        break
    case "minggu":
        console.log("wayae skill e dislenger/diasah");
        break
    default:
        console.log("lakoni ae bolo jenenge wong urepp")
};

for (let i = 0; i <= 6; i++) {
    console.log(`sinau sregep day ${i}`);
};

// day 7
function segitigaAngka(tinggi){
    for(let i = 1; i <= tinggi; i++){
        let baris = ''
        for(let j = 1; j <= i; j++){
            baris += j + ''
        };
        console.log(baris)
    };
};
segitigaAngka(4);

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
};

for (let i = 1; i <= 10; i++) {
    console.log(i)
};

for (let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i)
    };
};

for (let i = 10; i >= 1; i--){
    console.log(i)
}

function segitigaBintangUp(tinggi){
    for(let i = 1; i <= tinggi; i++){
        let baris = '';
        for(let j = 1; j <= i; j++){
            baris += '*'
        }
        console.log(baris)
    }
}

segitigaBintangUp(5)

function segitigaBintangDown(tinggi){
    for(let i = 1; i <= tinggi; i++){
        let baris = '';
        for(let j = 1; j <= tinggi - i; j++){
            baris += "*"
        }
        console.log(baris)
    };
};

segitigaBintangDown(5);

function bintangKotak(tinggi){
    for(let o = 1; o <= tinggi; o++){
        let baris = '';
        for(let i = 1; i <= tinggi; i++){
            baris += '*'
        };
        console.log(baris)
    };
}
bintangKotak(5);

function segitigaKanan(tinggi){
    for(let i = 1; i <= tinggi; i++){
        let baris = '';
        for(let spasi = tinggi - i; spasi > 0; spasi--){
            baris += ' '
        }
    }
};
segitigaKanan(4);

// day 8 
const dataset = [5, 8, 11, 3, 9];
function newDataSet(data){
    const kalidua = data.map(n => n * 2);
    const lebihEnam = kalidua.filter(n => n > 6);
    lebihEnam.forEach(n => console.log(n));
};
newDataSet(dataset);

const asma = ["Aldi", "Rina", "Arka", "Dani", "Rafa"];
function asmalimo (data) {
    const filterLimo = data.filter(j => j.length > 3);
    const limoocilik = filterLimo.map(j => j.toLowerCase());
    console.log(limoocilik);
};
asmalimo(asma);

const produk = [
  { nama: "Laptop", harga: 7000000 },
  { nama: "Mouse", harga: 80000 },
  { nama: "Keyboard", harga: 200000 },
  { nama: "Monitor", harga: 1500000 },
  { nama: "Flashdisk", harga: 60000 }
];
function underSejuta(data){
    const filterUnderJuta = data.filter(item => item.harga < 1000000);
    if(filterUnderJuta.length > 0){
        filterUnderJuta.forEach(item => {
            console.log(`item ${item.nama} dengan harga ${item.harga} kurang dari 1 juta`);
        });
    } else {
        console.log('item tidak ditemukan')
    }
};
underSejuta(produk);

const setUp = [
  { nama: "Laptop", harga: 7000000, kategori: "elektronik" },
  { nama: "Mouse", harga: 80000, kategori: "elektronik" },
  { nama: "Kemeja", harga: 150000, kategori: "pakaian" },
  { nama: "Keyboard", harga: 200000, kategori: "elektronik" },
  { nama: "Celana", harga: 175000, kategori: "pakaian" },
  { nama: "Monitor", harga: 1500000, kategori: "elektronik" }
];
function filterKategori(data, kategori){
    const filterElektronik = data.filter(item => item.kategori === kategori);
    const totalHargaKategori = filterElektronik.reduce((prev, next) => prev + next.harga, 0);
    if(filterElektronik.length > 0){
        filterElektronik.forEach(item => {
            console.log(`item ${item.nama} dengan harga ${item.harga} dan kategori ${item.kategori} total harga = ${totalHargaKategori}`)
        });
    };
};
filterKategori(setUp, "elektronik");

function hitungDiskon(harga, persen){
    const diskonFee = harga * (1 - persen / 100);
    return diskonFee
};
hitungDiskon(200000, 25)

function lulusGaYaa (nilai) {
    if(nilai >= 75){
        return  'Hoki lu tong';
    }else {
        return  'diperpanjang atau tidak diperpanjang?DIPERPANJANG'
    }
};
console.log(lulusGaYaa(90));

function ambilLulus (arr){
    const filterLulus = arr.filter(n => n >= 75);
    return filterLulus;
};
console.log(ambilLulus([90, 60, 85, 70, 75]));

function segitiga(n){
    for(let i =1; i <= n; i++){
        console.log("*".repeat(i));
    }; 
};
segitiga(5);

function segitigamemek(n){
    for (let i = 1; i <= n; i++) {
        let baris = '';
        for (let j = 1; j <= i; j++) {
            baris += "*"
        }
        console.log(baris);
    }
};
segitigamemek(5);

function segitigaKanan(n) {
  for (let i = 1; i <= n; i++) {
    let baris = '';

    // 👉 Tambahkan spasi sebanyak (n - i)
    for (let spasi = 1; spasi <= n - i; spasi++) {
      baris += ' ';
    }

    // 👉 Tambahkan bintang sebanyak i
    for (let bintang = 1; bintang <= i; bintang++) {
      baris += '*';
    }

    // Cetak hasil baris
    console.log(baris);
  }
}
segitigaKanan(5);

for (let i = 1; i <= 3; i++){
    console.log(`hello rafa`);
};

for(let i = 5; i >= 1; i--){
    console.log(i);
};

for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0){
        console.log(i);
    };
};

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    };
};

function kotakAmba(n){
    for(let i = 1; i <= n; i++){
        let baris = '';
        for(let j = 1; j <= n; j++){
            baris += "*";
        };
        console.log(baris)
    };
};

kotakAmba(3);

function kotakBintang(n, m){
    for(let i = 1; i <= n; i++){
        let baris = '';
        for(let j = 1; j <= m; j++){
            baris += "*";
        };
        console.log(baris);
    };
};
kotakBintang(2,4);

function kotakAngka(n, m){
    let angka = 1
    for(let i = 1; i <= n; i++){
        let baris = '';
        for(let j = 1; j <= m; j++){
            baris += angka + "";
            angka++;
        };
        console.log(baris);
    };
};
kotakAngka(2,2);

// day ? yaudah tinggal latihan aja ga usah mikirin hari
// membuat program kalkulator sederhana
 function kalkulator(a, b, operator){
    switch(operator){
        case "+" :
            return a + b;
            
        case "-" :
            return a - b;
          
        case "*" :
            return a * b;
          
        case "/" :
           if(b === 0){
            return "error cannot divide by zero"
           };
           return a / b;

        case "^" :
            return Math.pow(a, b);

        default :
            return "Operator tidak valid";
    };
 };

 console.log(kalkulator(4, 0, "/"));

 function cuacahariIni (hari) {
    switch (hari) {
        case "senin"    :
        case "selasa"   :
        case "rabu"     :
            return "Hari Kerja jangan, lupa payung!";
        
        case "sabtu"    :
        case "minggu"   :
            return "Hari Libur, Santai saja!";

        default :
            return "Hari tidak valid";

    };
 };
 console.log(cuacahariIni("minggu"));

 function penilaian(nilai) {
    switch(true) {
        case (nilai >= 90 && nilai <= 100):
            return "walah walah ngene po ra idaman";
        case (nilai >= 80 && nilai <= 89):
            return "Mantepp lanjutkan bos mudaa";
        case (nilai >= 70 && nilai <= 79):
            return "mayan, sinau sregep auto A";
        case (nilai >= 60 && nilai <= 69):
            return "sinau boss";
        
        default : 
            return "ra umom";
    };
 };

 console.log(penilaian(95)); // Sangat Baik
console.log(penilaian(83)); // Baik
console.log(penilaian(72)); // Cukup
console.log(penilaian(60)); // Perlu belajar lagi
console.log(penilaian(120)); // Nilai tidak valid

function beliMinuman(kode) {
    switch(kode){
        case "A1" :
            return "Bottle of Tea - Rp5.000"
        case "B2" :
            return "Dark coffee - Rp7.000"
        case "C3" :
            return "Mineral Water - Rp3.000"

        default :
            return "Drinks code did not exist"
    };
};
console.log(beliMinuman("A1")); // Teh Botol - Rp5.000
console.log(beliMinuman("Z9")); // Kode tidak tersedia

// day gas ngoding
function formatNama(nama){
    if(typeof nama !== 'string' || nama.length === 0) {
        return "";
    }
    const namaKecil = nama.toLowerCase();
    const hurufKapitalAwal = namaKecil.charAt(0).toUpperCase();
    const sisaHuruf = namaKecil.slice(1);
    return hurufKapitalAwal + sisaHuruf;
};
console.log(formatNama("rAFA")); // Output: "Rafa"

function sensorKata(kalimat, kata){
    if(typeof kalimat !== 'string' || kalimat.length === 0 || 
        typeof kata !== 'string' || kata.length === 0) {
        return kalimat;
    };
    const kataSensor = '*'.repeat(kata.length);
    const regex = new RegExp(kata, 'gi');
    return kalimat.replace(regex, kataSensor);
};

console.log(sensorKata("Saya belajar JavaScript", "JavaScript"));

let buah = ["apel", "jeruk"];
function tambahBuah(nama, tujuan){
    if(typeof nama !== 'string' || nama.length === 0){
        return "Nama buah tidak valid";
    }
    const kirim = tujuan.push(nama);    
    return kirim;
};
console.log(tambahBuah("pisang", buah)); // Output: 3
console.log(buah); // Output: ["apel", "jeruk", "mangga"]

function hapusBuahAkhir(tujuan){
    const hapusTerakhir = tujuan.pop();
    return hapusTerakhir;
};
console.log(hapusBuahAkhir(buah)); // Output: "pisang"
console.log(buah); // Output: ["apel", "jeruk"];

function hapusBuahAwal(tujuan){
    const hapusPertama = tujuan.shift();
    return hapusPertama;
};
console.log(hapusBuahAwal(buah)); // Output: "apel"
console.log(buah); // Output: ["jeruk"]

let kata = ["aku", "suka", "koding"];
function gabungKata(kata){
    const gabung = kata.join(' ');
    return gabung;
}

console.log(gabungKata(kata)); // Output: "aku suka koding"

let kalimat = "belajar,js,itu,seru";
function pisahKata(kalimat){
    if(typeof kalimat !== 'string' || kalimat.length === 0) {
        return [];
    }
    const pisah = kalimat.split(',');
    return pisah;
};
console.log(pisahKata(kalimat)); // Output: ["belajar", "js", "itu", "seru"];

function hitungRataRata(arr){
    if(!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }
    const total = arr.reduce((prev, next) => prev + next, 0);
    const rataRata = total / arr.length;
    return rataRata;
}

console.log(hitungRataRata([10, 20, 30])) // hasil: 20

function nilaiTertinggi(arr){
    if(!Array.isArray(arr) || arr.length ===0){
        return null;
    }
    const tertinggi = arr.reduce((prev, next) => Math.max(prev, next), arr[0]);
    return tertinggi;
};
console.log(nilaiTertinggi([7, 3, 12, 5])) // hasil: 12

function even (arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return [];
    }
    const filter = arr.filter(n => n % 2 === 0);
    return filter;
}
console.log(even([1, 2, 3, 4, 5, 6])) // hasil: [2, 4, 6]

// mangkat
const siswaa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 72 },
  { nama: "Cici", nilai: 90 },
  { nama: "Deni", nilai: 60 },
  { nama: "Eka", nilai: 78 }
];
function filterLulus(siswa){
    const lulus = siswa.filter(s => s.nilai >= 75);
    const jumlahLulus = lulus.length;
    const tidaklulus = siswa.filter(s => s.nilai < 75);
    const jumlahTidakLulus = tidaklulus.length;
    const namaSiswaTidakLulus = tidaklulus.map(s => s.nama);
    return {
        jumlahLulus: jumlahLulus,
        jumlahTidakLulus: jumlahTidakLulus,
        namaSiswaTidakLulus: namaSiswaTidakLulus
    };
}
console.log(filterLulus(siswaa));

function hasilbelajar(siswa){
    const totalNilai = siswa.reduce((prev, next) => prev + next.nilai, 0);
    const rataRata = totalNilai / siswa.length;

    return {
        totalNilai : totalNilai,
        rataRata: rataRata.toFixed(2),
    }
}

console.log(hasilbelajar(siswaa));

function gateLulus(siswa){
   const lulus = siswa.filter(s => s.nilai >= 75);
   const tidakLulus = siswa.filter(s => s.nilai < 75);

   return {
         lulus: lulus,
         tidakLulus: tidakLulus
   }
}
console.log(gateLulus(siswaa));
// Output:
// {
//   lulus: [
//     { nama: "Andi", nilai: 85 },
//     { nama: "Cici", nilai: 90 },
//     { nama: "Eka", nilai: 78 }
//   ],
//   tidakLulus: [
//     { nama: "Budi", nilai: 72 },
//     { nama: "Deni", nilai: 60 }
//   ]
// }

const biji = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 75 },
  { nama: "Fahmi", nilai: 82 },
];

function displayNilai(arr){
    const toString = arr.map(siswa => {
        return `${siswa.nama} : ${siswa.nilai}`;
    })
    const hasil = toString.join(', ');
    return hasil;
};

console.log(displayNilai(biji)); // Output: "Rafa : 90, Dina : 75, Fahmi : 82"

function displayLapanPuluh(arr){
    const filter = arr.filter(s => s.nilai >= 80);
    const toString = filter.map(s => s.nama + " : " + s.nilai).join(', ');
    return toString;
}
console.log(displayLapanPuluh(biji)); // Output: "Rafa : 90, Fahmi : 82"

function toPredikat(arr){
    const predikat = arr.map(s => {
        if(s.nilai >= 90){
            return s.nama + " : A";
        }
        else if(s.nilai >= 80){
            return s.nama + " : B";
        }
        else if(s.nilai >= 70){
            return s.nama + " : C";
        }
        else if(s.nilai >= 60){
            return s.nama + " : D";
        } else {
            return s.nama + " : E";
        }
    })
    return predikat.join(', ');
};
console.log(toPredikat(biji)); // Output: "Rafa : A, Dina : C, Fahmi : B"

const ndog = [80, 75, 90, 85];
function avgval(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return 0;
    }
    const total = arr.reduce((prev, next) => prev + next, 0);
    const ratarata = total / arr.length;
    return ratarata.toFixed(2);
}
console.log(avgval(ndog)); // Output: 82.50

const siswoyo = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 75 },
  { nama: "Fahmi", nilai: 82 },
];
function cariLebihLapan(arr){
    const siswa = arr.find(s => s.nilai >= 80);
    if(siswa){
       return `${siswa.nama} : ${siswa.nilai}`;
    } else {
        return "Tidak ada siswa dengan nilai >= 80";
    }
}
console.log(cariLebihLapan(siswoyo)); // Output: "Rafa : 90"

function urutkanNilai(arr){
    const urut = arr.sort((a, b) => a.nilai - b.nilai);
    const hasil = urut.map(s => s.nama + " : " + s.nilai).join(', ');
    return hasil;
}
console.log(urutkanNilai(siswoyo)); // Output: "Dina : 75, Fahmi : 82, Rafa : 90"

const Nilaimurid = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 75 },
  { nama: "Fahmi", nilai: 82 }
];

function nilaiTertinggi(arr){
    const tertinggi = arr.reduce((prev, next) => {
        return prev.nilai > next.nilai ? prev : next
    })
    return `${tertinggi.nama} : ${tertinggi.nilai}`;
}

function avgNilai(arr){
    const total = arr.reduce((prev, next) => prev + next.nilai, 0);
    const rataRata = total / arr.length;
    return rataRata.toFixed(2); 
}

function lebihLapan(arr){
    const filter = arr.filter(s => s.nilai >= 80);
    if(filter){
        return filter.map(s => `${s.nama} : ${s.nilai}`).join(', ');
    } else {
        return`Tidak ada siswa dengan nilai >= 80`;
    }
}

console.log(nilaiTertinggi(Nilaimurid)); // Output: "Rafa : 90"
console.log(avgNilai(Nilaimurid)); // Output: "82.33"
console.log(lebihLapan(Nilaimurid)); // Output: "Rafa : 90"

const ambatukam = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 72 },
  { nama: "Fahmi", nilai: 82 },
  { nama: "Lana", nilai: 60 },
];

function formatHasilUjian(obj){
    const totalNilai = obj.reduce((prev, next) => prev + next.nilai, 0);
    const siswaLulus = obj.filter(s => s.nilai >= 75);
    const siswaTidakLulus = obj.filter(s => s.nilai < 75);

    return{
        totalNilai: totalNilai,
        siswaLulus: siswaLulus.map(s => `${s.nama} : ${s.nilai}`).join(', '),
        siswaTidakLulus: siswaTidakLulus.map(s => `${s.nama} : ${s.nilai}`).join(', ')
    }
}
console.log(formatHasilUjian(ambatukam));

const datanilai = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 72 },
  { nama: "Fahmi", nilai: 82 },
  { nama: "Lana", nilai: 60 },
];

function ranking(obj){
    const sorted = obj.sort((a, b) => b.nilai - a.nilai);
    const peringkat = sorted.map((siswa, index) => {
        return `${index + 1}. ${siswa.nama} : ${siswa.nilai}`;
    })
    return peringkat.join('\n');
}

console.log(ranking(datanilai));


const datanilaianak = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 72 },
  { nama: "Fahmi", nilai: 82 },
  { nama: "Lana", nilai: 60 },
];

function rengking(data){
    const sorted = data.sort((a, b) => b.nilai - a.nilai);
    const peringkat = sorted.map((siswa, index) => {
        return `${index + 1}. ${siswa.nama} : ${siswa.nilai}`;
    })
    const filterLulus = sorted.filter(s => s.nilai >= 75);
    const total = data.reduce((prev, next) => prev + next.nilai, 0);
    const rataRata = total / data.length;
    return {
        peringkat: peringkat.join('\n'),
        lulus: filterLulus.map(s => `${s.nama} : ${s.nilai}`).join(', '),
        ratarata: rataRata,
    }
}

console.log(rengking(datanilaianak));

const tugas = [
  { nama: "Buat to-do list", status: "selesai", kategori: "project" },
  { nama: "Belajar JavaScript", status: "proses", kategori: "belajar" },
  { nama: "Cuci sepatu", status: "belum", kategori: "pribadi" },
  { nama: "Push ke GitHub", status: "proses", kategori: "project" },
];

function filterTugasByStatus(data, status) {
    const filterStatus = data.filter(tugas => tugas.status === status);
    return filterStatus.map(tugas => tugas.nama).join(', ');
}

function filterByKategori(data, kategori){
    const filterKategori = data.filter(tugas => tugas.kategori === kategori);
    return filterKategori.map(tugas => tugas.nama).join(', ');
}

function validasiInput(tugas){
    if(!tugas.nama || tugas.nama.trim() === ""){
        return "Nama tugas tidak boleh kosong";
    }
    const validStatus = ["selesai", "proses", "belum"];
    if(!validStatus.includes(tugas.status)){
        return "Status tidak valid. Status harus 'belum', 'proses', atau 'selesai'.";
    }
    if(!tugas.kategori || tugas.kategori.trim() === ""){
        return "Kategori tidak boleh kosong";
    }

    return "Tugas valid";

}

console.log(filterTugasByStatus(tugas, "proses")); // Output: "Belajar JavaScript, Push ke GitHub"
console.log(filterByKategori(tugas, "project")); // Output: "Buat to-do list, Push ke GitHub"
console.log(validasiInput({ nama: "Isi buku jurnal", status: "belum", kategori: "pribadi" })); // Output: "Tugas valid"

function cariTugas(options = {}){
    let hasilFilter = [...tugas];

    if(options.status){
        hasilFilter = hasilFilter.filter(t => t.status === options.status);
    }
    if(options.kategori){
        hasilFilter = hasilFilter.filter(t => t.kategori === options.kategori);
     
    }
    if(options.keyword){
        const keywordLowercase = options.keyword.toLowerCase();
        hasilFilter = hasilFilter.filter(t => t.nama.toLowerCase().includes(keywordLowercase));
    }

    return hasilFilter;
};
console.log(cariTugas({ status: "proses", kategori: "project" }));
// Output: [ { nama: "Push ke GitHub", ... } ]

console.log(cariTugas({ keyword: "git" }));
// Output: [ { nama: "Push ke GitHub", ... } ]

console.log(cariTugas({}));
// Output: semua data

const tugasHarian = [
  { nama: "Push ke GitHub", kategori: "project", status: "proses", prioritas: 2 },
  { nama: "Belajar JS", kategori: "belajar", status: "proses", prioritas: 3 },
  { nama: "Cek mouse", kategori: "hardware", status: "selesai", prioritas: 1 },
  { nama: "Kerjakan To-do List", kategori: "project", status: "proses", prioritas: 1 },
];

function tugasPrioritasTinggi(status){
    const filter = tugasHarian.filter(t => t.status === "proses");
    const prioritasTinggi = filter.sort((a, b) => a.prioritas - b.prioritas);
    return prioritasTinggi.map(t => `${t.nama} (${t.kategori})`).join('\n');
};
console.log(tugasPrioritasTinggi("proses"));

function tugasByKategori(data){
    return data.reduce((acc, tugas) => {
        const { kategori } = tugas; // Ambil nilai status dari setiap tugas

         // Jika kategori ini belum ada di akumulator, inisialisasi dengan 0
         if(!acc[kategori]){
            acc[kategori] = 0;
         }
         // Tambahkan 1 ke hitungan kategori yang sesuai
            acc[kategori]++;

            return acc; // Kembalikan akumulator untuk iterasi berikutnya
    }, {}); // Mulai dengan objek kosong sebagai akumulator awal
}
console.log(tugasByKategori(tugasHarian));

const word = "Belajar JavaScript itu seru!";
console.log(word.length);// output: 28
function hitungVokal(data){
    let jumlah = 0;
    const toLowerCase = data.toLowerCase();
    for(let i = 0; i < toLowerCase.length; i++){
        const huruf = toLowerCase[i];
        if(huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o'){
            jumlah++;
        }
    }
        console.log(`Jumlah huruf vokal pada kata "${data}" adalah ${jumlah}`);
}
hitungVokal(word) // Output: 10

function hitungGanjilgenep(n, r){
    let genap = 0;
    let ganjil = 0
    for(let i = n; i <= r; i++){
        if(i % 2 === 0){
            genap++;
        }  
        else {
            ganjil++;
        }
    }
    return {
        genap: genap,
        ganjil: ganjil
    }
}
console.log(hitungGanjilgenep(1, 10)); // Output: { genap: 5, ganjil: 5 }

function hitungVokalperkata(data){
    const splitKata = data.split(' ');
    let jumlah = 0;
    for(let i = 0; i < splitKata.length; i++){
        const toLowerCase = splitKata[i].toLowerCase();
        for(let j = 0; j < toLowerCase.length; j++){
            const huruf = toLowerCase[j];
            if(huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o'){
                jumlah++;
            }
        }
    }
    return jumlah;
}
console.log(hitungVokalperkata("Belajar JavaScript itu seru"))

function hitungVokalTerbanyak(kalimat){
    const vokal = "aeiou";
    const hitungVokal = [...kalimat.toLowerCase()].reduce((prev, next) => {
        if(vokal.includes(next)){
            prev[next] = (prev[next] || 0) + 1;
        }
        return prev;
    }, {});

    let vokalTerbanyak = '';
    let jumlahhitungan = 0;
    for(const [vkl, jumlah] of Object.entries(hitungVokal)){
        if(jumlah > jumlahhitungan){
            vokalTerbanyak = vkl;
            jumlahhitungan = jumlah;
        }
    }

    if(jumlahhitungan === 0){
        return "Tidak ada huruf vokal dalam kalimat ini";
    }
    return `Huruf vokal terbanyak adalah "${vokalTerbanyak}" dengan jumlah ${jumlahhitungan}`;
}

console.log(hitungVokalTerbanyak("Belajar JavaScript itu seru!"));
console.log(hitungVokalTerbanyak("Halo Dunia!"));
console.log(hitungVokalTerbanyak("Rhythm"));
console.log(hitungVokalTerbanyak("AaBbCcEe"));
console.log(hitungVokalTerbanyak(""));

function vokalBanyak(kalimat){
    const vokal = "aeiou";
    let jumlah = 0;
    for(let i = 0; i < kalimat.length; i++){
        const huruf = kalimat[i].toLowerCase();
        if(vokal.includes(huruf)){
            jumlah++ ;
        }
    }
    return jumlah;
}
console.log(vokalBanyak("Belajar JavaScript itu seru!")); // Output: 10

for( let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}

function kaliduwaa(angka){
    const kalidua = angka.map(n => n * 2);
    return console.log(kalidua)
}
kaliduwaa([1, 2, 3, 4, 5]); // Output: [2, 4, 6, 8, 10]

function cetakganda(angka){
    for(let i = 0; i < angka.length; i++){
        console.log(`${angka[i]} x 2 = ${angka[i] * 2}`);
    }
}
cetakganda([3, 7, 1]);

function filterGanjilDanKaliDua(angka) {
    const hasil = angka.filter(n => n % 2 !== 0).map(n => n * 2);
    return hasil;
}
console.log(filterGanjilDanKaliDua([1, 2, 3, 4, 5]));

function prosesAngka(angka){
    const hasil = angka.filter(n => n % 2 === 0).reduce((prev, next) => prev + next, 0);
    if(hasil % 2 === 0){
        return `Jumlah angka genap adalah ${hasil}`;
    }
    return "Tidak ada angka genap";
}
console.log(prosesAngka([2, 3, 4, 7])) // Jumlah genap: 6
console.log(prosesAngka([1, 5, 7, 9])) // Jumlah genap: 0 → tetap genap → "Jumlah genap: 0"
console.log(prosesAngka([2, 5, 3])) // 2 → "Jumlah genap: 2"
console.log(prosesAngka([2, 5, 3, 1])) // 2 → tetap "Jumlah genap: 2"

function fixNama(nama){
    if(typeof nama !== 'string' || nama.length === 0){
        return "";
    }
    const namaKecil = nama.toLowerCase();
    const katakata = namaKecil.split(' ');
    const hurufKapitalAwal = katakata.map(k => k.charAt(0).toUpperCase() + k.slice(1));
    return hurufKapitalAwal.join(' ');
}
console.log(fixNama("rAfA RaFa"))  //"Rafa Rafa"
console.log(fixNama("anDRi yAn")) // "Andri Yan"

const scores = [85, 42, 97, 63, 77, 58, 91];
function getPassedStudents(scores) {
    const passed = scores.filter(s => s >= 70);
    const sorted = passed.sort((a,b ) => b -a);
    console.log(`Students who passed: ${sorted.join(', ')}`);
}
getPassedStudents(scores); // Output: "Students who passed: 97, 91, 85, 77"

const students = [
  { name: "Rafa", score: 85 },
  { name: "Adit", score: 42 },
  { name: "Tari", score: 97 },
  { name: "Lia", score: 63 },
  { name: "Doni", score: 77 },
  { name: "Fina", score: 58 },
  { name: "Joko", score: 91 }
];

function getPassedNames(students) {
    return students.filter(s => s.score >= 70).map(s => s.name).sort();
}
console.log(getPassedNames(students)); // Output: ["Rafa", "Tari", "Doni", "Joko"]

for( let i = 1; i <= 20; i++){
    if (i % 2 !== 0){
        console.log(`${i}`)
    }
}

const arrAngka = [4, 7, 1, 9, 3];
function jumAngka(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total
}
console.log(jumAngka(arrAngka))

const todos = ["Belajar JS", "Ngoding proyek", "Review commit"];
for(let i = 0; i < todos.length ; i++){
    console.log(`${i + 1}. ${todos[i]}`)
}

function countEven(start){
    let i = start;
    while(i <= 20){
        if(i % 2 === 0){
            console.log(i);
        }
        i++
    }
    console.log('times up')
}
countEven(1);

const nilaiorg = [87, 92, 45, 99, 76, 88];
let max = nilaiorg[0];
for(let i = 0; i < nilaiorg.length; i++){
    if(nilaiorg[i] > max){
        max = nilaiorg[i];
    }
}
console.log("Nilai terbesar dalam array (menggunakan for loop):", max);

let tasks = ["Belajar JS", "Ngoding proyek", "Review commit", "Main game"];
function delTask(...taskname){
    const filter = tasks.filter(task => !taskname.includes(task));
    return filter.join(' ,')
}
console.log(delTask("Review commit", "Main game")); // Output: Belajar JS, Ngoding proyek

const matriks = [
  [10, 20],
  [30, 40],
  [50, 60]
];

for(let i = 0; i < matriks.length; i++){
    for(let j = 0;j < matriks[i].length; j++){
        console.log(matriks[i][j]);
    }
}

let total = 0
for(let i = 0; i < matriks.length; i++){
    for(let j = 0; j < matriks[i].length; j++){
       total += matriks[i][j];
    }
}
console.log("Total dari semua elemen matriks:", total); // Output: 210


const weeklyTasks = [
  ["Belajar JS", "Ngoding proyek"],
  ["Review PR", "Istirahat"],
  ["Ngoding lagi", "Main bentar"]
];
for(let i = 0; i < weeklyTasks.length; i++){
     console.log(`hari ke-${i + 1} :`);
    for(let j = 0; j < weeklyTasks[i].length; j++){
        console.log(`-${weeklyTasks[i][j]}`);
    }
    // Tambahkan baris kosong kecuali di hari terakhir
    if (i < weeklyTasks.length - 1) {
        console.log('');
    }
}

const matrix =  [
  [2, 4, 6],
  [1, 3, 5],
  [7, 9, 11]
];

for(let i = 0; i < matrix.length; i++){
    let total = 0;
    for(let j = 0; j < matrix[i].length; j++){
        total += matrix[i][j];
    }
    console.log("Total dari baris", i + 1, "adalah:", total);
}

let hasilkali = [];
for(let i = 0; i < matrix.length; i++){
    let baris = [];
    for(let j = 0; j < matrix[i].length; j++){
        baris.push(matrix[i][j] * 2);
    }
    hasilkali.push(baris);
}
console.log(hasilkali); // Output: [[4, 8, 12], [2, 6, 10], [14, 18, 22]]

const belanjaan = [
  { nama: "Pensil", harga: 3000, kategori: "alat tulis" },
  { nama: "Buku", harga: 7000, kategori: "alat tulis" },
  { nama: "Penghapus", harga: 2000, kategori: "alat tulis" },
  { nama: "Roti", harga: 5000, kategori: "makanan" },
  { nama: "Pulpen", harga: 4000, kategori: "alat tulis" },
  { nama: "Susu", harga: 6000, kategori: "makanan" }
];
const totHarga = belanjaan.reduce((prev, next) => prev + next.harga, 0);
const listBarang = belanjaan.reduce((prev, next) => {
  // Jika ini adalah elemen pertama, kembalikan hanya nama barangnya.
  if (prev === '') {
    return next.nama;
  }
  // Jika bukan, tambahkan koma dan spasi, lalu nama barangnya.
  return prev + ', ' + next.nama;
}, ''); // Nilai awal (initial value) adalah string kosong ''
const barangYgDibeli = belanjaan.map(item => item.nama).join(', ');

console.log("Total harga belanjaan:", totHarga); // Output: 16000
console.log(`barang yang dibeli: ${barangYgDibeli}`); // Output: Pensil, Buku, Penghapus, Pulpen //cara map dan join
console.log("Barang yang dibeli:", listBarang); //cara reduce
// Output: Barang yang dibeli: Pensil, Buku, Penghapus, Pulpen

function pisahKategori(kategori1, kategori2){
    const filterkategori1 = belanjaan.filter(item => item.kategori === kategori1);
    const filterkategori2 = belanjaan.filter(item => item.kategori === kategori2);

    return {
        [kategori1]: filterkategori1.map(item => item.nama).join(', '),
        [kategori2]: filterkategori2.map(item => item.nama).join(', ')
    }
}
console.log(pisahKategori("alat tulis", "makanan"));

const pisahKategoriBanyak = belanjaan.reduce((prev, item) => {
    // prev = {}
    // item = { nama: "Pensil", ..., kategori: "alat tulis" }

    // Cek apakah properti "alat tulis" sudah ada di objek prev
    if(!prev[item.kategori]){
        // Ternyata belum ada, karena prev masih {}
        prev[item.kategori] = [];// Maka, buat properti itu dengan nilai array kosong
    }
    // Sekarang prev menjadi { "alat tulis": [] }

    prev[item.kategori].push(item.nama);// Masukkan "Pensil" ke array itu
    // prev sekarang { "alat tulis": ["Pensil"] }

    return prev; // prev sekarang { "alat tulis": ["Pensil"] }
}, {});
console.log(pisahKategoriBanyak); //ini adalah cara reduce untuk memisahkan kategori yang banyak/tidak terbatas

const pisahKtgTambah = belanjaan.reduce((prev, item) => {
    if(!prev[item.kategori]){
        prev[item.kategori] = { nama: [], harga: 0 };
    }
    prev[item.kategori].nama.push(item.nama);
    prev[item.kategori].harga += item.harga;

    return prev;
}, {});
console.log(pisahKtgTambah); //ini adalah cara reduce untuk memisahkan kategori, tapi ditambah kan juga total harga dan nama barangnya

// Pertama, kita harus mengelompokkan dan menjumlahkan data seperti sebelumnya
const pisahKategoriTambah = belanjaan.reduce((prev, item) => {
    if (!prev[item.kategori]) {
        prev[item.kategori] = { nama: [], harga: 0 };
    }
    prev[item.kategori].nama.push(item.nama);
    prev[item.kategori].harga += item.harga;
    return prev;
}, {});

// Kemudian, kita loop untuk mencetak hasilnya
for (const kategori in pisahKtgTambah) {
  const barang = pisahKtgTambah[kategori];
  const listBarang = barang.nama.join(', ');
  const totalHarga = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(barang.harga);

  console.log(`Kategori: ${kategori}`);
  console.log(`Barang: ${listBarang}`);
  console.log(`Total Harga: ${totalHarga}\n`);
}

const produkElectronik = [
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 300000 },
  { nama: "Monitor", harga: 1200000 },
  { nama: "Webcam", harga: 500000 }
];

const findmaratus = produkElectronik.find(n => n.harga > 500000);
const cekharga = produkElectronik.some(n => n.harga < 100000);
console.log(findmaratus, cekharga);

const produkPc = [
  { nama: "SSD 256GB", kategori: "Storage", harga: 550000 },
  { nama: "HDD 1TB", kategori: "Storage", harga: 750000 },
  { nama: "RAM 8GB", kategori: "Memory", harga: 400000 },
  { nama: "RAM 16GB", kategori: "Memory", harga: 800000 },
  { nama: "Mouse Wireless", kategori: "Peripheral", harga: 200000 },
  { nama: "Keyboard RGB", kategori: "Peripheral", harga: 300000 },
  { nama: "Monitor 24 inch", kategori: "Display", harga: 1300000 }
];

const tampilmaratus = produkPc.filter(n => n.harga > 500000).map(n => n.nama);
const findOtak = produkPc.find(n => n.kategori === "Memory");
const cekKatLap = produkPc.some(n => n.kategori === "Laptop");
console.log(tampilmaratus, findOtak, cekKatLap);

const kodePromo = [
  "HEMAT50",
  "diskon10",
  "GRATISONGKIR",
  "save20",
  "CASHBACK5"
];
const displaykapital = kodePromo.filter(str => str === str.toUpperCase());
const displayAngka = kodePromo.filter(str => /\d/.test(str));
const hurufkecil = kodePromo.map(str => str.toLowerCase());
console.log(displaykapital);
console.log(displayAngka);
console.log(hurufkecil);

const dataAngka = [1, 3, 3, 5, 1, 7, 5];
const unik = [...new Set(dataAngka)];
console.log(unik);

function cekduplikat(array){
    const setArray = new Set(array)

    return setArray.size !== array.length
}
console.log(cekduplikat(dataAngka));


const kontakTelepon = new Map();

kontakTelepon.set("Rafa", "08123456789");
kontakTelepon.set("Santi", "08567890123");
kontakTelepon.set("Andi", "08789012345");

const namaYangDicari = "Rafa"
const nomorTeleponRafa = kontakTelepon.get(namaYangDicari);

console.log(`Nomor telepon ${namaYangDicari} adalah: ${nomorTeleponRafa}`);
// Output: Nomor telepon Rafa adalah: 08123456789

function prosesAmba(arrAng, operasiHit){
    return arrAng.map(operasiHit)
}

function kaliDua(n) {
  return n * 2;
}

const liathasil = prosesAmba([1, 2, 3] , kaliDua)
console.log(liathasil)

function olehAngkaBertahap(arr, f1, f2){
    const prosesF1 = arr.map(f1);
    const hasilF2 = prosesF1.map(f2);
    return hasilF2
}

function tambahSatu(n) {
  return n + 1;
}

function kuadrat(n) {
  return n * n;
}

const seehasil = olehAngkaBertahap([1, 2, 3], tambahSatu, kuadrat);
// Proses:
// [1,2,3] → tambahSatu → [2,3,4] → kuadrat → [4,9,16]

console.log(seehasil); // [4, 9, 16]

function hitungHargaAkhir(Mo, disc, tax) {
  const hitDisc = Mo.map(harga => harga * (1 - disc)); // Diskon 20% (0.2)
  const hitTax = hitDisc.map(harga => harga * (1 + tax)); // Pajak 12% (0.12)
  
  // Bulatkan setiap angka di dalam array agar tidak ada koma
  return hitTax.map(harga => Math.round(harga)); 
}

const Mo = [100000, 200000];
const disc = 0.20; // 20%
const tax = 0.12; // 12%

const hargaAkhir = hitungHargaAkhir(Mo, disc, tax);

console.log(hargaAkhir); // Output: [89600, 179200];

const transaksiHidup = [
  { id: 1, jenis: "makanan", total: 25000 },
  { id: 2, jenis: "minuman", total: 10000 },
  { id: 3, jenis: "makanan", total: 30000 },
  { id: 4, jenis: "elektronik", total: 100000 },
  { id: 5, jenis: "makanan", total: 15000 },
  { id: 6, jenis: "minuman", total: 8000 }
];

const filterTransaksi = transaksiHidup.filter(t => t.total > 20000);
const totHidup = transaksiHidup.reduce((prev, next) => prev + next.total, 0);
const totmakan = transaksiHidup.filter(item => item.jenis === "makanan").map(item => item.total).reduce((prev,next) => prev + next, 0);
const daftarTransaksi = transaksiHidup.map(item => {
    return `Transaksi ${item.id} - ${item.jenis} - Total: Rp ${item.total}`
});
// Menampilkan semua hasil ke konsol
console.log("Transaksi dengan total di atas 20000:", filterTransaksi);
console.log("Total pengeluaran keseluruhan:", totHidup);
console.log("Total pengeluaran makanan:", totmakan);
console.log(daftarTransaksi);

const mySetup = [
  { nama: "Mouse Gaming", harga: 150000, kategori: "Elektronik" },
  { nama: "Kaos Polos", harga: 50000, kategori: "Fashion" },
  { nama: "Keyboard Mechanical", harga: 350000, kategori: "Elektronik" },
  { nama: "Celana Pendek", harga: 65000, kategori: "Fashion" },
  { nama: "Charger HP", harga: 80000, kategori: "Elektronik" },
];

const filterElektronik = mySetup.filter(item => item.kategori === "Elektronik");
const ArrtoString = filterElektronik.map(produk => {
    return `Nama: ${produk.nama}, Harga: Rp ${produk.harga}`
});
const findUpBudget = mySetup.find(produk => {
    const hasil = produk.harga > 300000
    return hasil
})

console.log(filterElektronik);
console.log(ArrtoString);
console.log(findUpBudget);

const users = [
  { nama: "Rafa", online: true, umur: 17 },
  { nama: "Dito", online: false, umur: 18 },
  { nama: "Zahra", online: true, umur: 16 },
  { nama: "Bima", online: false, umur: 19 },
  { nama: "Tari", online: true, umur: 17 }
];

const userOnline = users.filter(user => user.online);
const formatOnline = userOnline.map(user => {
    return `Nama: ${user.nama}, Umur: ${user.umur}`
})
console.log(userOnline)
const findUnderSeventh = userOnline.find(user => user.umur < 17);
console.log(findUnderSeventh)
const hitungUmurUsersAdult = userOnline.filter((user) => user.umur > 16).length;
console.log(hitungUmurUsersAdult);

// TODO: Isi logika filter agar hanya angka genap yang tersisa
const angkarandom = [1, 4, 7, 10, 13, 16, 19];

const filtergenap = angkarandom.filter(n => n % 2 === 0);
console.log(filtergenap);
const filterganjil = angkarandom.filter(n => n % 2 !== 0);
console.log(filterganjil);

const angkaonetofive = [1, 2, 3, 4, 5];
const kalitiga = angkaonetofive.map(n => n * 3);
console.log(kalitiga);

const belanja = [
  { nama: "Buku", harga: 25000 },
  { nama: "Pulpen", harga: 5000 },
  { nama: "Tas", harga: 150000 },
  { nama: "Penggaris", harga: 7000 }
];

const hitungHargaTotal = belanja.reduce((prev, next) => prev + next.harga, 0);
const formatMataUang = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
});
console.log(formatMataUang.format(hitungHargaTotal));

const belanjaKeperluanSekolah = [
  { nama: "Buku", harga: 25000, jumlah: 2 },
  { nama: "Pensil", harga: 5000, jumlah: 5 },
  { nama: "Penggaris", harga: 7000, jumlah: 1 }
];
const hargaKaliJumlah = belanjaKeperluanSekolah.reduce((prev, next) => prev + next.harga * next.jumlah, 0);
console.log(formatMataUang.format(hargaKaliJumlah));

const products = [
  { name: "Laptop", price: 8500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 20 },
  { name: "Keyboard", price: 300000, stock: 10 },
  { name: "Monitor", price: 2000000, stock: 2 },
  { name: "USB Cable", price: 50000, stock: 50 }
];

// Ambil hanya produk yang harganya di bawah 1 juta.
const undersatujt = products.filter(p => p.price < 1000000);
const totalbarangUnderSatujeti = undersatujt.reduce((prev, next) => prev + next.price * next.stock, 0);
const daftarBarang = undersatujt.map(p => p.name);

const result = {
        daftar: daftarBarang,
        total: totalbarangUnderSatujeti
    }

    console.log(result);

const prodToUppercase = undersatujt.map(p => p.name.toUpperCase());
const sortFormCheap = undersatujt.sort((a, b) => a.price - b.price);
console.log(prodToUppercase)
console.log(sortFormCheap)

console.table(sortFormCheap.map(p => ({
    Nama : p.name.toUpperCase(),
    Harga : p.price,
    Stok : p.stock
})));

const StockProductUp10 = undersatujt.filter(p => p.stock > 10);
const hargaUnder500 = StockProductUp10.filter(p => p.price < 500000).length;
console.log(hargaUnder500); 


const aproducts = [
  { name: "Laptop", price: 7500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 50 },
  { name: "Keyboard", price: 300000, stock: 0 },
  { name: "Monitor", price: 2000000, stock: 7 },
  { name: "USB Cable", price: 50000, stock: 100 }
];

const filterStock = aproducts.filter(p => p.stock > 5).map(p => p.name.toUpperCase());
console.table(filterStock);

const sortFromAffordable = aproducts.filter(p => p.stock > 5).sort((a, b) => a.price - b.price).map(p => ({
    Nama : p.name.toUpperCase(),
    Harga : p.price
}));
console.log(sortFromAffordable);

const bproducts = [
  { name: "Laptop", price: 7500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 50 },
  { name: "Keyboard", price: 300000, stock: 0 },
  { name: "Monitor", price: 2000000, stock: 7 },
  { name: "USB Cable", price: 50000, stock: 100 }
];

const stockEven5 = bproducts.filter(p => p.stock > 5);
const sortStock = stockEven5.sort((a, b) => a.price - b.price);
const stockToupper = sortStock.map(p => ({
    Nama : p.name.toUpperCase(),
    Harga : formatMataUang.format(p.price)
}));
const costTotalProduct = stockEven5.reduce((prev, next) => prev + next.price, 0);
console.table(stockToupper);
console.log(formatMataUang.format(costTotalProduct));

const studentss = [
  { name: "Rafa", score: 85 },
  { name: "Dito", score: 72 },
  { name: "Zahra", score: 90 },
  { name: "Bima", score: 65 },
  { name: "Tari", score: 78 }
];

const filterLolos = studentss.filter(s => s.score >= 80);
const namasiswaUP = filterLolos.map(n => n.name.toUpperCase());
console.log(namasiswaUP);

const productTierS = [
  { name: "Laptop", price: 7500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 50 },
  { name: "Keyboard", price: 300000, stock: 0 },
  { name: "Monitor", price: 2000000, stock: 7 },
  { name: "USB Cable", price: 50000, stock: 100 }
];

const productfilterstock = productTierS.filter(item => item.stock > 5);
const formatItem = productfilterstock.map(item => ({
    productName : item.name.toUpperCase(), price : item.price
}));
const sortItemfromcheap = formatItem.sort((a, b) => a.price - b.price);
console.log(sortItemfromcheap);

const orders = [
  { customer: "Rafa", total: 7500000, status: "completed" },
  { customer: "Dito", total: 150000, status: "pending" },
  { customer: "Zahra", total: 2000000, status: "completed" },
  { customer: "Bima", total: 500000, status: "completed" },
  { customer: "Tari", total: 300000, status: "pending" }
];

const orderList = orders.filter(stats => stats.status === "completed").map(cust => ({
    customer: cust.customer.toUpperCase(), total : cust.total
})).sort((a, b) => a.total - b.total);
const totalOrder = orderList.reduce((prev, next) => prev + next.total, 0);

console.log(orderList);
console.log(formatMataUang.format(totalOrder));

const studentsPeler = [
  { name: "Rafa", score: 80 },
  { name: "Dito", score: 65 },
  { name: "Zahra", score: 90 },
  { name: "Bima", score: 70 },
  { name: "Tari", score: 75 }
];

const filterNilai = studentsPeler.filter(n => n.score >= 75);
const nameToUppercase = filterNilai.map(p => p.name.toUpperCase());
const sortAtoZ = nameToUppercase.sort();
console.log(sortAtoZ);

const productsAnjay = [
  { name: "Laptop", price: 7500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 50 },
  { name: "Keyboard", price: 300000, stock: 0 },
  { name: "Monitor", price: 2000000, stock: 7 },
  { name: "USB Cable", price: 50000, stock: 100 }
];

// Menghitung total harga
const totalHarga = productsAnjay
  .filter(s => s.stock >= 0)
  .reduce((prev, next) => prev + next.price, 0);

// Mendapatkan array nama produk
const namaProduk = productsAnjay
  .filter(s => s.stock >= 0)
  .sort((a, b) => a.price - b.price)
  .map(n => n.name.toUpperCase());

console.log(totalHarga); // Output: 10000000
console.log(namaProduk); // Output: ["USB CABLE", "MOUSE", "KEYBOARD", "MONITOR", "LAPTOP"];

const numbers = [2, 5, 8, 13, 21, 34, 55];
const dispResult = numbers.filter(n => n > 10).map(n => n ** 2);
console.log(dispResult)

const productGatel = [
  { name: "Laptop", price: 7500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 50 },
  { name: "Keyboard", price: 300000, stock: 0 },
  { name: "Monitor", price: 2000000, stock: 7 },
  { name: "USB Cable", price: 50000, stock: 100 }
];

const displayResult = productGatel.filter(item => item.stock > 5).map(item => item.name.toUpperCase())
console.log(displayResult)

const opoiki = [
  { name: "Laptop", price: 7500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 50 },
  { name: "Keyboard", price: 300000, stock: 0 },
  { name: "Monitor", price: 2000000, stock: 7 },
  { name: "USB Cable", price: 50000, stock: 100 }
];

const displayReslt = opoiki.filter(item => item.stock > 5).map(item => ({
    name : item.name.toUpperCase(),
    total : item.price * item.stock
}));
console.table(displayReslt);

const numbars = [12, 5, 8, 130, 44, 2, 99];
const bigNumbars = numbars.filter(n => n > 10).map(n => n * 2);
console.log(bigNumbars);

const setup = [
  { name: "Laptop", price: 7500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 50 },
  { name: "Keyboard", price: 300000, stock: 0 },
  { name: "Monitor", price: 2000000, stock: 7 },
  { name: "USB Cable", price: 50000, stock: 100 }
];
const upercase = setup.map(n => n.name.toUpperCase());
const dislay = setup.filter(s => s.stock > 0).reduce((prev, next) => prev + (next.price * next.stock), 0);
console.log(formatMataUang.format(dislay));

const displek = setup.filter(s => s.stock > 0).sort((a, b) => a.price - b.price).slice(0,3);
console.log(displek)

displek.forEach(item => {
    console.log(`Nama: ${item.name.toUpperCase()}, Harga: ${formatMataUang.format(item.price)}, Stok: ${item.stock}`)
})

const resultsetup = setup.reduce((accumulator, currentItem) => {
  // Cek produk termahal
  if (currentItem.price > accumulator.mostExpensive.price) {
    accumulator.mostExpensive = currentItem;
  }

  // Cek produk dengan stok terbanyak
  if (currentItem.stock > accumulator.mostStocked.stock) {
    accumulator.mostStocked = currentItem;
  }

  return accumulator;
}, {
  mostExpensive: { price: -Infinity }, // Nilai awal untuk harga
  mostStocked: { stock: -Infinity }   // Nilai awal untuk stok
});

console.log("Produk Termahal:", resultsetup.mostExpensive.name);
console.log("Produk dengan Stok Terbanyak:", resultsetup.mostStocked.name);

const belanjaSembako = ["Beras", "Telur", "Minyak", "Gula"];

// 1. Tambahkan "Kopi" ke daftar belanja
belanjaSembako.push("Kopi");
console.log("Setelah menambah 'Kopi':", belanjaSembako);

// 2. Hapus item terakhir dari daftar belanja
belanjaSembako.pop();
console.log("Setelah menghapus item terakhir:", belanjaSembako);

// 3. Hapus "Minyak" dari daftar belanja
const indexMinyak = belanjaSembako.indexOf("Minyak");
if (indexMinyak !== -1) {
  belanjaSembako.splice(indexMinyak, 1);
}
console.log("Setelah menghapus 'Minyak':", belanjaSembako);

// 4. Ambil hanya dua item pertama ("Beras" dan "Telur") sebagai array baru
const belanjaPokok = belanjaSembako.slice(0, 2);
console.log("Daftar belanja pokok:", belanjaPokok);

let produkKorututara = [
  { nama: "Laptop", harga: 7500000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 300000 },
];

// add new product
function addNewProduct(produk, nama, harga) {
    const NewProduct = {
        nama: nama,
        harga: harga
    }
    produk.push(NewProduct);
    return produk;
}
console.log(addNewProduct(produkKorututara, "Monitor", 2000000));

// del mouse 
function deleteMouse(produk, nama){
    const index = produk.findIndex(item => item.nama === nama);
    if (index !== -1) {
        produk.splice(index, 1);
    }
    return produk
};
console.log(deleteMouse(produkKorututara, "Mouse"));

// 3. Ubah harga "Keyboard"
function UpdateHarga(produk, nama, Newharga){
    const findItem = produk.find(item => item.nama === nama);
    if (findItem) {
        findItem.harga = Newharga;
        }
    return produk
}
console.log(UpdateHarga(produkKorututara,"Keyboard",350000))

// display produk tanpa harga
const displayproduk = produkKorututara.map(n => n.nama)
console.log(displayproduk);

const studentscok = [
  { name: "Rina", score: 85 },
  { name: "Budi", score: 72 },
  { name: "Sari", score: 90 },
  { name: "Andi", score: 65 },
  { name: "Dewi", score: 78 },
];

const filterVal = studentscok.filter(vs => vs.score >= 75);
const getName = filterVal.map(std => std.name);
const sumScore = studentscok.reduce((prev, next) => prev + next.score, 0);
const avgScore = sumScore / studentscok.length;

function getTopStudents(data){
    if(data.length === 0){
        return null
    }
    const getSumAvg = data.reduce((prev, next) => {
         if(next.score > prev.score){
            return next;
         }else {
            return prev;
         }
    });
    return getSumAvg
}
const topStd = getTopStudents(studentscok);
console.log(topStd);

const studentsJnck = [
  { name: "Rina", score: 85 },
  { name: "Budi", score: 72 },
  { name: "Sari", score: 90 },
  { name: "Andi", score: 65 },
  { name: "Dewi", score: 78 },
];

function getGrade(data){
    switch(true){
        case(data.score >= 85 && data.score <= 100):
            return "A"
        case(data.score >= 70 && data.score <= 84):
            return "B"
        case(data.score >= 60 && data.score <= 69):
            return "C"
        case(data.score < 60):
            return "D"

        default :
            return "cannot giving grade's"
    };  
}

const giveGrade = studentsJnck.map(student => {
    return {
        ...student,
        grade : getGrade(student)
    };
});
console.log(giveGrade);

const howManyAgrades = giveGrade.filter(std => std.grade === "A").length;
console.log(howManyAgrades);

function groupByGrade(data) {
  const result = { A: [], B: [], C: [], D: [] };

  data.forEach(student => {
    const grade = student.grade;

    if(result[grade]){
       result[grade].push(student.name);
    }
  });

  return result;
}

const grouped = groupByGrade(giveGrade);
console.log(grouped);

const productDummy = [
  { name: "Laptop", price: 7500000, stock: 5 },
  { name: "Mouse", price: 150000, stock: 50 },
  { name: "Keyboard", price: 300000, stock: 0 },
  { name: "Monitor", price: 2000000, stock: 7 },
  { name: "USB Cable", price: 50000, stock: 100 }
];

function getOutOfStockProducts(products) {
  const outOfStock = products.filter(product => product.stock === 0);
  return outOfStock.map(product => product.name);
}

console.log(getOutOfStockProducts(productDummy)); // Output: ["Keyboard"]

function totalValueProducts(products) {
  return products.reduce((total, product) => {
    return total + (product.price * product.stock);
  }, 0);
}
console.log(totalValueProducts(productDummy)); // Output: 64000000

function getHighestPrice(product){
    const price = product.map(item => item.price);
    const highest = Math.max(...price);
    return product.find(item => item.price === highest).name;
}

console.log(getHighestPrice(productDummy)); // Output: "Laptop"

function getAvgprice(product){
    const total = product.reduce((sum, item) => sum + item.price, 0);
    return total / product.length;
}
console.log(getAvgprice(productDummy)); // Output: 2000000

function getProductStatus(products){
    const status = products.map(product => {
        return {
            name: product.name,
            status: product.stock > 0 ? "Available" : "Out of Stock"
        };
    });
    return status;
}

console.log(getProductStatus(productDummy));

function sortProductsByPrice(products) {
  return products.slice().sort((a, b) => b.price - a.price);
}

console.log(sortProductsByPrice(productDummy));

const siswaaa = [
  { nama: "Andi", kelas: "XII", nilai: 85, hadir: true },
  { nama: "Budi", kelas: "XI", nilai: 70, hadir: false },
  { nama: "Citra", kelas: "XII", nilai: 90, hadir: true },
  { nama: "Dewi", kelas: "XII", nilai: 60, hadir: true },
  { nama: "Eko", kelas: "XI", nilai: 95, hadir: true },
  { nama: "Fira", kelas: "XII", nilai: 78, hadir: false }
];

const formatFilter = siswaaa.filter(s => s.hadir && s.nilai >= 75 && s.kelas === "XII").map(s => ({
  nama: s.nama,
  nilai: s.nilai
}));
console.log(formatFilter);

const totalNilaiXII = siswaaa.filter(s => s.kelas === "XII").reduce((prev, next) => prev + next.nilai, 0);
console.log(totalNilaiXII);

const teman = ["Andi", "Budi", "Citra", "Dewi", "Eko", "Fira", "Gita", "Hadi", "Ina", "Joko"];

const salam = teman.map(nama => `Halo, ${nama}!`);
console.log(salam);

const filterNama = teman.filter(nama => nama.length > 4 );
console.log(filterNama);

const totalHuruf = teman.reduce((total, nama) => total + nama.length, 0);
console.log(totalHuruf);

const tasksplus = [
  { id: 1, title: "Belajar JavaScript", category: "coding", priority: "high", completed: false },
  { id: 2, title: "Baca buku", category: "belajar", priority: "medium", completed: true },
  { id: 3, title: "Olahraga", category: "kesehatan", priority: "high", completed: false },
  { id: 4, title: "Nonton film", category: "hiburan", priority: "low", completed: false },
  { id: 5, title: "Review kode", category: "coding", priority: "high", completed: true }
];

const taskincomplete = tasksplus.filter(task => !task.completed).map(task => {
    return {
        name: task.title,
        category: task.category,
        priority: task.priority
    }
});
console.log(taskincomplete);

const priorityHigh = tasksplus.filter(task => task.priority === "high").map(task => task.title);
console.log(priorityHigh);

const codingActive = tasksplus.filter(task => task.category === "coding" && !task.completed).map(task => task.title);
console.log(codingActive);

const titleTasks = tasksplus.map(task => task.title);
console.log(titleTasks);

const simpleTask = tasksplus.map(task => ({
  id: task.id,
  status: task.completed ? "Completed" : "In Progress"
}));
console.log(simpleTask);

const urgentTask = tasksplus.filter(task => task.priority === "high" && !task.completed).map(task => task.title);
console.log(urgentTask);

let daftarTugas = [
  { id: 1, deskripsi: "Belajar dasar JavaScript", selesai: false },
  { id: 2, deskripsi: "Latihan fungsi dan perulangan", selesai: true },
  { id: 3, deskripsi: "Membuat to-do list sederhana", selesai: false }
];

// Fungsi untuk menambahkan tugas dan memperbarui array
function tambahTugas(newTask) {
    // Mencari ID terakhir
    const idTerakhir = daftarTugas.length > 0
        ? Math.max(...daftarTugas.map(tugas => tugas.id))
        : 0;

    // Menghitung ID baru
    const idBaru = idTerakhir + 1;

    // Membuat objek tugas baru
    const tugasBaru = {
        id: idBaru,
        deskripsi: newTask,
        selesai: false
    };

    // Menambahkan tugas baru ke array dan mengupdate array global
    daftarTugas = [...daftarTugas, tugasBaru];
}

function tampilkanSemuaTugas(){
    daftarTugas.forEach((task, index) => {
        console.log(`Task ${index + 1}: ${task.deskripsi} [${task.selesai ? "Selesai" : "Belum Selesai"}]`);
    });
}

// Fungsi untuk menghapus tugas dan memperbarui array
function hapusTugas(id) {
    daftarTugas = daftarTugas.filter(task => task.id !== id);
}

// Fungsi untuk menandai tugas selesai dan memperbarui array
function tandaiSelesai(id) {
    const tugasDitemukan = daftarTugas.find(task => task.id === id);

    if (!tugasDitemukan) {
        console.log(`Tugas dengan ID ${id} tidak ditemukan.`);
        return; // Menghentikan eksekusi fungsi
    }

    daftarTugas = daftarTugas.map(task => {
        if (task.id === id) {
            return { ...task, selesai: true };
        }
        return task;
    });
}

function listTasks(status){
    return daftarTugas.filter(task => task.selesai === status);
}

// PENGGUNAAN
console.log("--- Daftar Tugas Awal ---");
console.log(daftarTugas);

console.log("\n--- Menampilkan Semua Tugas ---");
tampilkanSemuaTugas();

tambahTugas("Belajar Node.js");
console.log("\n--- Setelah Menambah Tugas Baru ---");
console.log(daftarTugas);

tandaiSelesai(1);
console.log("\n--- Setelah Menandai Tugas 1 Selesai ---");
console.log(daftarTugas);

hapusTugas(2);
console.log("\n--- Setelah Menghapus Tugas 2 ---");
console.log(daftarTugas);

console.log("\n--- Daftar Tugas yang Belum Selesai ---");
console.log(listTasks(false));

const dummyproduk = [
  { nama: "Buku Tulis", harga: 8000, kategori: "Alat Tulis", diskon: false },
  { nama: "Mouse Wireless", harga: 120000, kategori: "Elektronik", diskon: true },
  { nama: "Pensil 2B", harga: 3000, kategori: "Alat Tulis", diskon: false },
  { nama: "Snack Ring", harga: 7000, kategori: "Makanan", diskon: true },
  { nama: "Keyboard Mechanical", harga: 850000, kategori: "Elektronik", diskon: false },
  { nama: "Penghapus", harga: 2500, kategori: "Alat Tulis", diskon: false },
  { nama: "Minuman Soda", harga: 6000, kategori: "Makanan", diskon: true },
  { nama: "Power Bank 10000mAh", harga: 150000, kategori: "Elektronik", diskon: true },
  { nama: "Sticky Notes", harga: 12000, kategori: "Alat Tulis", diskon: true },
  { nama: "Chiki Balls", harga: 5000, kategori: "Makanan", diskon: false }
];

const filterPrice = dummyproduk.filter(item => item.harga < 50000);

const totalPrice = filterPrice.reduce((prev, next) => prev + next.harga, 0);
const avgPrice = totalPrice / filterPrice.length;

const groupedByCategory = dummyproduk.reduce((prev, next) => {
    if(!prev[next.kategori]){
        prev[next.kategori] = [];
    }
    prev[next.kategori].push(next);
    return prev;
}, {});

const addDiscount = filterPrice.map(item => {
    if(item.diskon){
        return {...item, hargaDiskon: item.harga * 10};
    }
    return {...item,hargaDiskon: item.harga};
})

console.log(filterPrice);
console.log(avgPrice);
console.log(groupedByCategory)
console.log(addDiscount);

// Narcissistic Number Checker
function narcissistic(value) {
  const digits = value.toString().split("").map(Number); // ← titik di sini
  const k = digits.length;
  const total = digits.reduce((sum, d) => sum + Math.pow(d, k), 0);
  return total === value;
}

console.log(narcissistic(153));   // true
console.log(narcissistic(1652));  // false
console.log(narcissistic(9474));  // true
console.log(narcissistic(1938));  // false

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"));
// Output: "Ths wbst s fr lsrs LL!"

// Vowel Counter
function getCount(str) {
  const vokal = ["a" , "i" ,"o" ,"u" , "e"];
  const chars = Array.from(str);
  let count = 0 ;
  
  for(let i = 0; i < chars.length; i++){
    if(vokal.includes(chars[i])){
      count++;
    }
  }
  return count;
}
console.log(getCount("abracadabra")); // 5  

// Unique In Order
function uniqeInOrder(iterable){
    let result = [];
    for(let item of iterable){
        if(result.length === 0 || result[result.length - 1] !== item){
            result.push(item);
        }
    }
    return result;
}
console.log(uniqeInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqeInOrder([1,2,2,3,3])); // [1, 2, 3]

/**
 * dnaStrand
 * ----------
 * Fungsi ini menerima sebuah string DNA,
 * lalu mengembalikan string komplemennya
 * berdasarkan aturan pasangan basa:
 * - A ↔ T
 * - C ↔ G
 *
 * @param {string} dna - String DNA yang berisi huruf 'A', 'T', 'C', atau 'G'
 * @returns {string} - String DNA komplemen
 *
 * Contoh:
 * dnaStrand("ATTGC") -> "TAACG"
 * dnaStrand("GTAT")  -> "CATA"
 */
function dnaStrand(dna){
  let result = ""
  for(const Huruf of dna){
    switch(true){
        case Huruf == 'A':
          result += 'T'
          break
        case Huruf == 'T':
          result += 'A'
          break
        case Huruf == 'C':
          result += 'G'
          break
        case Huruf == 'G':
          result += 'C'
          break
        default :
          return 'ambatublow'  // fallback jika ada karakter tidak valid
    }
  }
  return result
}

console.log(dnaStrand('CATA'))

/*mencoba menulis ulang fungsi yang sama tetapi dengan pendekatan yang berbeda */
function dnaStrandV2(dna){
  let result = ""
  for(const Huruf of dna){
    switch(Huruf){
        case 'A':
          result += 'T'
          break
        case 'T':
          result += 'A'
          break 
        case 'C':
          result += 'G'
          break
        case 'G':
          result += 'C'
          break
        default :
          return 'ambatubloww'
    }
  }
  return result
}

// Sum of two smallest numbers
function sumTwoSmallestNumbers(numbers) {  
  // Code here
  const sortFrSmall = numbers.sort((a,b) => a - b);
  const twoSmallestNum = sortFrSmall.slice(0, 2);
  const resultSum = twoSmallestNum[0] + twoSmallestNum[1];
  return resultSum
}

 /**
 * Fungsi untuk membentuk pola string dari input.
 * Setiap huruf akan ditulis:
 *  - huruf pertama: huruf besar
 *  - huruf setelahnya: huruf kecil diulang sesuai posisi index
 * Lalu semua hasil digabung dengan tanda "-".
 *
 * @param {string} s - String input (hanya huruf a..z atau A..Z)
 * @returns {string} - String hasil pola
 *
 * Contoh:
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 */
function accum(s) {
  const arrS = s.split("").reduce((prev, huruf, i) => {
    const format = huruf.toUpperCase() + huruf.toLowerCase().repeat(i);
    prev.push(format);
    return prev;
  }, []).join("-");

  return arrS;
}

//gpt version
function accum(s) {
	// your code
    return s.split('').reduce((prev, Huruf, i) => {
      const format = Huruf.toUpperCase() + Huruf.toLowerCase().repeat(i);
      prev.push(format);
      return prev;
    }, []).join('-')
  
}

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function solution (roman) {
  let total = 0 ;
  for (let i = 0; i < roman.length; i++) {
    const current = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (next && current < next) {
      // pola seperti IV, IX, XL → dikurangin
      total -= current;
    } else {
      // jika lebih besar atau sama → ditambahin
      total += current;
    }
  }
  return total;
}

console.log(solution("XXI")); // 21