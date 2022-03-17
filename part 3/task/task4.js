fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((user) => {
    user.map((value) => {
        console.log(value.name)
    })
}).catch((error) => {
    console.log(error)
})

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json();
// }, (error) => {
//     console.log(error) // ini untuk apa?
// }).then((user) => {
//     user.map((value) => {
//         console.log(value.name)
//     })
// })