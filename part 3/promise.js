// const getData = () => {
//     const data = []
//     if (data.length > 0) {
//         return data
//     } else {
//         return new Error("Data tidak ada !")
//     }
// }
// console.log(getData())

// without function
// const getData = new Promise((resolve, reject) => {
//     const data = []
//     if (data.length > 0) {
//         // return data
//         resolve(data)
//     } else {
//         // return new Error("Data tidak ada !")
//         reject(new Error("Data tidak ada !"))
//     }
// })
// getData

// with function
const getData = () => new Promise((resolve, reject) => {
    const data = []
    if (data.length > 0) {
        // return data
        resolve(data)
    } else {
        // return new Error("Data tidak ada !")
        reject(new Error("Data tidak ada !"))
    }
})

getData().then((result) => {
    console.log(result)
    result.map(item => console.log(item))
}).catch((error) => {
    console.log(error)
})

