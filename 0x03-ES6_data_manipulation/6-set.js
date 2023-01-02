export default function setFromArray(objArray) {
  const setObj = new Set();
  for (const x of Object.values(objArray)) {
    setObj.add(x);
  }
  return setObj;
}
