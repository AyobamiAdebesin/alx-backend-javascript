const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((parametro) => (parametro !== undefined ? parametro.startsWith(startString) : ''))
    .map((parametro) => (parametro !== undefined ? parametro.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;

// export default function cleanSet(setObj, startString) {
//   let outString = '';
//   if (startString === undefined || startString.length === 0) {
//     return '';
//   }
//   if (typeof (startString) !== 'string') {
//     return '';
//   }
//   for (const x of setObj) {
//     if (x.startsWith(startString)) {
//       outString += `${x.split(startString)[1]}-`;
//     }
//   }
//   return outString.slice(0, outString.length - 1);
// }
