var name_input = document.querySelector('#name');
var tel_input = document.querySelector('#telephone');
var email_input = document.querySelector('#email');
var submit_data = document.querySelector('#submit');
(function() {

  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('Old browser');
    return;
  }
  document.addEventListener('DOMContentLoaded',function();
  submit_data.setAttribute('disabled','disabled');

  // Data cleanup functions
  function clean_nonnumbers(value) {
    // returns value with all non-digits removed
    return value.replace(/\D/g,'');
  }
  function clean_whitespace(value) {
    // returns value with all whitespace characters removed
    return value.replace(/\s/g, '');
  }

  // Phone-specific santizier functions
  function strip_us_country_code(value) {
    return value.replace(/^1/,'');
  }
  // Phone validity functions
  function validate_us_phone(value) {
    var phone_number = strip_us_country_code(clean_nonnumbers(value));
    return validate(phone_number.length,eq,10);
  }

  // Email validity function
  function validate_email(value) {
    var email = clean_whitespace(value);
    return validate(email,/^[^@\s]+@[^@\s]+$/g);
  }

  
    // Listen for keyup event ANYWHERE in the form
    signup_form.addEventListener('keyup',function(){
      // Check the likely validity of phone AND email
      if (validate_us_phone(tel_input.value) && validate_email(email_input.value)) {
        // If both are valid, remove the disabled attribute on the submit button
        signup_submit.removeAttribute('disabled');
      } else {
        // This will re-disable the submit button if the input changes to an invalid state
        signup_submit.setAttribute('disabled','disabled');
      }