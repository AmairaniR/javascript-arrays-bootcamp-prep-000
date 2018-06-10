var chocolateBars = ["snickers", "hundered grand", "kitkat", "skittles"]

chocolateBars = [...chocolateBars, "crunch"]

function addElementToTheBeginningOfArray(cities, states) {
  var cities = ["Orlando", "Miami", "Chicago"];
  cities.unshift("Atlanta")
  return cities
}

function destructivelyAddElementToTheBeginningOfArray(cities, chips){
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