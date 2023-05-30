// Get the form and submit button elements
const form = document.getElementById('bookingForm');

// Add event listener to the submit button
submitButton.addEventListener('click', FormSubmit);

// Function to handle form submission
function FormSubmit(event) {
  
  // Get all the form input values
  const departure = document.getElementById('departure').value;
  const destination = document.getElementById('destination').value;
  const busService = document.querySelector('input[name="busServices"]:checked').value;
  const travelDate = document.getElementById('travelDate').value;
  const ticketQuantity = document.getElementById('ticketQuantity').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = document.getElementById('age').value;

  // Create an object to store the form data
  const formData = {
    departure,
    destination,
    busService,
    travelDate,
    ticketQuantity,
    firstName,
    lastName,
    email,
    gender,
    age
  };

  // Save the form data in localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Redirect to the second page
  window.location.href = 'second-page.html';
}

