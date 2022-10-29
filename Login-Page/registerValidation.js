// let's get all required elements
const form = document.querySelector("form"),
    fField = form.querySelector(".first-name"),
    fInput = fField.querySelector("input"),
    lField = form.querySelector(".last-name"),
    lInput = lField.querySelector("input"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".phone"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    if (fInput.value == "") { //if message field is empty
        fField.classList.add("shake", "error"); //add the shake effect to the .message and give out the error
   }
   if (lInput.value == "") { //if message field is empty
        lField.classList.add("shake", "error"); //add the shake effect to the .message and give out the error
}
    if (eInput.value == "") { //if email input field is empty
        eField.classList.add("shake", "error"); //add the shake effect to the .email and give out the error
    }else{
        checkEmail(); //calling checkEmail function
    }
    if (pInput.value == "") { //if message field is empty
        pField.classList.add("shake", "error"); //add the shake effect to the .message and give out the error
   }
   
   setTimeout(()=>{ //remove shake after 500ms
    fField.classList.remove("shake");
    lField.classList.remove("shake");
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

   function checkPhone(){
    let pattern = /\d+/; //pattern to validate email
    if(!pInput.value.match(pattern)){ //if pattern not matched with user entered value
        pField.classList.add("error", "err");
        let errorTxt = pField.querySelector(".error-txt");
        // if email is not empty then looks like this is not an email until email adderss is valid
        (pInput.value !== "") ? errorTxt.innerText = "Letters are not allowed!" : errorTxt.innerText = "Phone Number cannot be empty";
    }else{
        pField.classList.remove("error", "err");
    }
   }

     // first name
     fInput.onkeyup = ()=>{
        if(fInput.value == ""){ //if first name is empty
            fField.classList.add("error");
        }else{
            fField.classList.remove("error");
        }
    }
        // last name
    lInput.onkeyup = ()=>{
        if(lInput.value == ""){ //if first name is empty
            pField.classList.add("error");
        }else{
            lField.classList.remove("error");
        }
    }
    
     pInput.onkeyup = ()=>{
        checkPhone();
    }

   // let's work on what to do after user filled up correct details
   if (!fField.classList.contains("error") && !lField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error")){
    
    window.location.reload();
    console.log("Form Submitted!");
   }
   
}