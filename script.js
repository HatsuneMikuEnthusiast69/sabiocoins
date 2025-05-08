console.log("from script file");
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  const userData = { username, password };
  localStorage.setItem('user', JSON.stringify(userData));

  alert('User registered!');
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const enteredUsername = document.getElementById('loginUsername').value;
  const enteredPassword = document.getElementById('loginPassword').value;

  const storedData = JSON.parse(localStorage.getItem('user'));

  if (storedData && enteredUsername === storedData.username && enteredPassword === storedData.password) {
    alert('Login successful!');
  } else {
    alert('Incorrect username or password.');
  }
});