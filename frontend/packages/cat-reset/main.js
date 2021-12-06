exports.add = function add(a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    throw Error('parameters have to be number')  
  }

  return a + b
}
