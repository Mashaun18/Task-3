document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
  
    if (!name || !email || !category) {
      document.getElementById('error-message').innerText = 'Please fill in all fields';
    } else {
      document.getElementById('error-message').innerText = '';
      alert('Thank you for signing up!');
      // You can add code here to submit the form data to a server
    }
  });
  