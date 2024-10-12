export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (typeof weakMap.get(endpoint) === 'undefined') {
    weakMap.set(endpoint, 0);
  }
  let num = weakMap.get(endpoint);
  num += 1;
  weakMap.set(endpoint, num);
  if (num >= 5) {
    throw new Error('Endpoint load is high');
  }
  return weakMap;
}
