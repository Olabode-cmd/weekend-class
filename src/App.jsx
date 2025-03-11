import { useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'

const App = () => {

  const click = () => {
    alert('I have been clicked')
  }

  let name = 'Olabode';
  console.log('My name is ' + name);
  console.log(`My name is ${name}`) 

  // Conditionals - If Statements
  const checkAge = () => {
    let age = prompt();

    if (age < 18 ) {
      alert("You are a child");
    } else {
      alert("You are an adult");
    }
  }

  // Create a function that collects temperature data and
  // if temperature is less than 25, alert it is cold
  // if it is between 26 and 37, alert it is warm
  // and if it is greater than 37, alert it is hot

  const checkTemperature = () => {
    let temperature = prompt();

    if (temperature < 25 ) {
      alert('Temperature is cold')
    } else if (25 <= temperature <= 36) {
      alert('Temperature is warm')
    } else if (temperature > 36) {
      alert('Temperature is hot')
    } else {
      alert('Not a valid number')
    }
  }


  // Generate a random number between 1 and 20 (for this use Math.random())
  // Ask the user to guess the number. if they guess higher than the number
  // alert you guessed too high, and reprompt them for an input

  // if they guess lower, alert you guessed too low and reprompt them for another input

  // if they get it right, alert "You guessed the number"

  const guessWizard = () => {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      attempts++;
      const guess = parseInt(
        prompt(
          `Guess a number between 1 and 20 (Attempt ${attempts}/${maxAttempts}):`
          // 'Guess a number between 1 and 20 (Attempt ' + attempts + '/' + maxAttempts + ')'
        )
      );

      if (guess < randomNumber) {
        alert("Too low!");
      } else if (guess > randomNumber) {
        alert("Too high!");
      } else if (guess === randomNumber) {
        alert(`You guessed the number in ${attempts} attempts!`);
        return; // End the game
      } else {
        alert("Invalid input. Please enter a number between 1 and 20.");
        attempts--;
      }
    }

    alert(`You ran out of attempts. The number was ${randomNumber}.`);
  };

  return (
    <>

      <button onClick={() => alert('I have been clicked!!!')}>Click Me!</button>
      <button onClick={click}>Click Me Again!</button>

      <button onClick={checkAge}>Check for age</button>

      <button onClick={guessWizard}>Start Guess</button>
    </>
  );
}

export default App
