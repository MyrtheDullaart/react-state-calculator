import "./App.css"
import { useState } from "react"

function App() {
  const [firstNumber, setFirstNumber] = useState('0')
  const [secondNumber, setSecondNumber] = useState('0')
  const [operator, setOperator] = useState('+')
  const [total, setTotal] = useState('0')
  const [store, setStore] = useState('0')

  function handleClickFirstNumber(e) {
    if (!firstNumber.includes('.')) {
      if (firstNumber > 0 ) {
        setFirstNumber(firstNumber + e.target.innerText)
      } else {
        setFirstNumber(e.target.innerText)
      }
    } else if (firstNumber.includes('.') && e.target.innerText === '.') {
      if (firstNumber > 0 ) {
        setFirstNumber(firstNumber + '')
      } else {
        setFirstNumber(e.target.innerText)
      }
    } else {
      if (firstNumber > 0 || firstNumber === '.') {
        setFirstNumber(firstNumber + e.target.innerText)
      } else {
        setFirstNumber(e.target.innerText)
      }
    }
    
  }

  function handleClickSecondNumber(e) {
    if (!secondNumber.includes('.')) {
      if (secondNumber > 0 ) {
        setSecondNumber(secondNumber + e.target.innerText)
      } else {
        setSecondNumber(e.target.innerText)
      }
    } else if (secondNumber.includes('.') && e.target.innerText === '.') {
      if (secondNumber > 0 ) {
        setSecondNumber(secondNumber + '')
      } else {
        setSecondNumber(e.target.innerText)
      }
    } else {
      if (secondNumber > 0 || secondNumber === '.') {
        setSecondNumber(secondNumber + e.target.innerText)
      } else {
        setSecondNumber(e.target.innerText)
      }
    }
  }

  function handleClickOperator(e) {
    setOperator(e.target.innerText)
  }

  function handleClearFirstNumber() {
    setFirstNumber('0')
  }

  function handleClearSecondNumber() {
    setSecondNumber('0')
  }

  function handleCalculate() {
    setTotal(eval(firstNumber + operator + secondNumber))
  }

  function handleStore() {
    setStore(total)
  }

  function recallFirst() {
    setFirstNumber(store)
  }

  function recallSecond() {
    setSecondNumber(store)
  }
  
  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={handleClickFirstNumber}>1</button>
          <button onClick={handleClickFirstNumber}>2</button>
          <button onClick={handleClickFirstNumber}>3</button>
          <button onClick={handleClickFirstNumber}>4</button>
          <button onClick={handleClickFirstNumber}>5</button>
          <button onClick={handleClickFirstNumber}>6</button>
          <button onClick={handleClickFirstNumber}>7</button>
          <button onClick={handleClickFirstNumber}>8</button>
          <button onClick={handleClickFirstNumber}>9</button>
          <button onClick={handleClickFirstNumber}>0</button>
          <button onClick={handleClearFirstNumber}>Clear</button>
          <button onClick={recallFirst}>Recall</button>
          <button onClick={handleClickFirstNumber}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleClickOperator}>+</button>
          <button onClick={handleClickOperator}>-</button>
          <button onClick={handleClickOperator}>*</button>
          <button onClick={handleClickOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={handleClickSecondNumber}>1</button>
          <button onClick={handleClickSecondNumber}>2</button>
          <button onClick={handleClickSecondNumber}>3</button>
          <button onClick={handleClickSecondNumber}>4</button>
          <button onClick={handleClickSecondNumber}>5</button>
          <button onClick={handleClickSecondNumber}>6</button>
          <button onClick={handleClickSecondNumber}>7</button>
          <button onClick={handleClickSecondNumber}>8</button>
          <button onClick={handleClickSecondNumber}>9</button>
          <button onClick={handleClickSecondNumber}>0</button>
          <button onClick={handleClearSecondNumber}>Clear</button>
          <button onClick={recallSecond}>Recall</button>
          <button onClick={handleClickSecondNumber}>.</button>
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
