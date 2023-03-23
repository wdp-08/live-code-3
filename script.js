function dateCurrent() {
    const dateNow = new Date();
    console.log("Tanggal hari ini: " + dateNow);
  }

  dateCurrent();


function dateCurrent2() {
    const dateNow = new Date();
    return dateNow;
  }

  console.log("Tanggal hari ini: " + dateCurrent2());