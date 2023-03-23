function getDateNow(){
    const date = new Date();
    console.log('Tanggal Sekarang', date);
}

getDateNow();

function returDateNow(){
    const date = new Date();
    return date;
}

function format_date(date) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const dateTemp = new Date(date);
    return dateTemp.toLocaleDateString("id-ID", options);
}

const dateNow = format_date(returDateNow());
console.log('return tanggal sekarang', dateNow)