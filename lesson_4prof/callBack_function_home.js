const stringF = (str, callBackF) => {
  let new_str = "";
  for (let i = 0; i < str.length; i++) {
    new_str += callBackF(str[i]);
  }
  return new_str;
};

const aA = (a) => (a === "a" ? "A" : a);

const oO = (o) => (o === "o" || o === "a" ? "*" : o);

const iI = (i) => (i === "i" ? 1 : i);

console.log(stringF("The London is a capital of Great Britane", aA));
console.log(stringF("The London is a capital of Great Britane", oO));
console.log(stringF("The London is a capital of Great Britane", iI));

const nums = [4, 1, 15, 77];
const mulNums = [];

for (let i = 0; i < nums.length; i++) {
  mulNums.push(nums[i] * 10);
}

const mulNums_forEach =[]
nums.forEach(el => mulNums_forEach.push(el * 10))

console.log(mulNums);
console.log(mulNums_forEach)


const arr = [1, -2, 4, 5, -7]
const positive_arr = []

for (let i = 0; i < arr.length; i++) {
  if(arr[i] > 0) positive_arr.push(arr[i])
  
}

const positive_arr_forEach = []
arr.forEach(xEl => xEl > 0 ? positive_arr_forEach.push(xEl) : '')

// arr.forEach(x => {
//   if(x >0){
//   positive_arr_forEach.push(x)
// }
// });


console.log(positive_arr)
console.log(positive_arr_forEach)

