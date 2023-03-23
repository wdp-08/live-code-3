//Cetak tanggal
function dateNow() {
    array_bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    date = new Date();
    tanggal = date.getDate();
    bulan = date.getMonth();
    tahun = date.getFullYear();
    jam = date.getHours();
    menit = date.getMinutes();
    detik = date.getSeconds();

    const tampil = tanggal + " " + array_bulan[bulan] + " " + tahun + " " + jam + ":" + menit + ":" + detik
    console.log(tampil);
}

dateNow()

//Return date
function returnDateNow(){
    const date = new Date();
    return date;
}
return returnDateNow()