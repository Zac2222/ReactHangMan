
interface DisplayProps {
  guessedLetters: string[];
  wordToGuess: string;
}

const DisplayWord = ({guessedLetters, wordToGuess}: DisplayProps) => {
  
  
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
