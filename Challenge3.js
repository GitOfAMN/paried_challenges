function addTwo(num) {
    return num + 2;
  }
  
  function map(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(callback(array[i]));
    }
    return newArr;
  }
  
  
  console.log(map([1, 2, 3], addTwo));