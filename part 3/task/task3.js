// program 1 harga pecel lele
const cekHarga = (harga) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = () => {
                if(harga > 50000) {
                    console.log("Mahal")
                } else if(harga > 20000) {
                    console.log("Sedang")
                } else {
                    console.log("Murah")
                }
            }
            if(result) {
                resolve(result)
            } else {
                reject(new Error("Input bukan harga pecel lele"))
            }
        }, 2000)
    })
}

cekHarga(10000).then((harga) => {
    console.log(harga)
}).catch((error) => {
    console.error();
}).finally(() => {
    console.log("proses selesai")
})