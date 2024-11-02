import { useState } from "react"


function App() {
  
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
     
   <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
         <button onClick={() => setColor("red")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"red"}}
         >Red</button>

         <button onClick={() => setColor("green")} 
          className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"green"}}
         >Green</button>
         <button onClick={() => setColor("blue")} 
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"blue"}}
         >Blue</button>
         <button onClick={() => setColor("gray")} 
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"gray"}}
         >Gray</button>
         <button onClick={() => setColor("purple")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"purple"}}
         >Purple</button>
         <button onClick={() => setColor("turquoise")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"turquoise"}}
         >Turquoise</button>
         <button onClick={() => setColor("pink")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"pink"}}
         >Pink</button>
         <button onClick={() => setColor("olive")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"olive"}}
         >Olive</button>
         <button onClick={() => setColor("teal")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"teal"}}
         >Teal</button>
         <button onClick={() => setColor("maroon")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"maroon"}}
         >Maroon</button>
         <button onClick={() => setColor("violet")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"violet"}}
         >Violet</button>
         <button onClick={() => setColor("indigo")}
         className="px-4 py-1 text-white rounded-full shadow-lg outline-none" 
         style={{backgroundColor:"indigo"}}
         >Indigo</button>
        </div>
      </div>


    </div>
  )
}

export default App
