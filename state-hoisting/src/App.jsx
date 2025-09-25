import './App.css'
import { useState } from 'react'

function App() {
  const [count, Setcount] = useState(0)
  return (
    <div>
      <Counter
        count = {count}
        onIncrement = {() => Setcount(prev => prev + 1)}
        />
    </div>
  )
}

function Counter({count, onIncrement}) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
        onClick={onIncrement}>
          증가
      </button>
    </div>
  )
}

export default App