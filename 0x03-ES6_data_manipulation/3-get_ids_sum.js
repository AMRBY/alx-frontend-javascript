export default function getStudentIdsSum(array) {
  const sumId = array.reduce((sum, current) => sum + current.id, 0);
  return sumId;
}
