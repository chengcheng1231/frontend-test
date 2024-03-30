const addComma = (number) => {
  // type of number is string
  // \B is a non-word boundary, for example, the boundary between a number and a non-number in a string
  // \d{3} matches exactly three digits
  // ?= is a positive lookahead
  // ?! is a negative lookahead
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
