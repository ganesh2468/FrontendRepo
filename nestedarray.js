const checker = (array1, array2) => {
  if (Math.min(...array1) > Math.min(...array2) && Math.max(...array1) < Math.max(...array2)) {
    return true;
  } 
  else 
    return false;
};

console.log(checker([1, 2, 3, 4], [0, 5]));
