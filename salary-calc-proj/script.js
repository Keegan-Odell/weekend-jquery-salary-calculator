console.log('js');
//global variable of total yearly - stores yearly expenses
//global variable of total monthly - stores total monthly cost
//global variable of total montly string - used for formatting purposes
let totalYearly = 0;
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
  //conditional check for id to make sure its a number and not a string
  let id = $('#id').val();
  if (isNaN(Number(id)) === true) {
    alert('please input a number in id');
    return;
  }
  let title = $('#title').val();
  //this is our formatting and conditional checking for annual salary
  let annualSalary = $('#annual-salary').val();
  annualSalary = annualSalary.replace(/[^0-9,$]/g, 'f');
  annualSalary = annualSalary.replace(/[,$]/g, '');
  if (isNaN((annualSalary = Number(annualSalary))) === true) {
    alert('Please enter a number under Annual Salary!');
    return;
  }
  annualSalary = annualSalary.toLocaleString('en-us', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 });

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
  annualSalary = annualSalary.replace(/.\D/g, '');
  console.log(annualSalary);
  totalYearly = totalYearly + Number(annualSalary);
  totalMonthly = totalYearly / 12;
  totalMonthlyString = totalMonthly.toLocaleString('en-us', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 });
  if (totalMonthly > 20000) {
    $('#total-monthly').addClass('over-budget');
    $('#total-monthly').text(`Total Monthly: $${totalMonthlyString} - you are over budget!`);
  } else {
    $('#total-monthly').text(`Total Monthly: $${totalMonthlyString}`);
  }

  //this clears the form for next submission
  $('#form')[0].reset();
}

function onDelete() {
  //this finds the annual salary of the deleted employee, then turns it into a number
  //this also formats the number to have commas with .tolocalestring()
  let deletedAnnualSalary = $(this).closest('tr').children('#annual-salary').text();
  console.log(deletedAnnualSalary);
  deletedAnnualSalary = deletedAnnualSalary.replace(/.\D/g, '');
  deletedAnnualSalary = deletedAnnualSalary.replace(/[^0-9,$]/g, 'f');
  deletedAnnualSalary = deletedAnnualSalary.replace(/[,$]/g, '');
  console.log(deletedAnnualSalary);
  deletedAnnualSalary = Number(deletedAnnualSalary);
  console.log(deletedAnnualSalary);

  //this subtracts that deleted salary from total Monthly, then appends the page
  totalYearly = totalYearly - deletedAnnualSalary;
  totalMonthly = totalYearly / 12;
  totalMonthlyString = totalMonthly.toLocaleString('en-us', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 });
  if (totalMonthly <= 20000) {
    $('#total-monthly').removeClass('over-budget');
    $('#total-monthly').text(`Total Monthly: $${totalMonthlyString}`);
  } else {
    $('#total-monthly').text(`Total Monthly: $${totalMonthlyString}`);
  }

  // this deletes the table row
  // this selects the delete button
  // .closest(tr) goes up the dom and looks for the closest tr
  // .remove() then removes the full tr
  $(this).closest('tr').remove();
}
