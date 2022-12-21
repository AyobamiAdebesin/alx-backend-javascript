export default function createEmployeesObject(departmentName, employees){
    
    var employeeDatabaseObject = {
        [`${departmentName}`]: employees
    };
    return employeeDatabaseObject;
}
