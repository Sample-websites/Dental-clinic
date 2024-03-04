document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Basic form validation
  if (name && email && message) {
    // Construct the Formspree endpoint
    var formEndpoint = 'https://formspree.io/abubakarsalim21a@gmail.com'; // Replace with your Formspree email

    // Create a new FormData object and append form data
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Use the Fetch API to submit form data to Formspree
    fetch(formEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the Formspree response here (you can display a success message, redirect, etc.)
        console.log(data);
        alert('Form submitted successfully!');
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      });

    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill out all fields.');
  }
});

// Toggle navigation links on small screens
document.getElementById('hamburgerIcon').addEventListener('click', function () {
  var navLinks = document.querySelector('nav ul');
  navLinks.style.display = (navLinks.style.display === 'none' || navLinks.style.display === '') ? 'flex' : 'none';
});
// Get the review form and review list elements
const reviewForm = document.getElementById('reviewForm');
const reviewList = document.getElementById('reviewList');

// Event listener for form submission
reviewForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get values from the form
  const reviewerName = document.getElementById('reviewerName').value;
  const reviewContent = document.getElementById('reviewContent').value;

  // Create a new review element
  const newReview = document.createElement('div');
  newReview.className = 'review';
  newReview.innerHTML = `<strong>${reviewerName}:</strong> ${reviewContent}`;

  // Append the new review to the review list
  reviewList.appendChild(newReview);

  // Clear the form fields
  reviewForm.reset();
});
