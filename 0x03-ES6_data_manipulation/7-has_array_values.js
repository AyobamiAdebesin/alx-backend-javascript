export default function hasValuesFromArray(setObj, arr) {
  const trueFalseArr = [];
  for (const x of arr) {
    if (setObj.has(x)) {
      trueFalseArr.push(true);
    } else {
      trueFalseArr.push(false);
    }
  }
  if (trueFalseArr.includes(false)) {
    return false;
  }
  return true;
}
