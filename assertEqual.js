const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

assertEqual("panda", "panda");
assertEqual(1, 5);
assertEqual(45, 45);
assertEqual("Hi", "How are you?");