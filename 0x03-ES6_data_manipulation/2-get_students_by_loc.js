export default function getStudentsByLocation(array, city) {
  const cityArray = array.filter((element) => element.location === city);
  return cityArray;
}
