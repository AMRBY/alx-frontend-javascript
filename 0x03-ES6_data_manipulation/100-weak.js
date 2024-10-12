export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (typeof weakMap.get(endpoint) === 'undefined') {
    weakMap.set(endpoint, 0);
  }
  let num = weakMap.get(endpoint);
  if (num >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    num += 1;
    weakMap.set(endpoint, num);
    return weakMap;
  }
}
