//Function mencetak tanggal sekarang ketika dipanggil
function writetanggal () {
 const tanggal = new Date()
 console.log(tanggal)
}

//Function mengembalikan tanggal sekarang ketika dipanggil.
function returntanggal () {
 const tanggal = new Date
 return tanggal
}

const resultDate = returntanggal()
console.log(resultDate)