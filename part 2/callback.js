  
// Buatlah callback function untuk menghitung luas dan keliling lingkaran

// function hitung(r){
//   let phi
//   if (r % 7 === 0) {
//       phi = 22 / 7
//   } else {
//       phi = 3.14
//   }
//   let luas = phi * r * r
//   let keliling = 2 * phi * r
//   console.log('Luas = ' + luas)
//   console.log('Keliling = ' + keliling)
// }
// hitung(7)

// FUNGSI UTAMA
function hitung(r, callbackLuas, callbackKeliling){
    let phi
    if (r % 7 === 0) {
        phi = 22 / 7
    } else {
        phi = 3.14
    }
    callbackLuas(phi, r)
    callbackKeliling(phi, r)
  }
  
  // FUNGSI PEMBANTU
  function luas(phi, r){
    console.log("Menghitung Luas")
    let luas = phi * r * r
    console.log('Luas = ' + luas)
  }
  
  // FUNGSI PEMBANTU
  function keliling(phi, r){
   console.log("Menghitung Keliling")
   let keliling = 2 * phi * r
   console.log('Keliling = ' + keliling)
  }
  
  hitung(7, luas, keliling)
  
  function hitung(r, callbackLuas){
    let phi
    if (r % 7 === 0) {
        phi = 22 / 7
    } else {
        phi = 3.14
    }
    callbackLuas(phi, r)
  }
  
  hitung(7, (phi, r) => {
      const luas = phi * r * r
      let keliling = 2 * phi * r
      console.log(luas)
      console.log('Keliling = ' + keliling)
  })
  
  
  