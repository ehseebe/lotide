
const flatten = function(messyArr) {
   var flattenedArr = [];
   messyArr.forEach(flatten)
   function flatten (item) {
     if (Array.isArray(item)) {
        return item.forEach(flatten);
     }
     return flattenedArr.push(item);
   }
   return flattenedArr;
}

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10]));