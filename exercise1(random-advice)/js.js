const adviceTextElement = document.getElementById('advice-text');
const getAdviceButton = document.getElementById('get-advice-btn');

// Function to fetch random advice from the API
async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data.slip.advice;
  } catch (error) {
    console.error('Error fetching advice:', error);
    return 'An error occurred while fetching advice';
  }
}

// Function to update the advice text
async function updateAdvice() {
  const advice = await getAdvice();
  adviceTextElement.textContent = advice;
}

// Event listener for the button click
getAdviceButton.addEventListener('click', updateAdvice);

// Initial advice fetch when the page loads
updateAdvice();
