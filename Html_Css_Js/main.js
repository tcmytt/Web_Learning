import logger from "./logger.js";

// // function start() {
// //     getCourses(renderCourses);
// //     //Đây là truyền function, còn đây là gọi function()
// // }

// var courseApi = 'http://localhost:3000/post'
// var courseList = document.querySelector('#course-list')

// ;(function setup() {
//   turnOnEditBtn(0)
//   getCourses()
//   handleCreateCourse()
// })()

// function getCourses() {
//   fetch(courseApi)
//     .then(response => response.json())
//     .then(render)
// }

// function render(courses) {
//   courses.forEach(course => {
//     renderCourse(course)
//   })
// }

// function renderCourse(course) {
//   var html = `<h3>Course name ${course.id}: ${course.name}</h3>
//               <p>Course description: ${course.description}</p>
//               <button onclick="handleDeleteCourse(${course.id})">Xóa khóa học</button>
//               <button onclick="handleEditCourse(${course.id})">Chỉnh sửa khóa học</button>`

//   var newCourse = document.createElement('li')
//   newCourse.id = `course-item-${course.id}`
//   newCourse.innerHTML = html
//   courseList.appendChild(newCourse)
// }

// function handleDeleteCourse(courseId) {
//   fetch(courseApi + `/${courseId}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(() => {
//       document.querySelector(`#course-item-${courseId}`).remove()
//     })
// }

// function handleCreateCourse() {
//   var createBtn = document.querySelector('#createBtn')
//   var courseName = document.querySelector('#course-name')
//   var courseDes = document.querySelector('#course-des')

//   createBtn.addEventListener('click', () => {
//     var name = courseName.value
//     var description = courseDes.value
//     createCourse({name, description})
//   })
// }

// function createCourse(course) {
//   fetch(courseApi, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(course)
//   })
//     .then(response => response.json())
//     .then(renderCourse)
// }

// function handleEditCourse(courseId) {

//   turnOnEditBtn(1)

//   var courseItem = document.querySelector(`#course-item-${courseId}`)
//   var name = courseItem.querySelector('h3').textContent
//   var description = courseItem.querySelector('p').textContent
  
//   var courseName = document.querySelector('#course-name')
//   var courseDes = document.querySelector('#course-des')
//   courseName.value = name
//   courseDes.value = description

//   var confirmEditBtn = document.querySelector('#confirmEditBtn')
//   confirmEditBtn.addEventListener('click', () => {
//     let name = document.querySelector('#course-name').value
//     let description = document.querySelector('#course-des').value
//     editCourse({courseId, name, description})
//   })
// }

// function editCourse({courseId, ...course}) {
//   fetch(courseApi + `/${courseId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(course)
//   })
//     .then(response => response.json())
//     .then(course => {
//       renderCourse(course)
//       turnOnEditBtn(0)
//     })
  
// }

// function turnOnEditBtn(isTrue) {
//   var createBtn = document.querySelector('#createBtn')
//   var confirmEditBtn = document.querySelector('#confirmEditBtn')
//   if (isTrue) {
//     createBtn.style.display = 'none'
//     confirmEditBtn.style.display = 'block'
//   }
//   else {
//     createBtn.style.display = 'block'
//     confirmEditBtn.style.display = 'none'
//   }
// }

var obj={
  name:'Hiep',
  age:188,
  nameCon:{
      name:'Hiep1',
      age:2,
      // nameCon:{
      //     name:'Hiep2',
      //     //age:3
      // }
  }
}
// console.log(obj.nameCon?.nameCon?.age)

var obj={
  name:'hiep',
  agr:18,
  address:'QN',
  objnew: {
      name:'Anh',
      age:18
  }
};

var {name:tenCha,objnew:{name:tenCon}}=obj;
console.log(tenCha,tenCon)