import { useState } from 'react'
// import './App.css'
import Create from './Create Page/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
  
  <div className='mx-auto mt-4 min-w-full'>
    <Create/>
    </div>
   
  
    
  )
}

export default App
