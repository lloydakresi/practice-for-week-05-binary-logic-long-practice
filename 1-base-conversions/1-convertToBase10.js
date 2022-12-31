// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  if (str.indexOf("b") === 1){
    return binaryTo10(str);
  } else{
    return hexTo10(str);
  }

};

const binaryTo10 = str =>{
  let split = str.split("b");
  let binaryStr = split[1];
  let length = binaryStr.length;
  let dec = 0;

  for (let i = length - 1; i >= 0; i--){
    dec += (2**(length - 1 - i)) * parseInt(binaryStr[i]);
  }

  return dec;
}

const hexTo10 = str =>{
  let split = str.split("x");
  let hexStr = split[1];
  let length = hexStr.length;
  let dec = 0;

  for (let i = length - 1; i >= 0 ; i--){
    let ele = hexStr[i];
    if (ele === "a") ele = 10;
    if (ele === "b") ele = 11;
    if (ele === "c") ele = 12;
    if (ele === "d") ele = 13;
    if (ele === "e") ele = 14;
    if (ele === "f") ele = 15;
    let partSum = ((16**(length - i - 1)) * parseInt(ele));
    dec += partSum;

  }

  return dec;

}

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914

module.exports = hexTo10;
