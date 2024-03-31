import { render } from '@testing-library/react';
import App from './App';
import { addComma, getNumberIntervals } from './utils';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('add comma for numbers', () => {
  expect(addComma('1234567')).toBe('1,234,567');
});

test('get overlap and not include', () => {
  expect(
    getNumberIntervals([
      [6, 11],
      [5, 8],
      [17, 20],
      [7, 7],
      [14, 17],
    ])
  ).toEqual({
    overlap: [
      [6, 8],
      [17, 17],
    ],
    notInclude: [
      [0, 4],
      [12, 13],
    ],
  });
});

// test('addComma for numbers', () => {
//   expect(addComma('1234567')).toBe('1,234,567');
// });
