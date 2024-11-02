import React, { useState , useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

//   const [data , setData] = useState([])
  
//   useEffect(() => {
//     fetch('https://api.github.com/users/neerajcoder2000')
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);
//         setData(data)
        
//     })
   
//   }, [])
  

  return (
    <div className='p-4 text-3xl text-center text-white bg-gray-600'>
    Github Followers: {data.followers}
    <img src={data.avatar_url} alt='Git Picture' width={300}></img>
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () =>{
   const resonse = await fetch('https://api.github.com/users/neerajcoder2000')
   return resonse.json()
} 