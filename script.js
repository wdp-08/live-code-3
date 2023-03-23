//mencetak tanggal sekarang
function printCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate);
  }

//mengembalikan tanggal sekarang ketika dipanggil
  function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toLocaleDateString();
  }

console.log(getCurrentDate());
