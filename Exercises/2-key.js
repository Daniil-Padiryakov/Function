'use strict';

const generateKey = (length, possible) => {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += possible[Math.floor(Math.random() * (possible.length - 1))];
  }
  return str;
};

module.exports = { generateKey };
