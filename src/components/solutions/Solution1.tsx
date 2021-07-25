// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

import { sort } from '../../util/numeric';

export default function Solution1() {
  const multipliers = [3, 5]; // must be sorted
  const max = 1000;
  const multiples = new Set<number>();
  const maxN = max / multipliers[multipliers.length - 1];
  for (let n = 1; n < maxN; n++) {
    multipliers.forEach(multiplier => multiples.add(multiplier * n));
  }

  return sort([...multiples]).join(' ');
}
