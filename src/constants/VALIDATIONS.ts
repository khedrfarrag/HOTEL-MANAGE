export const VALIDATIONS = {
  // Email pattern that ensures the input is a valid email format
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  // Phone pattern for Egyptian phone numbers starting with 01 and followed by 8 digits
  phoneRegex: /^01[0-2,5]{1}[0-9]{8}$/,

  // Username pattern allowing alphanumeric characters and underscores, between 3 and 16 characters long
  usernameRegex: /^[a-zA-Z0-9_]{3,16}$/,

  // Country name pattern allowing only alphabetic characters and spaces
  countryRegex: /^[a-zA-Z\s]+$/,

  // Password pattern requiring at least 8 characters, one uppercase, one lowercase, one number, and one special character
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,

  // Date pattern matching the format "DD-MM-YYYY"
  dateRegex: /\b(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}\b/g,

  discountRegex: /^\d{2}(?!00)$/,
};

// Email validation rules used for form validation
export const emailValidation = {
  required: 'Email is required',

  // Checks if the entered email matches the defined pattern (valid email format)
  pattern: {
    value: VALIDATIONS.emailRegex,
    message: 'Please enter a valid email', // Error message if email doesn't match the pattern
  },
};

// Password validation rules used for form validation
export const PasswordValidation = {
  required: 'Password is required',

  // Checks if the entered password matches the defined pattern (strong password criteria)
  pattern: {
    value: VALIDATIONS.passwordRegex,
    message:
      'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character', // Error message if password doesn't meet the criteria
  },
};

// Function that generates a required field validation message dynamically based on the field name
export const RequiredField = (fieldName: string) => ({
  required: `${fieldName} is required`, // Customizable message for any required field
});
