//create my global varibles//
const studentList = document.querySelectorAll('.student-item'); 
const maxPerPage = 10; 
let totalPages; 
const div = document.createElement('div'); 

//create a show page function//
 function showPage(pageNumber) {
  removeElementByClass('page', 'no-match');
  removeElementByClass('page', 'pagination');
   
  // hide students//
  for (let i = 0; i < getStudents.length; i +=1) {
    getStudents[i].classList.add('no-display');
  }
   
  // if there are no students//
  if (students.length === 0) {
    let noStudent = '<h3 class="no-match">No Matching Students Found</h3>';
    let sibling = document.querySelector('.student-list');
    sibling.insertAdjacentHTML('afterEnd', noStudent);
  } else {
  
    if (parseInt(pageNumber) === numberOfPages) {
      for (let i = ((pageNumber * 10) - 10); i < ( (pageNumber * 10) - 10 + (students.length % 10) ); i += 1 ) {
        students[i].classList.remove('no-display');
      }
    } else {
      
      // show first 10 students on first page//
      
      for (let i = ((pageNumber * 10) - 10); i <= ((pageNumber * 10) - 1); i += 1 ) {
        students[i].classList.remove();
      }
    }
    appendPageLinks(numberOfPages);
  }
}
// create html for page links//
function appendPageLinks(pages) {
    if (parseInt(numberOfPages) > 1) {
    let pageList = '<ul class="pagination">';
    for (let i = 1; i <= pages; i += 1) {
      if (i === parseInt(pageNumber) ) {
        pageList += '<li><a href="#" class="active">' + i + '</a></li>';
      } else {
        pageList += '<li><a href="#">' + i + '</a></li>';
      }
    }
    pageList += '</ul>';
    let sibling = document.querySelector('.student-list');
    sibling.insertAdjacentHTML('afterEnd', pageList);
      
      
    // add eventListener on the page links//
    let paginationLi = document.querySelectorAll('.pagination li');
    for (let i = 0; i < numberOfPages; i += 1) {
      paginationLi[i].addEventListener('click', function(event) {
        pageNumber = event.target.innerHTML;
        showPage(pageNumber);
      });
    }
  }
}
