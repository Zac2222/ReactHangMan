import HangmanImage from "./Components/HangmanImage"
import Words from "./Components/Words"
import "./App.css"
import DisplayWord from "./Components/DisplayWord"
import Letters from "./Components/Letters"
import { useEffect, useState } from "react"

const App = () => {

  const [gussedLetters, setGussedLetters] = useState<string[]>([]) //array of gussed letters
  const wordToGuess = '';

  
  
  return (
    <div className="mainStyle">
      <Words/>
      <DisplayWord guessedLetters={gussedLetters} wordToGuess={wordToGuess}/>
      <Letters/> 
    </div>
  )
}

export default App
