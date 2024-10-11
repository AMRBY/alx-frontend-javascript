interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: "Amr", lastName: "BY", age: 35, location: "Casa" };
const student2: Student = { firstName: "Youssef", lastName: "BQ", age: 34, location: "Kech" };

const studentsList: Student[] = [student1, student2];

var root = document.getElementById("app");
const table = document.createElement("table");
root.appendChild(table);
for (let i = 0; i < studentsList.length; i++) {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  const td = document.createElement('td');
  td.innerText = studentsList[i].firstName;
  tr.appendChild(td);
  const td1 = document.createElement('td');
  td1.innerText = studentsList[i].location;
  tr.appendChild(td1);
}
