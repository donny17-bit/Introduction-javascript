const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja("senin").then((hari) => {
    console.log(hari)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("proses telah selesai")
})

// async function cekHari(day) {
//     try {
//         let result = await cekHariKerja(day)
//         console.log(result)
//     } catch(error) {
//         console.log(error)
//     }
// }

// cekHari("sabtu")