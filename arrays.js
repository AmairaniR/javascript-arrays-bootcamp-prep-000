var chocolateBars = ["snickers", "hundered grand", "kitkat", "skittles"]

chocolateBars = [...chocolateBars, "crunch"]

var cities = ["Orlando", "Miami", "Chicago"];

function addElementToTheBeginningOfArray(cities, states) {
  cities = ["Albany", ...cities]
  return cities
}

function destructivelyAddElementToTheBeginningOfArray(cities, chips){
  cities.unshift("Atlanta")
  cities = ["Albany", ...cities]
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