### `Validation Form`

```markdown
# Form Validation Project

This project demonstrates a simple form validation using HTML, CSS, and JavaScript. The form includes fields for name, email, and password, and validates them using regular expressions.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Project Overview

This project includes a registration form with fields for name, email, and password. It validates the input fields using JavaScript to ensure that the user enters valid data before submitting the form.

## Features

- **Name Validation:** Ensures that the name contains only letters and spaces.
- **Email Validation:** Validates the email format.
- **Password Validation:** Ensures the password is between 5 to 8 characters and contains only allowed characters.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Ali-Hackers/form-validation-project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd form-validation-project
    ```

3. Open `index.html` in your browser to view the form.

## Usage

### HTML

The form is defined in `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Form</title>
    <link rel="stylesheet" href="validcss.css">
</head>
<body>
    <div class="form-container">
        <form id="validationForm">
            <h2>Registration Form</h2>
            <div class="input-group">
                <label>Name:</label>
                <input class="input" type="text" id="name" name="name">
            </div>
            <div class="input-group">
                <label>Email:</label>
                <input class="input" type="email" id="email" name="email">
            </div>
            <div class="input-group">
                <label for="password">Password:</label>
                <input class="input" type="password" id="password" name="password">
            </div>
            <div class="input-group">
                <button type="submit" id="submit">Register</button>
            </div>
        </form>
    </div>
    <script src="valid.js"></script>
</body>
</html>
```

### CSS

The styles are defined in `validcss.css`:
```css
body {
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    color: black;
}

form h2 {
    margin-bottom: 20px;
    color: #333;
    text-align: center;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
}

.input-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.input-group button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

.input-group button:hover {
    background-color: #0056b3;
}

.chek {
    border: 2px solid red;
}
```

### JavaScript

The validation logic is in `valid.js`:
```javascript
class Forms {
    constructor(htmlElement) {
        this.htmlElement = document.getElementsByClassName(htmlElement)[0];
        this.htmlElement.getElementsByTagName('button')[0].addEventListener('click', (e) => this.init(e));
        this.inputs = Array.from(document.getElementsByTagName('input'));
        this.inputs.forEach(input => {
            input.addEventListener('click', (e) => this.init(e));
        });
    }

    init(e) {
        e.preventDefault();
        this.nameInput = this.inputs.filter(input => input.getAttribute('id') === 'name')[0];
        this.emailInput = this.inputs.filter(input => input.getAttribute('id') === 'email')[0];
        this.passwordInput = this.inputs.filter(input => input.getAttribute('id') === 'password')[0];
        this.Passwordvalid();
        this.Emailvalid();
        this.Namevalid();
    }

    Namevalid() {
        const namePattern = /^[a-zA-Z\s]+$/;   
        if (!namePattern.test(this.nameInput.value)) {
            this.nameInput.style.border = '1px solid red';
            this.nameInput.setCustomValidity('Invalid name');
        } else {
            this.nameInput.style.border = '';
            this.nameInput.setCustomValidity('');
        }
    }

    Emailvalid() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(this.emailInput.value)) {
            this.emailInput.style.border = '1px solid red';
            this.emailInput.setCustomValidity('Invalid email address');
        } else {
            this.emailInput.style.border = '';
            this.emailInput.setCustomValidity('');
        }
    }

    Passwordvalid() {
        const passwordPattern = /^[A-Za-z\d!@#$%^&*()_+[\]{}|;:,.<>?]{5,8}$/;
        if (!passwordPattern.test(this.passwordInput.value)) {
            this.passwordInput.style.border = '1px solid red';
            this.passwordInput.setCustomValidity('Invalid password');
        } else {
            this.passwordInput.style.border = '';
            this.passwordInput.setCustomValidity('');
        }
    }
}

let form = new Forms('form-container');
```

## License

This project is licensed under the MIT License.
```

This `README.md` file provides a comprehensive guide to your project, making it easier for others to understand and use it. Make sure to replace `yourusername` with your actual GitHub username in the clone URL.
