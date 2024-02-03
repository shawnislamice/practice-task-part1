const today = new Date();
console.log(today);
const date = new Date("10-01-2002");
console.log(date);
console.log(date.getMonth());
const specificDate = new Date(2091, 0, 26);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString("en-GB"));
//Unix Epoch : compare between dates

console.log(today.getTime());
console.log(date.getTime());
console.log(specificDate.getTime());
console.log(specificDate.getTime() - today.getTime());
console.log(specificDate.getTime() - date.getTime());
//Moment JS

