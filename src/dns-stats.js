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
  const dnsParts = {};

  domains.forEach(domain => {
    domain.split('.')
      .reverse()
      .reduce((dns, domainPart) => {
        const part = `${dns}.${domainPart}`;
        part in dnsParts ? dnsParts[part] += 1 : dnsParts[part] = 1;
        return part;
      }, '')
  });

  return dnsParts;
}
    
module.exports = {
  getDNSStats
};
