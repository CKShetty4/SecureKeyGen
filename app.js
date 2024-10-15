// Password Validation
function validatePassword() {
    const password = document.getElementById('password').value;
    const lengthCheck = document.getElementById('lengthCheck');
    const digitCheck = document.getElementById('digitCheck');
    const specialCharCheck = document.getElementById('specialCharCheck');
    const caseCheck = document.getElementById('caseCheck');
    const feedback = document.getElementById('feedback');
  
    let isValid = true;
  
    lengthCheck.checked = password.length >= 6;
  
    digitCheck.checked = /\d/.test(password);
  
    specialCharCheck.checked = /[!@#$%^&*]/.test(password);
  
    caseCheck.checked = /[A-Z]/.test(password) && /[a-z]/.test(password);
  
    if (lengthCheck.checked && digitCheck.checked && specialCharCheck.checked && caseCheck.checked) {
      feedback.textContent = "Your password is strong!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Your password does not meet the criteria.";
      feedback.style.color = "red";
    }
  }
  