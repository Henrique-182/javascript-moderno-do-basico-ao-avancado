const p1 = 1.0;
const p2 = Number('2.0');

console.log(p1, p2);
console.log(Number.isInteger(p1));
console.log(Number.isInteger(p2));

const a1 = 9.871;
const a2 = 6.871;

const total = (a1 * p1) + (a2 * p2);
const media = total / (p1 + p2);

console.log(media.toFixed(2));
console.log(media.toString(2));
console.log(typeof media);
