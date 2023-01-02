export default function updateStudentGradeByCity(objArray, city, newGrades) {
  const arr = objArray.filter((element) => element.location === city);

  const arr1 = arr.map((element) => {
    for (const x of Object.keys(newGrades)) {
      if (element.id === newGrades[x].studentId) {
        const output = { grade: newGrades[x].grade };
      } else {
        const output = { grade: 'N/A' };
      }
    }
    return output;
  });
  return arr1;
}
