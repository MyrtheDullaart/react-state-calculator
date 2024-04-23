import "./App.css"
import { useState } from "react"

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)

  function handleClickFirstNumber(e) {
    setFirstNumber(e.target.innerText)
  }

  function handleClickSecondNumber(e) {
    setSecondNumber(e.target.innerText)
  }

  function handleClearFirstNumber(e) {
    e.stopPropagation()
    setFirstNumber(0)
  }

  function handleClearSecondNumber(e) {
    e.stopPropagation()
    setSecondNumber(0)
  }
  
  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers" onClick={handleClickFirstNumber}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button onClick={handleClearFirstNumber}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers" onClick={handleClickSecondNumber}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button onClick={handleClearSecondNumber}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>0</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
