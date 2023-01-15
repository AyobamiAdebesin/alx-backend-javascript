interface Student {
    firstName: string,
    lastName: string,
    age: number
    location: string,
};

const user1 : Student = {
    firstName: 'Ayobami',
    lastName: 'Adebesin',
    age: 20,
    location: 'Lagos',
}

const user2: Student = {
    firstName: 'Olaseni',
    lastName: 'Adebesin',
    age: 25,
    location: 'Ife',
}

const studentsArray : Array<Student> = [ user1, user2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
table.append(thead);

studentsArray.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);