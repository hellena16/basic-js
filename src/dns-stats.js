const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  domains.filter((i) => {
    let arr = i.split('.').reverse()
    for (let i = 0; i < arr.length; i++) {
      let doms = '.' + arr.slice(0, i + 1).join('.')
     if (obj.hasOwnProperty(doms)) {
        obj[doms]++
      } else {
        obj[doms] = 1
      }
    }
  })
  return obj
}

module.exports = {
  getDNSStats
};
