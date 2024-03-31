// add comma to thousand separator
// type of number is string
const addComma = (number) => {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // \B is a non-word boundary, for example, the boundary between a number and a non-number in a string
  // \d{3} matches exactly three digits
  // ?= is a positive lookahead
  // ?! is a negative lookahead
};

// check overlap and notInclude from the intervals
// ○ function input : [[6, 11], [5, 8], [17, 20], [7, 7], [14,17]]
// ○ function output: { overlap: [[6, 8], [17, 17]], notInclude: [[0, 4], [12, 13]] }
const getNumberIntervals = (intervals) => {
  // initial result
  let result = {
    overlapNumbers: [],
    notIncludeNumbers: [],
  };

  // initial numbers
  let numbers = Array(21).fill(false);

  // check overlapNumbers and set numbers
  intervals.forEach((interval) => {
    let [start, end] = interval;
    for (let i = start; i <= end; i++) {
      if (numbers[i]) {
        if (!result.overlapNumbers.includes(i)) {
          result.overlapNumbers.push(i);
        }
      } else {
        numbers[i] = true;
      }
    }
  });

  // add notIncludeNumbers
  for (let i = 0; i < numbers.length; i++) {
    if (!result.overlapNumbers.includes(i) && !numbers[i]) {
      result.notIncludeNumbers.push(i);
    }
  }

  // convert to ranges
  const convertToRanges = (arr) =>
    arr.reduce((ranges, num, index, array) => {
      if (index === 0 || num !== array[index - 1] + 1) {
        ranges.push([num, num]);
      } else {
        ranges[ranges.length - 1][1] = num;
      }
      return ranges;
    }, []);

  return {
    overlap: convertToRanges(result.overlapNumbers),
    notInclude: convertToRanges(result.notIncludeNumbers),
  };
};

export { addComma, getNumberIntervals };
