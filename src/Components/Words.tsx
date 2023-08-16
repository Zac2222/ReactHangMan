import { useState } from "react"
import words from '../wordList.json'
const Words = () => {
    //sets a random word from the wordlist in the usestate
    const [wordGuess, setWordGuess] = useState(() => { 
        return words[Math.floor(Math.random() * words.length)]
    })
    const [gussedLetters, setGussedLetters] = useState<string[]>([]) //array of gussed letters


  return (
    <div className="textStyle">
        Lose
        Win
    </div>
  )
}

export default Words
