var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () { return 'Working from home'; };
    Director.prototype.getCoffeeBreak = function () { return 'Getting a coffee break'; };
    Director.prototype.workDirectorTasks = function () { return 'Getting to director tasks'; };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () { return 'Cannot Work from home'; };
    Teacher.prototype.getCoffeeBreak = function () { return 'Cannot have a break'; };
    Teacher.prototype.workTeacherTasks = function () { return 'Getting to work'; };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        console.log('Teaching Math');
    }
    else {
        console.log('Teaching History');
    }
}
teachClass('Math');
//Teaching Math
teachClass('History');
//Teaching History
executeWork(createEmployee(200));
//Getting to work
executeWork(createEmployee(1000));
//Getting to director tasks
console.log(createEmployee(200));
//Teacher
console.log(createEmployee(1000));
//Director
console.log(createEmployee('$500'));
//Director
