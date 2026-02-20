// data base , model , list
const STUDENTS = ["arman", "arad"];
let isEditMode = false;
let studentEditingIndex = null;

// dom node
const ul = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");

// update data base
const handleAdd = () => {
  const newStudent = input.value;
  STUDENTS.push(newStudent);
  render();
};

// delete data from array
const handleDelete = (studentIndex) => {
  STUDENTS.splice(studentIndex, 1);
  render();
};

const handleEditAction = (studentIndex) => {
  isEditMode = true;
  studentEditingIndex = studentIndex;
  input.value = STUDENTS[studentIndex];
  btn.textContent = "EDIT";
};

const handleEdit = () => {
  const editedValue = input.value;
  STUDENTS.splice(studentEditingIndex, 1, editedValue);
  render();
  isEditMode = false;
  input.value = "";
  btn.textContent = "ADD";
};

// view , نمایش
const render = () => {
  // به ازای آیتم های آرایه li میسازه
  const template = STUDENTS.map(
    (student, index) =>
      `<li>${student} <button onclick = 'handleDelete(${index})'>REMOVE</button><button onclick = 'handleEditAction(${index})'>EDIT</button></li>`
  );
  ul.innerHTML = template.join("");
};

// event
btn.addEventListener("click", () => {
  if (isEditMode) {
    handleEdit();
  } else {
    handleAdd();
  }
});
window.addEventListener("load", render);

// آرایه ای به عنوان دیتا بیس داریم
// تابع اول (handleAdd) وظیفه اضافه کردن داده به آرایه رو داره
// تابع دوم (handleDelete) وظیفه حذف کردن از آرایه رو داره
// تابع سوم (handleEditAction) وظیفه وارد شدن برنامه به حالت تغییر داده داره
// تابع چهارم (handleEdit) وظیفه جایگزین کردن داده تغییر داده شده در آرایه و برگشتن برنامه به حالت اولی یعنی قبل از تغییر رو داره
// تابع پنجم (render) وظیفه نمایش فعالیت تابع هارو روی صفحه داره


// CRUD

// Create
// Read
// Update
// Delete
