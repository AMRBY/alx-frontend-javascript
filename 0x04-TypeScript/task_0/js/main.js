var student1 = { firstName: "Amr", lastName: "BY", age: 35, location: "Casa" };
var student2 = { firstName: "Youssef", lastName: "BQ", age: 34, location: "Kech" };
var studentsList = [student1, student2];
var root = document.getElementById("app");
var table = document.createElement("table");
root.appendChild(table);
for (var i = 0; i < studentsList.length; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.innerText = studentsList[i].firstName;
    tr.appendChild(td);
    var td1 = document.createElement('td');
    td1.innerText = studentsList[i].location;
    tr.appendChild(td1);
}
