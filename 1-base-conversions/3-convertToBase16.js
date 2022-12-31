// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here
  if (element.toString().indexOf("b") === 1){
    return binToHex(element)
  }
  return decToHex(element);

};

const decToHex = element =>{
  let bin = [];

  while(element > 0){
    let binPart = (element % 16).toString();
    if (binPart === "10") binPart = "a";
    if (binPart === "11") binPart = "b";
    if (binPart === "12") binPart = "c";
    if (binPart === "13") binPart = "d";
    if (binPart === "14") binPart = "e";
    if (binPart === "15") binPart = "f";
    bin.push(binPart);
    element = Math.floor(element / 16);
  }
  rev = bin.reverse().join("");
  return "0x" + rev;
}

const binToDec = element =>{
  let split = element.split("b");
  let binaryStr = split[1];
  let length = binaryStr.length;
  let dec = 0;

  for (let i = length - 1; i >= 0; i--){
    dec += (2**(length - 1 - i)) * parseInt(binaryStr[i]);
  }

  return dec;
}

const binToHex = element =>{
  let dec = binToDec(element);
  let hex = decToHex(dec);
  return hex;
}
/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
