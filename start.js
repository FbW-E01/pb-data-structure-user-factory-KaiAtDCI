const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];


function createUser(id = 'Unknown',
                    fullName = 'Unknown',
                    initials = 'Unknown',
                    birthYear = 'Unknown',
                    departments = 'Unknown') {
  return { id, fullName, initials, birthYear, departments }
}


function createUserList(rawData) {
  const users = [];
  rawData.forEach(data => {
    const userData = data.split(',');
    const user = {
      id: userData[0],
      fullName: userData[1],
      initials: extractInitials(userData[1]),
      birthYear: userData[2],
      departments: userData[3],
    }
    users.push(user);
  });
  return users;
}

function extractInitials(arg) {
  const names = arg.split(" ");
  if (names[0] === '') return "Unknown";
  let initials = "";
  names.forEach(name => initials += name[0].toUpperCase())
  return initials;
}

function extractDepartments(data) {

  const departments = [];

  data.forEach(dataRow => {
    const dataRowArray = dataRow.split(',');
    const lastElement = dataRowArray[dataRowArray.length-1];
    const assignmentEntry = lastElement.split('|');
    assignmentEntry.forEach(department => {
      if (departments.indexOf(department) === -1) departments.push(department);
    })
  })
  return departments.sort();
}

console.log(createUserList(userDataDump));
console.log(extractDepartments(userDataDump));
