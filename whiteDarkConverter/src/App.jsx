import { useEffect, useState } from 'react'
import './App.css'

function ToggleButton({ isWhite, setIsWhite }) {
  return <button onClick={() => setIsWhite(!isWhite)}>
    {isWhite ? 'DarkMode':'WhiteMode'}
  </button>
}

function App() {
  const [isWhite, setIsWhite] = useState(false)
  
  useEffect(() => {
    document.body.classList.toggle('white', isWhite);
  }, [isWhite])

  return (
    <>
      <h1>{isWhite ? '흰색임' : '검은색임' }</h1>
      <div className="card">
        <ToggleButton isWhite={isWhite} setIsWhite={setIsWhite}>딸깍</ToggleButton>
      </div>
    </>
  )
}

export default App
