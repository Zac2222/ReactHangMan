
const head = (<div className="head"/>)
const body = (<div className="body"/>)
const armRight = (<div className="armRight"/>)
const armLeft = (<div className="armLeft"/>)
const legRight = (<div className="legRight"/>)
const legLeft = (<div className="legLeft"/>)
const limbs = [head, body, armRight, armLeft, legRight, legLeft]

interface Props {
  guessNumber: number;
}


const HangmanImage = ({guessNumber}: Props) => {
  return (
    <div className="manImage">
      {limbs.slice(0, guessNumber)}
      <div className="hook"/>
      <div className="topBar"/>
      <div className="pole"/>
      <div className="base"/>
      <div />
    </div>
  )
}

export default HangmanImage
