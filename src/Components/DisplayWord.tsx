
interface DisplayProps {
  guessedLetters: string[];
  wordToGuess: string;
}

const DisplayWord = ({guessedLetters, wordToGuess}: DisplayProps) => {
  // const word = wordToGuess.split("");
  // const guessed = guessedLetters.includes(wordToGuess);
  // console.log("wordToGuess:", wordToGuess);
  // console.log("guessedLetters:", guessedLetters);
    // const word = 'bloop';
    // const guessedLetters = ['p','o', 'z']

    return (    
      <div className="display">
          {wordToGuess.split("").map((letter, index) => (
             <span className="underline" key={index}>
              <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>
                {letter}</span>
             </span>

             
          ))}
      </div>
  )
}

export default DisplayWord
