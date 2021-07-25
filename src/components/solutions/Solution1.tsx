export default function Solution1() {
  const multipliers = [3, 5];
  const max = 1000;
  const multiples = new Set<number>();
  multipliers.forEach((multiplier, i) => {
    for (let n = 1; n < max / multiplier; n++) {
      multiples.add(multiplier * n);
    }
  });

  return [...multiples].reduce((n, multiple) => n + multiple);
}
