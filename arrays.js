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

var fruits = ["banana", "blueberry", "kiwi"]

function addElementToEndOfArray(fruits, vegetables) {
  fruits = [...fruits, "foo"]
  return fruits
}

function destructivelyAddElementToEndOfArray(fruits, condiments) {
  fruits.push("foo")
  return fruits
}