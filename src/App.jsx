import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Compiler from './components/Compiler'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Compiler />
    </div>
  )
}

export default App
