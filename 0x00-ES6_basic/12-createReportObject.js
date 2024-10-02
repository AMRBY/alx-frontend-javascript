export default function createReportObject(employeesList) {
  const object = {
    getNumberOfDepartments: (list) => Object.keys(list).length,
    allEmployees: employeesList,
  };
  return object;
}
