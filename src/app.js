// q-1
const removeElement = (arr, val) => {
  let newArr = arr.filter((ele) => {
    return ele !== val;
  });
  return newArr;
};
let arr = [3, 2, 2, 3];
let val = 3;
let demo = removeElement(arr, val);
console.log(demo, 'demo');
console.log(removeElement([30, 20, 33, 10, 10, 30], 30));

//q-2
const checkPalindrome = (...x) => {
  if (x.join('') === x.reverse().join('')) {
    return true;
  } else {
    return false;
  }
};
console.log(checkPalindrome(1, 2, 1), 'res');

//q3
const calCulateSum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
let total = calCulateSum([10, 20, 30, 40, 50]);
console.log(total);

//q4
const isPalindrome = (str) => {
  const res = str.split('').reverse().join('');
  if (res === str) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isPalindrome('nun');

//q5
const reverseArr = (arr) => {
  return arr.reverse();
};
console.log(reverseArr([10, 20, 30]), 'reverseArray');

// q-6
const removeDuplicate = (arr) => {
  return arr.filter((ele, index, arr) => {
    return arr.indexOf(ele) !== index;
  });
};
console.log(removeDuplicate([10, 20, 10, 30, 20, 30]), 'duplicate');

//q-8
const isPrime = (arr) => {
  return arr.filter((ele) => {
    return ele % 2 === 1;
  });
};
console.log(isPrime([10, 7, 2, 3, 5, 10, 1]), 'prime');

//q10
const sortNumber = (arr) => {
  return arr.sort();
};

console.log(sortNumber([10, 2, 5, 3, 1, 7]), 'sort');

//q-11

//q13
const findIndex = (arr, target) => {
  let indexs = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indexs.push(arr.indexOf(arr[i]));
    }
  }
  return indexs;
};
console.log(findIndex([10, 20, 20, 30, 30, 30], 20), 'index');

//q15

const removeDuplicateCharacter = (str) => {
  let arr = str.split('');
  let dup = arr.filter((ele, index, arr) => {
    return arr.indexOf(ele) == index;
  });
  return dup.join('');
};
console.log(removeDuplicateCharacter('hello'));
