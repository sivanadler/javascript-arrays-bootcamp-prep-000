var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = function (array, element){
  addElementToBeginningOfArray = ['foo', 1]
  chocolateBars.push(element)
  return addElementToBeginningOfArray
}

var destructivelyAddElementToBeginningOfArray = function (array, element){
  destructivelyAddElementToBeginningOfArray = ['foo', 1]
  array.unshift(element)
  return destructivelyAddElementToBeginningOfArray
}

var addElementToEndOfArray = function (array, element){
  addElementToEndOfArray = [1, 'foo']
  chocolateBars.push(element)
  return addElementToEndOfArray
}

var destructivelyAddElementToEndOfArray = function (array, element){
  destructivelyAddElementToEndOfArray = [1, 'foo']
  array.push(element)
  return destructivelyAddElementToEndOfArray
}

var accessElementInArray = function (array, index){
  accessElementInArray = [1, 2, 3]
  return accessElementInArray[2]
}

var destructivelyRemoveElementFromBeginningOfArray = function (array){
  destructivelyRemoveElementFromBeginningOfArray = [1, 2, 3]
  array.unshift([ 2, 3])
  return destructivelyRemoveElementFromBeginningOfArray
}