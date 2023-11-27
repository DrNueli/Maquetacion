// simon.js
let sequence = [];
let userSequence = [];
let colors = ['red', 'green', 'blue', 'yellow'];

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('check-sequence').addEventListener('click', checkSequence);
document.getElementById('continue-game').addEventListener('click', continueGame);
document.getElementById('reset-game').addEventListener('click', resetGame);

function startGame() {
  sequence = [getRandomColor()];
  userSequence = [];
  showSequence();
}

function showSequence() {
  let i = 0;
  let interval = setInterval(function() {
    flashColor(sequence[i]);
    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
    }
  }, 600);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function flashColor(color) {
  let colorElement = document.getElementById(color);
  let originalColor = colorElement.style.backgroundColor;
  colorElement.style.backgroundColor = 'white';
  setTimeout(function() {
    colorElement.style.backgroundColor = originalColor;
  }, 300);
}

function checkSequence() {
  let isCorrect = userSequence.length === sequence.length && userSequence.every(function(value, index) {
    return value === sequence[index];
  });

  if (isCorrect) {
    document.getElementById('message').textContent = '¡Correcto!';
    document.getElementById('continue-game').disabled = false;
  } else {
    document.getElementById('message').textContent = 'Incorrecto, intenta de nuevo.';
  }
}

function continueGame() {
  sequence.push(getRandomColor());
  userSequence = [];
  document.getElementById('continue-game').disabled = true;
  showSequence();
}

function resetGame() {
  sequence = [];
  userSequence = [];
  document.getElementById('message').textContent = '';
  document.getElementById('continue-game').disabled = true;
}

// Add event listeners for color buttons
colors.forEach(function(color) {
  let colorElement = document.getElementById(color);
  colorElement.addEventListener('click', function() {
    userSequence.push(color);
    flashColor(color);
  });
});
