const fullName = "Suhjin Min";
const homeCountry = "South Korea";
const loginName = "Suhjin Min";
const id = "minsuh";
const program = "PCSSN";

// Header section
const header = document.getElementById("header");
const headerContent = `
  <h1 style="font-size: 20px; font-weight: bold;">
    Summer 2023 Assignment #1 for ${fullName} from ${homeCountry}
  </h1>
`;
header.innerHTML = headerContent;

// Footer section
const footer = document.getElementById("footer");
footer.innerHTML = `
  <p>
    <span style="font-size: 20px; font-weight: bold;">My Login:</span> ${loginName} /
    <span style="font-size: 20px; font-weight: bold;">My ID:</span> ${id} /
    <span style="font-size: 20px; font-weight: bold;">My Program:</span> ${program}
  </p>
`;

//increase and decrease # of tickets
const decrementButton = document.querySelector("#decrement");
const incrementButton = document.querySelector("#increment");
const ticketQuantityInput = document.querySelector("#ticketQuantity");
const submitButton = document.querySelector("#submitBtn");

decrementButton.addEventListener("click", () => {
  let ticketCount = parseInt(ticketQuantityInput.value);
  if (ticketCount > 0) {
    ticketCount--;
    ticketQuantityInput.value = ticketCount;
    updateSubmitButton();
  }
});

incrementButton.addEventListener("click", () => {
  let ticketCount = parseInt(ticketQuantityInput.value);
  if (ticketCount < 10) {
    ticketCount++;
    ticketQuantityInput.value = ticketCount;
    updateSubmitButton();
  }
});

ticketQuantityInput.addEventListener("change", () => {
  let ticketCount = parseInt(ticketQuantityInput.value);
  if (ticketCount < 0 || ticketCount > 10) {
    ticketQuantityInput.classList.add("redBackground");
    submitButton.disabled = true;
  } else {
    ticketQuantityInput.classList.remove("redBackground");
    updateSubmitButton();
  }
});

function updateSubmitButton() {
  const ticketCount = parseInt(ticketQuantityInput.value);
  const totalAmount = ticketCount * 16.99; // Assuming each ticket costs $10
  document.getElementById("totalAmount").textContent = totalAmount;
  
  if (ticketCount < 0 || ticketCount > 10) {
    ticketQuantityInput.classList.add("redBackground");
    submitButton.disabled = true;
  } else {
    ticketQuantityInput.classList.remove("redBackground");
    submitButton.disabled = false;
  }
}

updateSubmitButton();


// Get the bus time options
const busTimeOptions = document.getElementsByClassName('bus-time-option');

// Add event listener to each option
for (let i = 0; i < busTimeOptions.length; i++) {
  busTimeOptions[i].addEventListener('click', function() {
// Remove the 'selected' class from all options
    for (let j = 0; j < busTimeOptions.length; j++) {
      busTimeOptions[j].classList.remove('selected');
    }
// Add the 'selected' class to the clicked option
    this.classList.add('selected');
  });
}

//age field

const ageInput = document.querySelector('#age');

// Add event listener to the age input on input change
ageInput.addEventListener('input', validateAge);

// Function to validate the age input
function validateAge() {
  const age = parseInt(ageInput.value);

  if (age < 20) {
    ageInput.style.backgroundColor = 'red';
    document.querySelector('#submitBtn').disabled = true;
  } else {
    ageInput.style.backgroundColor = '';
    document.querySelector('#submitBtn').disabled = false;
  }
}


//Calculation of total amount to be paid

class TicketBooking {
    constructor() {
      this.ticketQuantityInput = document.querySelector('#ticketQuantity');
      this.totalAmountSpan = document.querySelector('#totalAmount');
      
      this.ticketQuantityInput.addEventListener('input', this.calculateTotalAmount.bind(this));
    }
    
    calculateTotalAmount() {
      const ticketQuantity = parseInt(this.ticketQuantityInput.value);
      const ticketPrice = 16.99; 
      const totalAmount = ticketQuantity * ticketPrice;
      this.totalAmountSpan.textContent = totalAmount;
    }
  }
  
  // Create an instance of the TicketBooking class
  const ticketBooking = new TicketBooking();

  //highlight using field
  // Get all the input fields
const inputFields = document.querySelectorAll('input');

// Add event listeners for focus and blur events
inputFields.forEach((input) => {
  input.addEventListener('focus', highlightField);
  input.addEventListener('blur', removeHighlight);
});

// Function to highlight the active input field
function highlightField(event) {
  event.target.classList.add('active-input');
}

// Function to remove the highlight from the input field
function removeHighlight(event) {
  event.target.classList.remove('active-input');
}