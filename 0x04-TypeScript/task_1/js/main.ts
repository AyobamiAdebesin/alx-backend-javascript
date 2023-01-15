interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [attrName: string]: any,
}

// Extending the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number,
}

// Creating interface for a function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
// Function implementing the interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}.${lastName}`;
}

// Implementing an interface for the StudentClass
interface StudentClassInterface {
    workOnHomeWork(): string,
    displayName(): string,
}

// Creating a StudentClass that implements the interface
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

