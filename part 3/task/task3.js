// // program 1 daftar nama murid SDN 
// const cekHarga = (nama) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const daftarSiswa = ["agus", "mulyadi", "lucif", "lala", "samsudin",
//                                 "angelika", "poo", "cindy", "kitou"]
//             let cek = daftarSiswa.find((value) => {
//                 return value === nama
//             })
//             if(cek) {
//                 resolve(cek) 
//             } else {
//                 reject(new Error(`${nama} bukan merupakan siswa SDN`))
//             }
//         }, 2000)
//     })
// }

// cekHarga("lala").then((name) => {
//     console.log(`${name} merupakan siswa SDN`)
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("proses selesai")
// })

// program 2 volume tabung
function volume(r, tinggi) {
    return new Promise((resolve, reject) => {
        let phi
        if (r % 7) {
            phi = 22/7
        } else {
            phi = 3.14
        }

        let volumTabung = phi*r*r*tinggi
        
        if(volumTabung) {
            resolve(volumTabung)
        } else {
            reject(new Error("Terdapat error"))
        }
    })
}

async function cekVolume(r, tinggi) {
    try {
        let result = await volume(r, tinggi)
        console.log(`volume tabung adalah : ${result}`)
    } catch (error) {
        console.log(error)
    }
}

cekVolume(2, 100)