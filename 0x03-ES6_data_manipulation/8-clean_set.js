export default function cleanSet(setObj, startString) {
  let outString = '';
  if (startString === '') {
    return '';
  }
  for (const x of setObj) {
    if (x.startsWith(startString)) {
      outString += `${x.split(startString)[1]}-`;
    }
  }
  return outString;
}
