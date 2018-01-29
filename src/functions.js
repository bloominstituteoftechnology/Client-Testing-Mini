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
};

module.exports = {
  addNums,
  callBackInvoker,
  iterator
};
