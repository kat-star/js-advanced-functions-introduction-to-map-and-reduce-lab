// Your code here
function mapToNegativize(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * -1)
  }
  return newArr;
}

function mapToNoChange(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i])
  }
  return newArr;
}

function mapToDouble(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * 2)
  }
  return newArr;
}

function mapToSquare(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] ** 2)
  }
  return newArr;
}

function reduceToTotal(sourceArray, startingPoint) {
  let newCollection = sourceArray;
  let result = startingPoint

  if (!startingPoint) {
    result = sourceArray[0];
    newCollection = sourceArray.slice(1);
  }

  for (let i = 0; i < newCollection.length; i++) {
    result = result + newCollection[i]
  }
  return result;
}

function reduceToAllTrue(sourceArray) {
  let result = true;

  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false;
    }
  }
  return result;
}

function reduceToAnyTrue(sourceArray) {
  let result = false;

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      return true;
    }
  }
  return result;
}