export default function getStudentsByLocation(objArray, city) {
  return (objArray.filter((element) => {return element.location === city}));
}
