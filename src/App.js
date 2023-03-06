import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

const Timer = () =>{
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)

  const handleStartStop = () =>{
    setStart(start => !start)
  }

  const handleReset = () =>{
    setCount(0)
  }

  useEffect(()=>{
    const timer = setInterval(()=>{
      if(start){
        setCount(count => count + 1)
      }
    },1000)

    return () =>{
      clearInterval(timer)
    }
    
  },[start])

  return(
    <div>
      <h1>Timer: {count}</h1>
      <div>
        <Button type="primary" onClick={handleStartStop}>{start ? 'Stop' : 'Start'}</Button>
        <Button type="primary" onClick={handleReset} disabled={start}>Reset</Button>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Arsyandi</h1>
      <div className="card">
        <Timer />
      </div>
    </div>
  );
}

export default App;
