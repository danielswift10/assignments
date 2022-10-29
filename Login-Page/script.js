// let's get all required elements
const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    if (eInput.value == "") { //if email input field is empty
        eField.classList.add("shake", "error"); //add the shake effect to the .email and give out the error
    }else{
        checkEmail(); //calling checkEmail function
    }
    if (pInput.value == "") { //if message field is empty
        pField.classList.add("shake", "error"); //add the shake effect to the .message and give out the error
   }
   
   setTimeout(()=>{ //remove shake after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
   }, 500);
    
   // let's work on the input keyup i.e. as the user enters any thing
   eInput.onkeyup = ()=>{
    checkEmail();//calling checkEmail function  
    
   }

   // let's create a function that checks the email and ppassword before submission
   function checkEmail(){
    let pattern = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/; //pattern to validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched with user entered value
        eField.classList.add("error", "err");
        let errorTxt = eField.querySelector(".error-txt");
        // if email is not empty then looks like this is not an email until email adderss is valid
        (eInput.value !== "") ? errorTxt.innerText = "Looks like this is not an email" : errorTxt.innerText = "Email cannot be empty";
    }else{
        eField.classList.remove("error", "err");
    }
   }

     // password
     pInput.onkeyup = ()=>{
        if(pInput.value == ""){ //if first name is empty
            pField.classList.add("error");
        }else{
            pField.classList.remove("error");
        }
    }

   // let's work on what to do after user filled up correct details
   if (!eField.classList.contains("error") && !pField.classList.contains("error")){
    
    window.location.reload();
    console.log("Form Submitted!");
   }
   
}