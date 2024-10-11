interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  workFromHome(): string {return 'Working from home';}
  getCoffeeBreak(): string {return 'Getting a coffee break';}
  workDirectorTasks(): string {return 'Getting to director tasks';}
}
class Teacher implements TeacherInterface {
  workFromHome(): string {return 'Cannot Work from home';}
  getCoffeeBreak(): string {return 'Cannot have a break';}
  workTeacherTasks(): string {return 'Getting to work';}
}
function createEmployee(salary: string | number): Teacher | Director {
  if (typeof salary === 'number' && salary < 500){
    return new Teacher;
  }
  return new Director;
}

function isDirector(employee: unknown): employee is Director {
  return employee instanceof Director;
}
function executeWork(employee){
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

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
