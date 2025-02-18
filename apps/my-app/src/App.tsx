import { useState } from 'react'
import { Alert } from '@trussworks/react-uswds'
import { MyComponent } from 'my-component-library'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alert type="success" headingLevel="h4">
        This is my test app
      </Alert>

      <MyComponent />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
