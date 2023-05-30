// Get the form 
const form = document.getElementById('bookingForm');

// Add event listener to click the submit button
submitButton.addEventListener('click', FormSubmit);

// Function to handle form submission
function FormSubmit(event) {
  
  // Get all the input data from form
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

  // Create an object to store all the input data from form
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

  // Save all the data to localstorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Redirect to second-page.html(after submission)
  window.location.href = 'second-page.html';
}

