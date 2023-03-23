const today = new Date().toISOString()

function printDate() {
    console.log(today);
}

printDate();

function returnDate() {
    document.getElementById("retDate").innerHTML = today;
}