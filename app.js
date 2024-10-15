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


//Generate Password
function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let charset = '';
    let password = '';

    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~';
    if (length < 6) {
        document.getElementById('generatedPassword').textContent = "Password length must be at least 6 characters.";
        document.getElementById('generatedPassword').style.color = "red";
        return;
    }
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        document.getElementById('generatedPassword').textContent = "Please select at least one character set.";
        document.getElementById('generatedPassword').style.color = "red";
        return;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('generatedPassword').textContent = password;
    document.getElementById('generatedPassword').style.color = "green";
}

//Copy to Clipboard
function copyToClipboard() {
    const passwordText = document.getElementById('generatedPassword').textContent;
  
    const textarea = document.createElement('textarea');
    textarea.value = passwordText;
    document.body.appendChild(textarea);
    textarea.select(); 
    document.execCommand('copy'); 
    document.body.removeChild(textarea); 
  }
  
