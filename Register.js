const passwordInput = document.querySelector("#password_data");

passwordInput.addEventListener("keyup", () => {
    let password = passwordInput.value;
    
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");

    if(password.length===0)
    {
        document.querySelector(".safety").innerHTML = "Enter Password";
    }
    else
    {
        document.querySelector(".safety").innerHTML = '<span>Password Strength</span><span class="line" id="line1"></span><span class="line" id="line2"></span><span class="line" id="line3"></span>';
    }

    if (strongRegex.test(password)) 
    {
        document.querySelector("#line1").style.background = "green";
        document.querySelector("#line2").style.background = "green";
        document.querySelector("#line3").style.background = "green";
    } 
    else if (mediumRegex.test(password)) 
    {
        document.querySelector("#line1").style.background = "yellow";
        document.querySelector("#line2").style.background = "yellow";
    } 
    else 
    {
        document.querySelector("#line1").style.background = "red";
        
    }
});

const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default form submission behavior

  // Get the form data
  const formData = new FormData(document.querySelector('form'));
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  // You can add validation logic here to check if the form data is valid

  // Redirect to the desired page
  window.location.href = 'welcome.html'; // replace with the desired page URL
});

const loader = document.getElementById('loader');
const registerBtns = document.getElementById('register-btn');

registerBtns.addEventListener('click', () => {
  loader.classList.add('show');
  setTimeout(() => {
    window.location.href = 'welcome.html';
  }, 5000); // adjust the timeout duration as needed
});