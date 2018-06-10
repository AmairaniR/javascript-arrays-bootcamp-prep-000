var chocolateBars = ["snickers", "hundered grand", "kitkat", "skittles"]

chocolateBars = [...chocolateBars, "crunch"]

var cities = ["Orlando", "Miami", "Chicago"];

function addElementToBeginningOfArray(cities, states) {
  cities = ["foo", ...cities]
  return cities
}

function destructivelyAddElementToBeginningOfArray(cities, chips){
  cities.unshift("foo")
  return cities
}

function addElementToEndOfArray(fruits, vegetables) {
  var fruits = ["banana", "blueberry", "kiwi"]
  fruits = [...cities, "orange"]
  return fruits
}

function destructivelyAddElementToEndOfArray(fruits, condiments) {
  fruits.push("strawberry")
  return fruits
}