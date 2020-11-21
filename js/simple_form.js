const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input',function(){
            output.textContent=salary.value;
        });
        const name= document.querySelector('#text');
        const textError = document.querySelector('.text-error');
        name.addEventListener('input', function(){
            let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z ]{2,}$');
            if(nameRegex.test(text.value))
            textError.textContent = "";
           else textError.textContent = "Name is incorrect";
        });

        const email = document.querySelector('#email');
        const emailError = document.querySelector('.email-output');
        email.addEventListener('input',function(){
            let emailRegex=RegExp('^[a-zA-Z0-9\\-_]+([\\.+_-][a-zA-Z0-9]+)?@([a-zA-Z0-9]+)\\.([a-z0-9]{2,})(\\.[a-z]{2,})?$');
            if(emailRegex.test(email.value))
                emailError.textContent="";
                else emailError.textContent="email is incorrect";
        });

        const tel = document.querySelector('#tel');
        const telError = document.querySelector('.tel-output');
        tel.addEventListener('input',function(){
            let phoneRegex = RegExp('[0-9]{2}( [0-9]{10})');
            if(phoneRegex.test(tel.value))
                telError.textContent="";
            else telError.textContent="phone no is incorrect";
        });

        const pwd = document.querySelector('#pwd');
        const pwdError = document.querySelector('.pwd-output');
        pwd.addEventListener('input',function(){
            let pwdRegex1 = RegExp('(?=.*[A-Z])(?=.*[0-9]).{8,}$');
            let pwdRegex2 = RegExp('[a-z0-9A-Z]*[$&@#][a-z0-9A-Z]*');
            if(pwdRegex1.test(pwd.value) && pwdRegex2.test(pwd.value))
                pwdError.textContent="";
            else pwdError.textContent="password is incorrect";
        });
             