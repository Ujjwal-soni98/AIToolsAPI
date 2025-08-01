import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [aiTools, setAiTools] = useState([]);
  const NoOfAiTools = aiTools.length;
  
  useEffect(()=>{
    axios.get('/api/aiTools')
    .then((response) => {
      setAiTools(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [aiTools])
  return (
    <>
        <h1>Hello Backend !!</h1>
        <p>Total AI Tools Listed: {NoOfAiTools}</p>
        {
              aiTools.map((tools, index)=>(
                  <div key = {tools.id}>
                    <h3>{tools.title}</h3>
                    <p>{tools.famousFor}</p>
                  </div>
              
              ))

        }
    </>
  )
}

export default App
