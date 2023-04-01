console.log('js');
//global variable of total monthly - stores total monthly cost
//global variable of total montly string - used for formatting purposes
let totalMonthly = 0;
let totalMonthlyString;

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
  let annualSalary = Number($('#annual-salary').val());
  annualSalary = annualSalary.toLocaleString('en-us');

  //writing the inputs to the tbody
  $('#table-body').append(`
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td id='annual-salary'>$${annualSalary}</td>
    <td><button id="delete-button">Delete</button></td>
  </tr>
  `);

  //this adds the annualSalary to our global variable totalMonthly
  //turns annualSalary into a number
  //gives formatting to totalMonthly with .localString()
  annualSalary = annualSalary.replace('$', '');
  annualSalary = annualSalary.replace(',', '');
  totalMonthly += Number(annualSalary);
  totalMonthlyString = totalMonthly.toLocaleString('en-us');
  $('#total-monthly').text(`Total Monthly: $${totalMonthlyString}`);

  //this clears the form for next submission
  $('#form')[0].reset();

  //testing these variables with console.logs
  // console.log(firstName);
  // console.log(lastName);
  // console.log(id);
  // console.log(title);
  // console.log(annualSalary);
}

function onDelete() {
  //this finds the annual salary of the deleted employee, then turns it into a number
  //this also formats the number to have commas with .tolocalestring()
  let deletedAnnualSalary = $(this).closest('tr').children('#annual-salary').text();
  deletedAnnualSalary = deletedAnnualSalary.replace('$', '');
  deletedAnnualSalary = deletedAnnualSalary.replace(',', '');
  deletedAnnualSalary = Number(deletedAnnualSalary);

  //this subtracts that deleted salary from total Monthly, then appends the page
  totalMonthly -= deletedAnnualSalary;
  totalMonthlyString = totalMonthly.toLocaleString('en-us');
  $('#total-monthly').text(`Total Monthly: $${totalMonthlyString}`);

  // this deletes the table row
  // this selects the delete button
  // .closest(tr) goes up the dom and looks for the closest tr
  // .remove() then removes the full tr

  $(this).closest('tr').remove();
}
