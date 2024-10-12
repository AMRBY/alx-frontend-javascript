export default function cleanSet(set, startString) {
  const len = startString.length;
  let values = '';
  if (len !== 0) {
    for (const value of set) {
      if (startString === value.slice(0, len)) {
        values += value.slice(len, value.length).concat('-');
      }
    }
  }
  return values.slice(0, values.length - 1);
}
