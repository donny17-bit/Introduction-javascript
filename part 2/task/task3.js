function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    let temp
    let result = []

    // pengecekkan parameter terpenuhi atau tidak
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        temp = []
        dataArray.map((value, index) => {
            if (value > nilaiAwal && value < nilaiAkhir) {
                temp[index] = value
                temp.sort((a,b) => a - b)
            }
        })

        //pengecekkan temp kosong apa tidak/
        if (temp != undefined) {
            temp.map((value, i) => { //berguna untuk memasukkan ke array result
                result[i] = value
            })
        } else {
            return console.log("Nilai tidak ditemukan")
        }

        return console.log(result)

    } else if (nilaiAwal > nilaiAkhir) {
        return console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (dataArray.length <= 5){
        return console.log("Jumlah angka dalam array harus lebih dari 5")
    } else {
        return console.log("masukkan berupa angka")
    }
}

seleksiNilai(3, 10, [1,11,12,19, 20, 2])
