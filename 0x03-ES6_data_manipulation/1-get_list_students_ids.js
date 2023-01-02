export default function getListStudentsIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }

  return (objArray.map((x) => x.id));
}
