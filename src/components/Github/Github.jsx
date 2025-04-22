import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

const Data=  useLoaderData()
// const [Data,setData] = useState("");
//   useEffect(()=>{
//     fetch('https://api.github.com/users/satyamkan10')
//     .then(res => res.json())
//     .then(Data =>{
//       console.log(Data);
//       setData(Data);
//     })
//   },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{Data.followers}
    <img src={Data.avatar_url} alt="" width={300} /></div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const res = await fetch('https://api.github.com/users/satyamkan10')

  return res.json();
}