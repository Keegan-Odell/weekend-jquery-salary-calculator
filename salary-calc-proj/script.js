console.log('js');

$(document).ready(onReady);

function onReady() {
  $('#submit-button').on('click', onSubmit);
}

//This will handle the submit button
//It will take the values fromt he inputs
//then write them into the table
function onSubmit() {
  //prevents submit button from reloading page
  event.preventDefault();

  //these variables are the values of the inputs
  let firstName = $('#first-name').val();
  let lastName = $('#last-name').val();
  let id = $('#id').val();
  let title = $('#title').val();
  let annualSalary = $('#annual-salary').val();

  //testing these variables with console.logs
  console.log(firstName);
  console.log(lastName);
  console.log(id);
  console.log(title);
  console.log(annualSalary);
}
