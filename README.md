## Overview:
This initial release of the Password Generator & Validator provides a user-friendly tool to both create strong, secure passwords and validate them against industry-standard security requirements. The application allows users to generate custom passwords based on selectable criteria and provides instant feedback on password strength for security-conscious users.

## Features:
#### Password Validation:

**Criteria**: The validator checks passwords against the following conditions:
- Minimum length of 6 characters.
- Contains at least one uppercase and one lowercase letter.
- Includes at least one digit (0-9).
- Includes at least one special character from the set !@#$%^&*.

**Feedback**: Users receive real-time feedback on whether their password meets all criteria:
- *Strong password*: If all criteria are met, the message "Your password is strong!" is displayed in green.
- *Weak password*: If any criteria are unmet, the message "Your password does not meet the criteria." is displayed in red.

#### Password Generator:

**Customizable Options**: Users can generate passwords by specifying:
- Password length (minimum of 6 characters).
- Whether to include uppercase letters, lowercase letters, numbers, and/or special symbols.

**Error Handling**: Provides feedback if no character sets are selected or if the specified length is less than 6 characters.
**Password Display**: Generated passwords are shown in green if valid, and users can easily copy the generated password to their clipboard.

#### Copy to Clipboard:

After generating a password, users can click the "Copy" button to instantly copy the password for easy use.

#### Usability Enhancements:
- Real-time visual feedback with color-coded messages for validation and password generation.
- Responsive layout with hidden "Copy" button until a password is generated.
- Error messages guide users to create compliant, secure passwords.

###### Known Limitations:
- No persistence for saved passwords or user preferences. Passwords must be copied manually.
- No support for user-defined special characters or character exclusion options in this version.

## Conclusion:
This version offers basic password generation and validation functionality with a simple, intuitive interface, making it a great starting point for users to improve their online security practices.
