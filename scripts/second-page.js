// Get the stored form data from localStorage
const formData = JSON.parse(localStorage.getItem('formData'));

// Display the transaction message and form details
const transactionMessage = document.getElementById('transactionMessage');
const formDataDetails = document.getElementById('formDataDetails');

if (formData) {
  
  for (const [key, value] of Object.entries(formData)) {
    const detailItem = document.createElement('p');
    detailItem.textContent = `${key}: ${value}`;
    formDataDetails.appendChild(detailItem);
  }
}

// Back button eventListener
const backButton = document.getElementById('backButton');
backButton.addEventListener('click', previousPage);

// Function to navigate back previous page
function previousPage() {
  window.history.back();
}
