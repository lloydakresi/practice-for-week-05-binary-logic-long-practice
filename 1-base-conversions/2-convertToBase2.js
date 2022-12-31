// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  // Your code here
  if (element.toString().indexOf("x") === 1){
    return hexToBin(element)
  }
  return convertToBin(element);
};

const convertToBin = element =>{
  let bin = [];

  while(element > 0){
    let binPart = (element % 2).toString();
    bin.push(binPart);
    element = Math.floor(element / 2);
  }
  rev = bin.reverse().join("");
  return "0b" + rev;

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

const hexToBin = element =>{
  let dec = hexTo10(element);
  let bin = convertToBin(dec);
  return bin;
}

console.log(convertToBin(256));



/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010

module.exports = convertToBin;
