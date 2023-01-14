export default function updateUniqueItems(mapObj) {
  if (!(mapObj instanceof Map)) {
    throw new Error('Cannot process');
  }
  const newMap = new Map();
  for (const [key, value] of mapObj.entries()) {
    if (value === 1) {
      mapObj.set(key, 100);
    }
  }
  return newMap;
}
