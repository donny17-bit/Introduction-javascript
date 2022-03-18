const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// then catch
// cekHariKerja("senin")
//   .then((hari) => {
//     //then digunakan untuk menangkap resolve pada promise function
//     console.log(`${hari} merupakan hari kerja);
//   })
//   .catch((error) => {
//     //catch digunakan untuk menangkap reject pada promise function
//     console.log(error);
//   })
//   .finally(() => {
//     //finally akan menampilkan bahwa proses diatas telah selesai
//     console.log("proses telah selesai");
//   });

// try catch
async function cekHari(day) {
  // try digunakan untuk pengecekkan apakah terjadi error atau tidak
  try {
    let result = await cekHariKerja(day); //await akan menunggu untuk function cekHariKerja sepenuhnya selesai
    console.log(`${result} merupakan hari kerja`);
  } catch (error) {
    // catch akan menangkap error yang terjadi di blok try
    console.log(error);
  }
}

cekHari("senin");
