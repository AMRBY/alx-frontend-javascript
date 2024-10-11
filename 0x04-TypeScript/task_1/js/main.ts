interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: boolean | string | number | undefined;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`; 
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student{
   firstName: string;
   lastName: string;
   constructor(firstName: string, lastName: string){
     this.firstName = firstName;
     this.lastName = lastName;
   }
   workOnHomework(): string {
     return 'Currently working';
   }
   displayName(): string {
     return `${this.firstName}`;
   }
}

console.log(printTeacher("Amr", "DUPOND"))

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
