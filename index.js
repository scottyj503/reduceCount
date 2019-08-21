
const reducer = (accum, val) => {
  accum[val] = 1 + accum[val] || 1;
  return accum;
};

const reduceCount = (arry) => {
  return arry.reduce((reducer),{});
};

export default reduceCount;
