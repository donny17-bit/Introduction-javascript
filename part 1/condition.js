// if (1 !== "1") {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Truthy = true | 1 | angka selain 0 | "string yang terisi"
// Falsy = false | 0 | "" | null | undefined | NaN
const data = NaN
if (data) {
    console.log(true)
} else {
    console.log(false)
}

// untuk pengecekkan array if(data.length > 0)
// untuk pengecekkan object if(data.name)
// untuk pengecekkan NaN if(isNaN(data))