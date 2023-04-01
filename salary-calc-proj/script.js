console.log('js');

$(document).ready(onReady);

function onReady() {
  //submit button functionality
  $('#submit-button').on('click', onSubmit);
  //delete button functionality in table
  $('#table-body').on('click', '#delete-button', onDelete);
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

  //writing the inputs to the tbody
  $('#table-body').append(`
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button id="delete-button">Delete</button></td>
  </tr>
  `);

  //testing these variables with console.logs
  console.log(firstName);
  console.log(lastName);
  console.log(id);
  console.log(title);
  console.log(annualSalary);
}

function onDelete() {
  //this deletes the table row
  //this selects the delete button
  //.closest(tr) goes up the dom and looks for the closest tr
  //.remove() then removes the full tr
  $(this).closest('tr').remove();
}
