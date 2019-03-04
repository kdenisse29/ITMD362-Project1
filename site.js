(function() {
  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('Old browser');
    return;
  }
  // Library of comparison functions
  //
  // Unlike the raw operators these encapsulate, functions
  // can be passed around like any other value into other
  // functions.
  function eq(value,condition) {
    return value === condition;
  }
  
  function validate(value,check,condition) {
    if (eq(typeof(check.test),'function')) {
      // Handle a regular expression
      return check.test(value);
    } else if (eq(typeof(check),'function')) {
      // Handle a comparison function
      return check(value,condition);
    } else {
      return false;
    }
  }
  // Data cleanup functions
  function clean_whitespace(value) {
    // returns value with all whitespace characters removed
    return value.replace(/\s/g, '');
  }
  // Email validity function
  function validate_email(value) {
    var email = clean_whitespace(value);
    return validate(email,/^[^@\s]+@[^@\s]+$/g);
  }

  document.addEventListener('DOMContentLoaded',function(){
  var signup_form = document.querySelector('#mailinglist');
  var name_input = document.querySelector('#name');
  var submit_data = document.querySelector('#submit');
  var email_input = document.querySelector('#email');
// Listen for keyup event ANYWHERE in the form
  signup_form.addEventListener('keyup',function(){
// Check the likely validity of email
  if (validate_email(email_input.value)){
// If both are valid, remove the disabled attribute on the submit button
    submit_data.removeAttribute('disabled');
  } else {
// This will re-disable the submit button if the input changes to an invalid state
    submit_data.setAttribute('disabled','disabled');
  }});
 });
}());