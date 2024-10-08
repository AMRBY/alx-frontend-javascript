export default function updateStudentGradeByCity(array, city, grades) {
  /* eslint-disable no-param-reassign */
  const cityArray = array.filter((element) => element.location === city);
  const gradeArray = cityArray.map((element) => {
    const gradeById = grades.filter((grad) => grad.studentId === element.id);
    if (gradeById.length !== 0) {
      element.grade = gradeById[0].grade;
    } else {
      element.grad = 'N/A';
    }
    return element;
  });
  return gradeArray;
}
