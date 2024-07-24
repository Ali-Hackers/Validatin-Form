
class Forms {

    htmlElement=''
    inputs=''
    constructor(htmlElement) {

        
        this.htmlElement = document.getElementsByClassName(htmlElement)[0];
        
        this.htmlElement.getElementsByTagName('button')[0].addEventListener('click', (e) => this.init(e));
        
        this.inputs = Array.from(document.getElementsByTagName('input'));

        this.inputs.forEach(input => {
            input.addEventListener('click', (e) => this.init(e));
        });
    }

    init(e) {
        
        
        this.nameInput = this.inputs.filter(input => input.getAttribute('id') === 'name')[0];
        this.emailInput = this.inputs.filter(input => input.getAttribute('id') === 'email')[0];
        this. passwordInput = this.inputs.filter(input => input.getAttribute('id') === 'password')[0];
 

       this.Passwordvalid();
        
        this.Emailvalid(); 
        
        
        this.Namevalid(); 



            
    }

 
    Namevalid(e) {

      
      
        const namePattern = /^[a-zA-Z\s]+$/;   
        if (!namePattern.test(this.nameInput.value)) {
            
            this.nameInput.style.border = '1px solid red';
            this.nameInput.setCustomValidity('Invalid name');
        } else {
            this.nameInput.style.border = '';
            this.nameInput.setCustomValidity('');
        }
    }

    Emailvalid(e) {
        
        
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailPattern.test(this.emailInput.value)) {
            this.emailInput.style.border = '1px solid red';
            this.emailInput.setCustomValidity('Invalid email address');
        } else {
            this.emailInput.style.border = '';
            this.emailInput.setCustomValidity('');
        }
    }

    Passwordvalid(e) {
        
        const passwordPattern = /^[A-Za-z\d!@#$%^&*()_+[\]{}|;:,.<>?]{5,8}$/;

        if (!passwordPattern.test(this.passwordInput.value)) {

            document.getElementById('password').style.border = '1px solid red';
            document.getElementById('password').setCustomValidity('Invalid password');
        } else {
            document.getElementById('password').style.border = '';
            document.getElementById('password').setCustomValidity('');
        }

    }
}

let form=new Forms('form-container');

