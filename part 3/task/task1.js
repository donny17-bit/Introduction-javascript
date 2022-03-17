const cehHariKerja = (day) => {
    return new Promise((resolve, result) => {
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

cehHariKerja("minggu").then((hari) => {
    console.log(hari)
}).catch((Error) => {
    console.log(Error)
}).finally(() => {
    console.log("proses telah selesai")
})

// async function cek() {
//     try {

//     } catch {

//     }
// }