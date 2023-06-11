// This function implements the game of Craps
function playGame() {
    var die1 = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    var die2 = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
  
    var sum = die1 + die2; // Calculate the sum
  
    var result = document.getElementById("result"); // Get the result element
  
    if (sum === 7 || sum === 11) {
      result.innerHTML = "You lose"; // Output if sum is 7 or 11
    } else if (die1 === die2 && die1 % 2 === 0) {
      result.innerHTML = "You won"; // Output if doubles and even
    } else {
      result.innerHTML = "You pushed"; // Output if none of the above conditions met
    }
  }
  