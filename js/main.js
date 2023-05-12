const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  //validation function is called at the time of submiting form
  validate();
},false);


const senddata = (count,sRate)=>{
  if (count === sRate) {
    alert('registration Successful')
  }else{
    return false
  }
}
//for final validation
const success = ()=>{
  let formDiv = document.getElementsByClassName('mb-3');
  let count = formDiv.length-1
  Array.from(formDiv).forEach((element,index) => {
    if (element.classList.contains("success")) {
      var sRate = 0 + index;
      senddata(count,sRate)
    }else{
      return false
    }
  });
}

//error function
const setError = (input, message) => {
  let inputparent = input.parentElement;
  inputparent.className = "mb-3 error";
  let errmsg = inputparent.querySelector("small");
  errmsg.innerHTML = message;
};
//success Function
const setSuccess = (input) => {
  let inputparent = input.parentElement;
  inputparent.className = "mb-3 success";
  let successmsg = inputparent.querySelector("small");
  successmsg.innerHTML = "Sucess";
};
//username validation
const uservalidation = () => {
  const usernamevalue = username.value;

  if (usernamevalue === "") {
    setError(username, "username cannot be blank");
  } else if (usernamevalue.length <= 2) {
    setError(username, "Min 3 Character required");
  } else {
    setSuccess(username);
  }
};
username.addEventListener("keyup", uservalidation);

//email validation
const emailValidation = () => {
  const emailvalue = email.value;

  if (emailvalue === "") {
    setError(email, "Email Cannot be Blank");
  } else if (emailvalue.length <= 2) {
    setError(email, "Min 3 Character required");
  }else{
    setSuccess(email)
  }
};
email.addEventListener("keyup", emailValidation);

//phone validation
const phoneValidation = ()=>{
  const phonevalue = phone.value;

    if (phonevalue === "") {
        setError(phone, "Phone number cannot be Blank");
      } else if (phonevalue.length !== 10) {
        setError(phone, "Please enter valid phone number");
      } else {
        setSuccess(phone);
      }
}
phone.addEventListener("keyup", phoneValidation);

//password Validation
const passwordValidation = ()=>{
  const passwordvalue = password.value;

    if (passwordvalue === "") {
        setError(password, "Password Cannot be blank");
      } else if (passwordvalue.length < 8) {
        setError(password, "Minimum 8 character required");
      } else {
        setSuccess(password);
      }
}
password.addEventListener("keyup", passwordValidation);

//validation fuction
const validate = () => {

  //username Validation
  uservalidation();

  //Email Validation
  emailValidation();

  // phone Validation
  phoneValidation();
  // Password validation
  passwordValidation();
  //
  success();
};

