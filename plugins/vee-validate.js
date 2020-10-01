import { extend } from 'vee-validate';
import { required, email, alpha_spaces, integer, length } from 'vee-validate/dist/rules';


// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
});

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'This field is characters only'
});

// Add the email rule
extend('email', {
  ...email,
  message: 'Please insert a valid e-mail'
});

extend('integer', {
  ...integer,
  message: 'This field accepts numbers'
});
extend('length', {
  ...length,
  message: 'This field requires at least {length} characters'
});
