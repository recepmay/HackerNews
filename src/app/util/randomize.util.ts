export function getRandomizedRange(length: number): [number, number] {
  const range = Math.floor(Math.random() * (length - 10));
  return [range, range + 10];
}
