export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((k, v) => {
      if (k === 1) {
        map.set(v, 100);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
}
