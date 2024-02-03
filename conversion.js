//12 Inch to 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetRemainder = inch % 12;
  const feetNumber = parseInt(feetFraction);
  return { feetRemainder, feetNumber };
}
const myHeight = inchToFeet(12);
console.log(`Your height in feet: ${myHeight} feet`);
const myHeight2 = inchToFeet2(24);
console.log(
  `Your height in feet: ${myHeight2.feetNumber} feet and ${myHeight2.feetRemainder} inch`
);

function milesToKm(mile) {
  const km = miles * 1.60934;
  return km;
}
