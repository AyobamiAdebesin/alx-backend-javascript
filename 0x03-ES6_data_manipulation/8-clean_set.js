export default function cleanSet(setObj, startString) {
  let outString = '';
  for (const x of setObj) {
    if (x.startsWith(startString)) {
      outString += `${x.split(startString)[1]}-`;
    }
  }
  return outString;
}
