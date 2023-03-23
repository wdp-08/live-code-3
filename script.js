function printCurrenDate(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String( currentDate.getMonth() + 1).padStart(2, '0');
    const day = currentDate.getFullYear();

}

const tanggal = new Date();
document.getElementById("tgl").innerHTML = tanggal;
console.log(tanggal);

const tanggal2 = new Date().getDate();
document.getElementById("tgl2").innerHTML = tanggal2;

console.log(getCurrendat());