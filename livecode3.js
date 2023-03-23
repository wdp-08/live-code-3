//  Buatlah sebuah function.
//  Function tersebut akan mencetak tanggal sekarang ketika dipanggil.

function today() {
    const date = new Date();
    console.log(date.getDate());
}
today()
//  Buatlah function berikutnya.
//  Function tersebut memberikan tanggal sekarang ketika dipanggil.

function today1() {
    const date = new Date();
    return date.getDate();
}
//  Cetaklah hasil dari function tersebut.
console.log(today1());