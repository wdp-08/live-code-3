function getDateNow(){
    const date = new Date();
    console.log('Tanggal Sekarang', date);
}

getDateNow();

function returDateNow(){
    const date = new Date();
    return date;
}
const dateNow = returDateNow();
console.log('return tanggal sekarang', dateNow)