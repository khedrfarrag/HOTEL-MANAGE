export const VALIDATIONS = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneRegex: /^01[0-2,5]{1}[0-9]{8}$/,
  usernameRegex: /^[a-zA-Z0-9_]{3,16}$/,
  countryRegex: /^[a-zA-Z\s]+$/,
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
};
