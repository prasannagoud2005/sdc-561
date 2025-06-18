let studentList = [];

const routes = {
  home: `<div class="text-center"><h1>Welcome to Student Management System</h1><p>Manage student data easily.</p></div>`,

  add: `
    <h3>Add Student</h3>
    <form onsubmit="addStudent(event)">
      <input id="studentNumber" class="form-control mb-2" placeholder="Student Number" required />
      <input id="firstName" class="form-control mb-2" placeholder="First Name" required />
      <input id="lastName" class="form-control mb-2" placeholder="Last Name" required />
      <input id="email" class="form-control mb-2" placeholder="Email" required />
      <input id="field" class="form-control mb-2" placeholder="Field of Study" required />
      <input id="gpa" class="form-control mb-2" placeholder="GPA" type="number" step="0.01" required />
      <button class="btn btn-success">Add Student</button>
    </form>`,

  students: `
    <h3>All Students</h3>
    <table class="table table-bordered table-striped">
      <thead><tr>
        <th>Number</th><th>First</th><th>Last</th><th>Email</th><th>Field</th><th>GPA</th><th>Actions</th>
      </tr></thead>
      <tbody id="studentTableBody"></tbody>
    </table>`,

  login: `
    <h3>Login</h3>
    <form onsubmit="login(event)">
      <input id="loginEmail" class="form-control mb-2" placeholder="Email" required />
      <input id="loginPassword" class="form-control mb-2" placeholder="Password" type="password" required />
      <button class="btn btn-primary">Login</button>
    </form>`,

  contact: `
    <h3>Contact Us</h3>
    <p>Email: support@studentsystem.com</p>
    <p>Phone: +123 456 7890</p>`,

  about: `
    <h3>About</h3>
    <p>This Student Management System is a demo web application built using HTML, CSS, and JavaScript.</p>`
};

function navigate(page) {
  document.getElementById("app").innerHTML = routes[page] || "<p>Page not found</p>";
  if (page === "students") renderStudentTable();
}

function addStudent(e) {
  e.preventDefault();
  const student = {
    number: document.getElementById("studentNumber").value,
    first: document.getElementById("firstName").value,
    last: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    field: document.getElementById("field").value,
    gpa: document.getElementById("gpa").value,
  };
  studentList.push(student);
  saveToStorage();
  navigate("students");
}

function renderStudentTable() {
  const tbody = document.getElementById("studentTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  studentList.forEach((s, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${s.number}</td><td>${s.first}</td><td>${s.last}</td><td>${s.email}</td>
        <td>${s.field}</td><td>${s.gpa}</td>
        <td>
          <button onclick="deleteStudent(${i})" class="btn btn-sm btn-danger">Delete</button>
        </td>
      </tr>`;
  });
}


function deleteStudent(index) {
  studentList.splice(index, 1);
  saveToStorage();
  renderStudentTable();
}
register: `
  <h3>Register</h3>
  <form onsubmit="register(event)">
    <input id="regName" class="form-control mb-2" placeholder="Student Name" required />
    <input id="regField" class="form-control mb-2" placeholder="Field of Study" required />
    <input id="regPassword" class="form-control mb-2" type="password" placeholder="New Password" required />
    <input id="regConfirm" class="form-control mb-2" type="password" placeholder="Re-enter Password" required />
    <button class="btn btn-success">Register</button>
  </form>`

  function register(e) {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const field = document.getElementById("regField").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;
  
    if (!name || !field || !password || !confirm) {
      alert("Please fill out all fields.");
      return;
    }
  
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }
  
    const passwordValid = validatePassword(password);
    if (!passwordValid.valid) {
      alert("Password error: " + passwordValid.message);
      return;
    }
  
    alert(`Registration successful for ${name} in ${field}.`);
    navigate("login");
  }
  
  function validatePassword(password) {
    if (password.length < 6) {
      return { valid: false, message: "Password must be at least 6 characters long." };
    }
    if (!/[A-Z]/.test(password)) {
      return { valid: false, message: "Password must include at least one uppercase letter." };
    }
    if (!/[0-9]/.test(password)) {
      return { valid: false, message: "Password must include at least one number." };
    }
    return { valid: true };
  }
  

function login(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const passwordValid = validatePassword(password);
  if (!passwordValid.valid) {
    alert("Password error: " + passwordValid.message);
    return;
  }

  // Dummy login success popup
  alert(`Logged in successfully as ${email}`);
  navigate("home");
}

function validatePassword(password) {
  if (password.length < 6) {
    return { valid: false, message: "Password must be at least 6 characters long." };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: "Password must include at least one uppercase letter." };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, message: "Password must include at least one number." };
  }
  return { valid: true };
}

// Replace alert() in login() with this
function showModalMessage(msg) {
  document.getElementById("modalMessage").textContent = msg;
  new bootstrap.Modal(document.getElementById("msgModal")).show();
}


function saveToStorage() {
  localStorage.setItem("students", JSON.stringify(studentList));
}

function loadFromStorage() {
  const data = localStorage.getItem("students");
  if (data) studentList = JSON.parse(data);
}

window.onload = function () {
  loadFromStorage();
  navigate("home");
};
