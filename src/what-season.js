const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }
  try {
    date.getTimezoneOffset()
  } catch {
    throw new Error('Invalid date!')
  }
  const getMonth = date.getMonth()
  if (getMonth === 11 || getMonth === 0 || getMonth === 1) {
    return 'winter'
  }
  if (getMonth > 1 && getMonth < 5) {
    return 'spring'
  }
  if (getMonth > 4 && getMonth < 8) {
    return 'summer'
  }
  if (getMonth > 7 && getMonth < 11) {
    return 'autumn'
  }
}

module.exports = {
  getSeason,
}
