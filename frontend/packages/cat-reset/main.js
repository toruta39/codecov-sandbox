exports.add = function add(a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    throw Error('parameters have to be number')  
  }

  if (isNaN(a) || isNaN(b)) {
    throw Error('NaN is not allowed')
  }

  return a + b
}
