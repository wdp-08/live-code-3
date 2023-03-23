// writeCurrentDate()
function writeCurrentDate() {
  const currentDate = new Date(); // return 0 GMT
  console.log(currentDate);
}

// returnCurrentDate
function returnCurrentDate() {
  const currentDate = new Date();

  return currentDate;
}

const resultDate = returnCurrentDate();
console.log(resultDate);
