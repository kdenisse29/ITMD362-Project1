var name_input = document.querySelector('#name');
var email_input = document.querySelector('#email');
var submit_data = document.querySelector('#submit');
(function() {
  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('Old browser');
    return;
  }
document.addEventListener('DOMContentLoaded',function();
submit_data.setAttribute('disabled','disabled');

// Email validity function
  function validate_email(value) {
    var email = clean_whitespace(value);
    return validate(email,/^[^@\s]+@[^@\s]+$/g);
  }
  
// Listen for keyup event ANYWHERE in the form
  signup_form.addEventListener('keyup',function(){
// Check the likely validity of phone AND email
  if (validate_email(email_input.value) {
// If both are valid, remove the disabled attribute on the submit button
    signup_submit.removeAttribute('disabled');
  }
  else {
// This will re-disable the submit button if the input changes to an invalid state
    signup_submit.setAttribute('disabled','disabled');
  }