var wordBank = ["foo fighters", "metallica", "tool", "jimi hendrix", "nirvana",]


// startGame()

// function startGame() {
  var guesses = 0

  var word = wordBank[Math.floor(Math.random() * wordBank.length)]

  console.log(word)

  var brokenDown = list(word)
  console.log(brokenDown)

  console.log(brokenDown.length)

  // reset the guess and success array at each round. Array of letters (first array, for succesful guesses)
  // reset the wrong guesses from the previous round. Array of letters (second arrays, one for fails)\
  var numBlanks = brokenDown.length
  for (var i = 0; i < numBlanks; i++) {

    getElementById("answerBlanks")
  }
}
