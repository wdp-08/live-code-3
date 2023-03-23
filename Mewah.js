// Kerjakan Soal - Soal dibawah ini dalam bentuk live code:
// Buatlah sebuah function.
// Function tersebut akan mencetak tanggal sekarang ketika dipanggil.
// Buatlah function berikutnya.
// Function tersebut memberikan tanggal sekarang ketika dipanggil.
// Cetaklah hasil dari function tersebut.
// Buatlah pseudocode dan programnya!

// writeCurrentDate()
function writeCurrentDate() {
  const currentDate = new Date(); // return 0 GMT
  console.log(currentDate);
}

// returnCurrentDate
function returnCurrentDate() {
  const currentDate = new Date();

  return currentDate;
}

const resultDate = returnCurrentDate();
console.log(resultDate);
