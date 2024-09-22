export const VALIDATIONS = {
  emailRegex: /^[^\s@]+@[^\s@]+\.co[^\s@]+$/,
  phoneRegex: /^01[0-2,5]{1}[0-9]{8}$/,
  usernameRegex: /^[a-zA-Z0-9_]{3,16}$/,
  countryRegex: /^[a-zA-Z\s]+$/,
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
  dateRegex: /\b(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}\b/,
  discountRegex: /^[A-Za-z0-9]{4,10}\d{0,2}$/,
};
