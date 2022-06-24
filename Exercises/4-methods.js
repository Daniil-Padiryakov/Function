'use strict';

const methods = (iface) => {

  const arr = [];
  for (const ifaceKey in iface) {
    const arr1 = [];
    arr1.push(ifaceKey);
    arr1.push(iface[ifaceKey].length);
    arr.push(arr1);
  }
  return arr;
};

module.exports = { methods };
