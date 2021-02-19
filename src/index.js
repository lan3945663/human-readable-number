module.exports = function toReadable(number) {
  let res = '' 
  let hundreds = '';
  let dozens = '';
  let units = ''

  let dictionary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }

  if(number === 0) {
    return 'zero'
  }

  const rem_100 = number % 100;
  const rem_10 = number % 10;

  let temp = number;

  if(temp > rem_100 && rem_100 !== 0) {
    const quot = (temp - rem_100) / 100;

    hundreds += `${dictionary[quot]} hundred `;
    temp -= quot * 100;
  }

  if(rem_100 === 0) {
    const quot = temp / 100;
    hundreds += `${dictionary[quot]} hundred`;

    return hundreds
  }

  if(temp > rem_10 && rem_10 !== 0) {

    if(temp < 20) {
      dozens += `${dictionary[temp]}`;

      res = `${hundreds}${dozens}`;
      return res
    } else {
      const remDozens = temp - rem_10;
      temp = temp - remDozens;

      dozens += `${dictionary[remDozens]} `;
    }
  }

  if(rem_10 === 0) {
    res = `${hundreds}${dictionary[temp]}`;
  } else {
    units = dictionary[temp];
    res = `${hundreds}${dozens}${units}`;
  }

  return res
}