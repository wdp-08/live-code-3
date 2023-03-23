function getDate(){
    const date = new Date();
    console.log('Tanggal Sekarang', date);
}

getDate();

function returDate(){
    const date = new Date();
    return date;
}
const date= returDate();
console.log('return tanggal sekarang', date)