export default function getListStudentIds(array) {
  let idArray = [];
  if (Array.isArray(array)) {
    idArray = array.map((element) => element.id);
  }
  return idArray;
}
