const addNums = (x, y) => {
  return x + y;
};

const callBackInvoker = cb => {
  return cb();
};

const iterator = (num, cb) => {
  for (let i = 1; i <= num; i++) {
    cb();
  }
  const each = (array, cb) => {
    for (let i = 0; 1 < array.length; i++) {
      cb(array)
    }
  }
};

module.exports = {
  addNums,
  callBackInvoker,
  iterator
};
