const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // Your code here
  let arr = str.split("");
  bitArr = [];
  arr.forEach((ele, i) =>{
    let dec = str.charCodeAt(i);
    let bin = convertToBin(dec);
    let bit = addZeros(bin, 8);
    bitArr.push(bit);
  })
  return bitArr.join("");
};

const convertToBin = element =>{
  let bin = [];

  while(element > 0){
    let binPart = (element % 2).toString();
    bin.push(binPart);
    element = Math.floor(element / 2);
  }
  rev = bin.reverse().join("");
  return rev;

}

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
