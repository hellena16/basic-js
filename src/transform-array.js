const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  const newArr = []
  arr.filter((item, index) => {
    if (
      item == '--double-next' ||
      item == '--double-prev' ||
      item === '--discard-next' ||
      item == '--discard-prev'
    ) {
      if (item === '--discard-next') {
        arr.splice(index, 2)
      }
      if (item === '--double-next') {
        if (index + 1 < arr.length) {
          newArr.push(arr[index + 1])
        }
      }
      if (item == '--double-prev') {
        if (index > 0) {
          newArr.push(arr[index - 1])
        }
      }
      if (item == '--discard-prev') {
        if (index > 0) {
          newArr.pop()
        }
      }
    } else {
      newArr.push(item)
    }
  })
  return newArr
}

module.exports = {
  transform,
}
