Feature('registration');

Scenario('test something',  ({ I }) => {
    // write test for https://uneven-roomy-book.glitch.me/
    I.amOnPage('https://uneven-roomy-book.glitch.me/');
    

});

Feature('Registration Form Automation with Mixed Selectors');

Scenario('Check that the registration form is visible', ({ I }) => {
    I.amOnPage('/');
    I.see('Registration Form', 'h2');
});

Scenario('Validate missing name field (CSS selector)', ({ I }) => {
    I.amOnPage('/');
    I.fillField('.age-input', '25'); // Using CSS class selector
    I.fillField('#dob', '1995-01-01'); // Using ID selector
    I.fillField('input[data-selector="email-field"]', 'test@example.com'); // Using data attribute CSS selector
    I.selectOption('#country-select', 'USA'); // Using ID selector
    I.checkOption('.terms-checkbox'); // Using class selector for checkbox
    I.checkOption('input[name="gender"][value="Male"]'); // Using attribute-based CSS selector
    I.click('#submitButton'); // ID selector for button
    I.see('Name is required.', '#nameError'); // ID selector for error message
});

Scenario('Check successful registration', ({ I }) => {
    I.amOnPage('/');
    I.fillField('input[data-selector="name"]', 'John Doe'); // Using data attribute
    I.fillField('.age-input', '25'); // Using CSS class selector
    I.fillField('#dob', '1995-01-01'); // Using ID selector
    I.fillField('input[data-selector="email-field"]', 'john@example.com'); // Using data attribute
    I.selectOption('#country-select', 'USA'); // Using ID selector
    I.checkOption('.terms-checkbox'); // Using class selector
    I.checkOption('input[name="gender"][value="Male"]'); // Using CSS selector
    I.click('#submitButton'); // ID selector
    I.see('Registration successful!', '#successMessage'); // Using ID for success message
});


//Validate Invalid Age Field
Scenario('Validate invalid age field using class selectors', ({ I }) => {
    I.amOnPage('/');
    I.fillField('input[data-selector="name"]', 'John Doe'); // Name field
    I.fillField('.age-input', '150'); // Invalid age
    I.fillField('#dob', '1995-01-01'); // Valid date of birth
    I.fillField('input[data-selector="email-field"]', 'test@example.com'); // Valid email
    I.selectOption('#country-select', 'USA'); // Select country
    I.checkOption('.terms-checkbox'); // Agree to terms
    I.checkOption('input[name="gender"][value="Male"]'); // Select gender
    I.click('#submitButton');
    I.see('Age must be a number between 1 and 100.', '#ageError'); // Validate age error message
});

//Validate Missing Email Field
Scenario('Validate missing email field using data attributes', ({ I }) => {
    I.amOnPage('/');
    I.fillField('input[data-selector="name"]', 'John Doe'); // Name field
    I.fillField('.age-input', '25'); // Valid age
    I.fillField('#dob', '1995-01-01'); // Valid date of birth
    I.selectOption('#country-select', 'USA'); // Select country
    I.checkOption('.terms-checkbox'); // Agree to terms
    I.checkOption('input[name="gender"][value="Male"]'); // Select gender
    I.click('#submitButton');
    I.see('Please enter a valid email address.', '#emailError'); // Validate email error message
});

// Validate Unchecked Terms Checkbox
Scenario('Validate unchecked terms checkbox using class selectors', ({ I }) => {
    I.amOnPage('/');
    I.fillField('input[data-selector="name"]', 'John Doe'); // Name field
    I.fillField('.age-input', '25'); // Valid age
    I.fillField('#dob', '1995-01-01'); // Valid date of birth
    I.fillField('input[data-selector="email-field"]', 'test@example.com'); // Valid email
    I.selectOption('#country-select', 'USA'); // Select country
    I.checkOption('input[name="gender"][value="Male"]'); // Select gender
    I.click('#submitButton');
    I.see('You must agree to the terms.', '#agreeError'); // Validate terms checkbox error message
});

//Validate Missing Gender Selection
Scenario('Validate missing gender selection', ({ I }) => {
    I.amOnPage('/');
    I.fillField('input[data-selector="name"]', 'John Doe'); // Name field
    I.fillField('.age-input', '25'); // Valid age
    I.fillField('#dob', '1995-01-01'); // Valid date of birth
    I.fillField('input[data-selector="email-field"]', 'test@example.com'); // Valid email
    I.selectOption('#country-select', 'USA'); // Select country
    I.checkOption('.terms-checkbox'); // Agree to terms
    I.click('#submitButton');
    I.see('Please select your gender.', '#genderError'); // Validate gender error message
});

//Validate Multiple Missing Fields

Scenario('Validate multiple missing fields', ({ I }) => {
    I.amOnPage('/');
    I.click('#submitButton'); // Try to submit without filling any field
    I.see('Name is required.', '#nameError'); // Name error message
    I.see('Age must be a number between 1 and 100.', '#ageError'); // Age error message
    I.see('Please enter a valid email address.', '#emailError'); // Email error message
    I.see('Please select your country.', '#countryError'); // Country error message
    I.see('You must agree to the terms.', '#agreeError'); // Terms checkbox error message
    I.see('Please select your gender.', '#genderError'); // Gender error message
});


//Validate Invalid Email Format

Scenario('Validate invalid email format', ({ I }) => {
    I.amOnPage('/');
    I.fillField('input[data-selector="name"]', 'John Doe'); // Name field
    I.fillField('.age-input', '25'); // Valid age
    I.fillField('#dob', '1995-01-01'); // Valid date of birth
    I.fillField('input[data-selector="email-field"]', 'invalid-email'); // Invalid email format
    I.selectOption('#country-select', 'USA'); // Select country
    I.checkOption('.terms-checkbox'); // Agree to terms
    I.checkOption('input[name="gender"][value="Male"]'); // Select gender
    I.click('#submitButton');
    I.see('Please enter a valid email address.', '#emailError'); // Validate email format error message
});










