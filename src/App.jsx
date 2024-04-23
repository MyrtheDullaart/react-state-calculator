import "./App.css"
import { useState } from "react"

function App() {
  const [firstNumber, setFirstNumber] = useState('0')
  const [secondNumber, setSecondNumber] = useState('0')
  const [operator, setOperator] = useState('+')
  const [total, setTotal] = useState('0')
  const [store, setStore] = useState('0')

  function handleClickFirstNumber(e) {
    if (firstNumber > 0 ) {
      setFirstNumber(firstNumber + e.target.innerText)
    } else {
      setFirstNumber(e.target.innerText)
    }
  }

  function handleClickSecondNumber(e) {
    if (secondNumber > 0 ) {
      setSecondNumber(secondNumber + e.target.innerText)
    } else {
      setSecondNumber(e.target.innerText)
    }
  }

  function handleClickOperator(e) {
    setOperator(e.target.innerText)
  }

  function handleClearFirstNumber(e) {
    e.stopPropagation()
    setFirstNumber('0')
  }

  function handleClearSecondNumber(e) {
    e.stopPropagation()
    setSecondNumber('0')
  }

  function handleCalculate() {
    setTotal(eval(firstNumber + operator + secondNumber))
  }

  function handleStore(e) {
    e.stopPropagation()
    setStore(total)
  }

  function recallFirst(e) {
    e.stopPropagation()
    setFirstNumber(store)
  }

  function recallSecond(e) {
    e.stopPropagation()
    setSecondNumber(store)
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
          <button onClick={recallFirst}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick={handleClickOperator}>
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
          <button onClick={recallSecond}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={handleCalculate}>=</button>
          <button onClick={handleStore}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
