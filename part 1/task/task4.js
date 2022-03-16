let data = {
    id : 1,
    name  : "Leanne Graham", 
    username : "Bret",
    email : "Sincere@april.biz",
    address : 
    {
        street : "Kulaz Light",
        suite : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3874",
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org",
}


// data = {...data, ...{name : "donny"}, ...{email: "doniwahyu14@gmail.com"}, ...{hobby : "gaming"}}
data = { ...data, name : "donny", email : "doniwahyu14@gmail.com", hobby : "gaming, watch anime, watch movies"}

let {city, street} = data.address

console.log(data)
