const name = ['abigail', 'alexandra', 'alison', 'amanda','angela',
    'bella', 'carol','caroline', 'carolyn', 'deirdre', 'diana', 'elizabeth'
    , 'ella', 'faith', 'olivia', 'penelope']
    
function searchingName(key, maxOutput, callback) {
    let temp = []

    //digunakan untuk mengecek tiap value di name, dengan key
    name.map((value, index) => {
        temp[index] = value.match(key)
        if (temp[index] != null) {
            temp[index] = temp[index].input
        }
    })
    temp.sort()

    callback(temp, maxOutput)
}

searchingName("an", 4, (temp, maxOutput) => {
    let result = []

    //untuk menampilkan output dgn dibatasi max output
    temp.map((value, i) => {
        if (value !== null && i+1 <= maxOutput) {
            result[i] = value
        }
    })

    console.log(result)
})
