const printSegitiga = 10
let hasil

if (typeof printSegitiga == "number") {
    for (let i = 0; i <= printSegitiga; i++) {
        hasil = ""
        for (let l = 1; l <= printSegitiga - i; l++) {
            hasil = hasil + " " + l
        }
        console.log(hasil)
    }
} else {    
    console.log("Masukkan berupa angka")
}

