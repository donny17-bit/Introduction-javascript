const mtk = 90
const bahasaIndonesia = 70
const bahasaInggris = 90
const ipa = 69
let rerata

if (typeof mtk == "number" && typeof bahasaIndonesia == "number" 
&& typeof bahasaInggris == "number" && typeof ipa == "number") 
{
    rerata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4 
    if (rerata > 89) {
        console.log("rata - rata :" + rerata)
        console.log("Grade : A")
    } else if (rerata > 79) {
        console.log("rata - rata :" + rerata)
        console.log("Grade : B")
    } else if (rerata > 69) {
        console.log("rata - rata :" + rerata)
        console.log("Grade : C")
    } else if (rerata > 59) {
        console.log("rata - rata :" + rerata)
        console.log("Grade : D")
    } else {
        console.log("rata - rata :" + rerata)
        console.log("Grade : E")
    }
} else {
    console.log("Salah satu nilai belum terisi")
}