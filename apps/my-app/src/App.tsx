import { useState } from 'react'
import { MyComponent, MyOtherComponent } from 'my-component-library'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
      <MyOtherComponent />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
