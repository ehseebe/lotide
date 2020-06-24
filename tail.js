const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

const str = tail([1]);
assertEqual(str.length, 2); // ensure we get back two elements
assertEqual(str[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(str[1], "Labs"); // ensure second element is "Labs"
assertEqual(str.length, 0)

/*
const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, []); // original array should still have 3 elements!
*/