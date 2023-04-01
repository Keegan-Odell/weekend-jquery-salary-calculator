console.log('js');

$(document).ready(onReady);

function onReady() {
  $('#submit-button').on('click', onSubmit);
}

function onSubmit() {
  event.preventDefault();
  let firstName = $('#first-name').val();
  console.log(firstName);
}
