
import { useState, useCallback ,useEffect, useRef} from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hooks

  const passwordRef = useRef(null)

 
  const passwordGenerator = useCallback(() => {
 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"

    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, 
    [length, numberAllowed, charAllowed, setPassword])


    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() =>{passwordGenerator()

    }, [length, numberAllowed, charAllowed, passwordGenerator])

  
  return (
    <>
      
      <div className='w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-auto'>
      <h1 className='text-center text-white'>Password Generator</h1>
       <div className='flex mb-4 overflow-hidden rounded-lg shadow'> 
        <input type='text' value={password} className='w-full px-3 py-1 outline-none' 
        placeholder='Password' 
        readOnly 
        ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
       </div>

       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
         <input type='range' 
         min={6} 
         max={100} 
         value={length} 
         className='cursor-pointer'
         onChange={(e) =>{setLength(e.target.value)}}/>
         <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {setNumberAllowed((prev) => !prev);}}></input>
          </div>
          <label htmlFor='numberInput'>Numbers</label>
       

       <div className='flex item-center gap-x-1'>

        <input type='checkbox'
        defaultChecked={charAllowed}
        id='charInput'
        onChange={() => {setCharAllowed((prev) => !prev);}}></input>
       </div>

       <label htmlFor='charInput'>Charactors</label>
       </div>
      </div>
    </>
  )
}

export default App
