export default function getListStudentIds(array) {
  let idArray = [];
  if (typeof array === 'object') {
    idArray = array.map((element) => element.id);
  }
  return idArray;
}
