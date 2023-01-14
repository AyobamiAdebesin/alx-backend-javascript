export default function cleanSet(setObj, startString) {
  let outString = '';
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  if (typeof (startString) !== 'string') {
    return '';
  }
  return [...set]
    .filter((parametro) => (parametro !== undefined ? parametro.startsWith(startString) : ''))
    .map((parametro) => (parametro !== undefined ? parametro.slice(startString.length) : ''))
    .join('-');
};
