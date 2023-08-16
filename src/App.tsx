import HangmanImage from "./Components/HangmanImage"
import Words from "./Components/Words"
import "./App.css"

const App = () => {
  return (
    <div className="mainStyle">
      <Words/>
      <HangmanImage/>
    </div>
  )
}

export default App
