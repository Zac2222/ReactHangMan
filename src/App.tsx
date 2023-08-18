import HangmanImage from "./Components/HangmanImage"
import Words from "./Components/Words"
import "./App.css"
import DisplayWord from "./Components/DisplayWord"
import Letters from "./Components/Letters"
import { useEffect, useState } from "react"

const App = () => {

  const [gussedLetters, setGussedLetters] = useState<string[]>([]) //array of gussed letters
  const wordToGuess = '';
  
  const [gameStatus, setGameStatus] = useState("ongoing");
  const addGuessedLetter = (letter: string) => {
    setGussedLetters((prevLetters) => [...prevLetters, letter]);
  };


  return (
    <div className="mainStyle">
      <Words />
      <DisplayWord guessedLetters={gussedLetters} wordToGuess={wordToGuess} />
      <Letters
        activeLetters={gussedLetters} // Pass your guessed letters
        inactiveLetters={gussedLetters} // Pass your guessed letters
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  )
}

export default App
