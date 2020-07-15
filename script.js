
// Navigations elements
const phoneRoute = document.getElementById("phone-route");
const emailRoute = document.getElementById("email-route");
const link1 = document.getElementById("topnav_link1");
const link2 = document.getElementById("topnav_link2");

// Declare email form element variables
const formTerms = document.getElementById("form__terms");
const emailField = document.getElementById("form__email");
const spinner = document.getElementById("email-route__spinner");
const formSubmit = document.getElementById("form__submit"); 
const requestText = document.getElementById("email-route__request");
const emailError = document.getElementById("email-route__error");
const emailTermsError = document.getElementById("email-route__terms-error");
const regInfo = document.getElementById("reg");

// Declare mobile phone form element variables
const formTerms2 = document.getElementById("form__terms2");
const phoneField = document.getElementById("form__phone");
const spinner2 = document.getElementById("phone-route__spinner");
const formSubmit2 = document.getElementById("form__submit2"); 
const requestText2 = document.getElementById("phone-route__request");
const phoneError = document.getElementById("phone-route__error");
const phoneTermsError = document.getElementById("phone-route__terms-error");
const regInfo2 = document.getElementById("reg2");

// Regex for email and phone check
const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneCheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

// Default settings for email form elements
spinner.style.display = "none";
requestText.style.display = "none";
emailError.style.display = "none";
emailTermsError.style.display = "none";
regInfo.style.display = "none";

// Default settings for mobile phone form elements
spinner2.style.display = "none";
requestText2.style.display = "none";
phoneError.style.display = "none";
phoneTermsError.style.display = "none";
regInfo2.style.display = "none";

// Default settings for navigation
link1.classList.add("topnav__link--active");
phoneRoute.style.display = "none";

// Function for navigation
function route(event) {

    if(event.target.text === 'Register with mobile') {
        phoneRoute.style.display = "block";
        emailRoute.style.display = "none";
        link2.classList.add("topnav__link--active");
        link1.classList.remove("topnav__link--active");
    } else {
        phoneRoute.style.display = "none";
        emailRoute.style.display = "block";
        link1.classList.add("topnav__link--active");
        link2.classList.remove("topnav__link--active");
    }
}

// Function for email request submision
function emailSubmit() {
    
    // check the email user input
    let isEmail = emailCheck.test(String(emailField.value).toLowerCase());
    
    // Default css on submit button click
    spinner.style.display = "block";
    requestText.style.display = "block";
    formSubmit.disabled = true;
    formSubmit.style.cursor = "not-allowed"
    emailError.style.display = "none";
    emailTermsError.style.display = "none";
    regInfo.style.display = "none";  
    
    setTimeout(function(){
        spinner.style.display = "none";
        requestText.style.display = "none";
        formSubmit.disabled = false;
        formSubmit.style.cursor = "pointer";      
        
        // Email form validation
        if(formTerms.checked === false){
            emailTermsError.style.display = "block";
        } else if(formTerms.checked === true && isEmail === false){
            emailError.style.display = "block";
            emailTermsError.style.display = "none";
        } else if (formTerms.checked === true && isEmail === true) {
            regInfo.style.display = "block";
            emailField.value = "";
            formTerms.checked = false;
        }

    }, 2500);       
}

// Function for phone request submision
function phoneSubmit(){
    
    // Validate the phone number
    let isPhone = phoneCheck.test(String(phoneField.value));

    spinner2.style.display = "block";
    requestText2.style.display = "block";
    formSubmit2.disabled = true;
    formSubmit2.style.cursor = "not-allowed"
    phoneError.style.display = "none";
    phoneTermsError.style.display = "none";
    regInfo2.style.display = "none";
    //console.log(isPhone, formTerms2.checked);

    setTimeout(function(){
        spinner2.style.display = "none";
        requestText2.style.display = "none";
        formSubmit2.disabled = false;
        formSubmit2.style.cursor = "pointer";
        
        // Phone form validation
        if(formTerms2.checked === false){
            phoneTermsError.style.display = "block";
        } else if(formTerms2.checked === true && isPhone === false){
            phoneError.style.display = "block";
            phoneTermsError.style.display = "none";
        } else if (formTerms2.checked === true && isPhone === true) {
            regInfo2.style.display = "block";
            phoneField.value = "";
            formTerms2.checked = false;
        }

    }, 2500);   

}











