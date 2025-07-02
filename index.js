// index.js

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\+?\d{10,15}$/;
  return re.test(phone);
}

function validatePostalCode(postal) {
  const re = /^[0-9]{5}(?:-[0-9]{4})?$/;
  return re.test(postal);
}

function validatePassword(password) {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return re.test(password);
}

module.exports = {
  validateEmail,
  validatePhone,
  validatePostalCode,
  validatePassword
};
