let submitButton = document.querySelector("button");
let signUpNameInput = document.getElementById("userName");
let signUpEmailInput = document.getElementById("userEmail");
let signUpPasswordInput = document.getElementById("UserPassword");
let signUppLink = document.querySelector("a")


submitButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent any default action (like page refresh)
  
    // Capture the input values
    let userName = signUpNameInput.value;
    let userEmail = signUpEmailInput.value;
    let userPassword = signUpPasswordInput.value;
    

    let isValid = true;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");


    if(userName.trim() === "" ){
        nameError.classList.remove("d-none")
        isValid = false;
    }else {
        nameError.classList.add("d-none");  
      }

      let emailPattern =/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailPattern.test(userEmail)) {
        emailError.classList.remove("d-none"); 
        isValid = false;
      } else {
        emailError.classList.add("d-none");  
      }



      if(userPassword.trim() ===""){
        passwordError.classList.remove("d-none");
        isValid = false;
      }else if(userPassword.length < 6){
        passwordError.classList.remove("d-none");
      }else{
        passwordError.classList.add("d-none");
      }

    //   if(isValid){
    //     localStorage.setItem("userName" , userName )
    //     localStorage.setItem("userEmail" , userEmail )
    //     localStorage.setItem("userPassword" , userPassword )
    //   }
      const newUser = {
        Name : userName,
         Email : userEmail,
        Password : userPassword

      };
      let userArray = JSON.parse(localStorage.getItem("users") );

      if(!userArray ){
        userArray = []
      }

      userArray.push(newUser);

      localStorage.setItem("users", JSON.stringify(userArray) )


      





    
  });


  signUppLink.addEventListener("click"  ,  function (e) {
    e.preventDefault();
    window.location.href = "./index.html"
})


  