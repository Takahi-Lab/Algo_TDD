
function solve(n) {
  var words = []
  if (n % 2 === 0)
  words.push("fizz")
  if (n % 3 === 0)
  words.push("buzz")
  return words.join("")
}

module.exports.solve = solve
