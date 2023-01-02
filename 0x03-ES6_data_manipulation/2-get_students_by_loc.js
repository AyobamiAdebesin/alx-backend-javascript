export default function getStudentsByLocation(objArray, city) {
  return (objArray.filter((element) => element.location === city));
}
