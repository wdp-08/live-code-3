//- Buatlah sebuah function.
//- Function tersebut akan mencetak tanggal sekarang ketika dipanggil.

function printDate() {
  console.log(new Date().toDateString());
}

printDate();

function returnDate() {
  return new Date().toDateString();
}

console.log(returnDate());