const tbod = document.querySelector("tbody");
const studentList = {};

// Modified data set for student table
passData(jsonArray);
function passData(jsonArray) {
  for (data in jsonArray) {
    const dataSet = {
      stuId: jsonArray[data]["id"],
      studentName: `${jsonArray[data]["first_name"]} ${jsonArray[data]["last_name"]}`,
      fullname: `<img
                    src="${jsonArray[data]["img_src"]}"
                    alt="student-image"
                  /> ${jsonArray[data]["first_name"]} ${jsonArray[data]["last_name"]}`,
      gender: jsonArray[data]["gender"],
      class: jsonArray[data]["class"],
      marks: jsonArray[data]["marks"],
      passing: jsonArray[data]["passing"] ? "Passed" : "Failed",
      email: jsonArray[data]["email"],
      city: jsonArray[data]["city"],
    };
    studentList[dataSet.stuId] = dataSet;
  }
  // console.log(studentList);
}

// student details printing function
function printStudentDetails(studentInfo) {
  for (property in studentInfo) {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.className = "center-text";

    const fullname = document.createElement("td");
    const gender = document.createElement("td");
    const classs = document.createElement("td");
    const mark = document.createElement("td");
    const passing = document.createElement("td");
    const mail = document.createElement("td");
    const cities = document.createElement("td");

    tdId.innerText = studentList[property]["stuId"];
    fullname.innerHTML = studentList[property]["fullname"];
    gender.innerText = studentList[property]["gender"];
    classs.innerText = studentList[property]["class"];
    mark.innerText = studentList[property]["marks"];
    passing.innerText = studentList[property]["passing"];
    mail.innerText = studentList[property]["email"];
    cities.innerText = studentList[property]["city"];

    tr.append(tdId, fullname, gender, classs, mark, passing, mail, cities);
    tbod.appendChild(tr);
  }
}

printStudentDetails(studentList);

// const buttons objects
const ascendBtn = document.getElementById("ascending-btn");
const descendBtn = document.getElementById("descending-btn");
const marksBtn = document.getElementById("mark-btn");
const passingBtn = document.getElementById("passing-btn");
const classBtn = document.getElementById("class-btn");
const genderBtn = document.getElementById("gender-btn");
// Event zone

// sorted array value printing function
function newDetails(keys) {
  keys.forEach((key) => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    tdId.className = "center-text";
    const student = studentList[key];
    tdId.innerText = student["stuId"];

    // Create other td elements and set their innerText as before
    const fullname = document.createElement("td");
    fullname.innerHTML = student["fullname"];
    const gender = document.createElement("td");
    gender.innerText = student["gender"];
    const classs = document.createElement("td");
    classs.innerText = student["class"];
    const mark = document.createElement("td");
    mark.innerText = student["marks"];
    const passing = document.createElement("td");
    passing.innerText = student["passing"];
    const mail = document.createElement("td");
    mail.innerText = student["email"];
    const cities = document.createElement("td");
    cities.innerText = student["city"];

    // Append all td elements to the tr
    tr.append(tdId, fullname, gender, classs, mark, passing, mail, cities);
    tbod.appendChild(tr);
  });
}
// Ascending order
ascendBtn.addEventListener("click", (e) => {
  tbod.innerHTML = "";
  const keys = Object.keys(studentList);

  keys.sort((a, b) => {
    const fullnameA = studentList[a]["studentName"].toLowerCase();
    const fullnameB = studentList[b]["studentName"].toLowerCase();
    if (fullnameA < fullnameB) {
      return -1;
    }
    if (fullnameA > fullnameB) {
      return 1;
    }
    return 0;
  });

  newDetails(keys);
});

// Descending order
descendBtn.addEventListener("click", (e) => {
  tbod.innerHTML = "";
  const keys = Object.keys(studentList);

  keys.sort((a, b) => {
    const fullnameA = studentList[a]["studentName"].toLowerCase();
    const fullnameB = studentList[b]["studentName"].toLowerCase();
    if (fullnameA < fullnameB) {
      return 1;
    }
    if (fullnameA > fullnameB) {
      return -1;
    }
    return 0;
  });

  newDetails(keys);
});

// marks ascending order
marksBtn.addEventListener("click", (e) => {
  tbod.innerHTML = "";
  const keys = Object.keys(studentList);

  keys.sort((a, b) => {
    const fullnameA = studentList[a]["marks"];
    const fullnameB = studentList[b]["marks"];
    if (fullnameA < fullnameB) {
      return -1;
    }
    if (fullnameA > fullnameB) {
      return 1;
    }
    return 0;
  });

  newDetails(keys);
});

//
passingBtn.addEventListener("click", (e) => {
  tbod.innerHTML = "";
  const keys = Object.keys(studentList);

  keys.sort((a, b) => {
    const fullnameA = studentList[a]["passing"].toLowerCase();
    const fullnameB = studentList[b]["passing"].toLowerCase();
    if (fullnameA < fullnameB) {
      return 1;
    }
    if (fullnameA > fullnameB) {
      return -1;
    }
    return 0;
  });

  newDetails(keys);
});
//
classBtn.addEventListener("click", (e) => {
  tbod.innerHTML = "";
  const keys = Object.keys(studentList);

  keys.sort((a, b) => {
    const fullnameA = studentList[a]["class"];
    const fullnameB = studentList[b]["class"];
    if (fullnameA < fullnameB) {
      return -1;
    }
    if (fullnameA > fullnameB) {
      return 1;
    }
    return 0;
  });

  newDetails(keys);
});
// gender ascending order
genderBtn.addEventListener("click", (e) => {
  tbod.innerHTML = "";
  const keys = Object.keys(studentList);

  keys.sort((a, b) => {
    const fullnameA = studentList[a]["gender"].toLowerCase();
    const fullnameB = studentList[b]["gender"].toLowerCase();
    if (fullnameA < fullnameB) {
      return -1;
    }
    if (fullnameA > fullnameB) {
      return 1;
    }
    return 0;
  });

  newDetails(keys);
});

// Search Event Handler
const searchBox = document.getElementById("search-box");

searchBox.addEventListener("input", (e) => {
  tbod.innerHTML = "";
  const searchVal = e.currentTarget.value;
  console.log(searchVal);
  debugger;
  let keys = Object.keys(studentList);
  keys = keys.filter((a) => {
    let compareStr = `${studentList[a]["studentName"]} ${studentList[a]["email"]}`;
    return compareStr.toLowerCase().includes(searchVal.toLowerCase());
  });

  newDetails(keys);
});