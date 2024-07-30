
import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [isOpen, setIsOpen] =useState(false)

  return (
    <>
     {!isOpen && <button onClick={()=>setIsOpen(true)}>Open Modal</button>}
    {isOpen && <Modal setIsOpen={setIsOpen}/>}
    </>
  )
}

export default App
