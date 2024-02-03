function celsius_to_fahrenheit(temp) {
  let far = temp * (9 / 5) + 32;
  return {far,temp};
}
const result = celsius_to_fahrenheit(0);
console.log(`The conversion of ${result.temp} degree celsius into fahrenheit is: ${result.far}`);
