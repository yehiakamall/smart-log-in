let userEmaillogin = document.getElementById("userEmaillogin");
let userpasswordlogin = document.getElementById("userpasswordlogin");
let submitButtonlogin = document.querySelector("button");
let signUppLink = document.querySelector("a")

submitButtonlogin.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent default form submission

  let users = JSON.parse(localStorage.getItem("users") || "[]"); // Get users from localStorage

  let loginSuccess = false; // To track if login is successful

  // Get user input
  let userEmail = userEmaillogin.value;
  let userPassword = userpasswordlogin.value;
  let logInpassword = document.getElementById("logInpassword");

  // Check if email and password match any user in localStorage
  for (let i = 0; i < users.length; i++) {
    if (users[i].Email === userEmail && users[i].Password === userPassword) {
      localStorage.setItem("users", JSON.stringify(users[i]));
      loginSuccess = true;
      break; // Stop searching after finding a match
    }
  }

  // Redirect to home page if login is successful
  if (loginSuccess) {
    window.location.href = "./home.html"; // Use href to redirect to home page
  } else {
    logInpassword.classList.remove("d-none")
  }


 
    
});
signUppLink.addEventListener("click"  ,  function (e) {
    e.preventDefault();
    window.location.href = "./signup.html"
})
