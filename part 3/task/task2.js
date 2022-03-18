const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "januari",
      "februari",
      "maret",
      "april",
      "mei",
      "juni",
      "juli",
      "agustus",
      "september",
      "oktober",
      "november",
      "desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data not found"), []);
    }
  }, 4000);
};

function showMonth(isError, month) {
  if (!isError) {
    month.map((value) => {
      console.log(value);
    });
  } else {
    console.log(isError);
  }
}

getMonth(showMonth);
