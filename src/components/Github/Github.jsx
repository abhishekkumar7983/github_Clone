import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data=useLoaderData()
      console.log(data);
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/abhishekkumar7983`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //    setData(data);
    //     })
    // }
    //     ,[]
    // )
  return (
    <div className='bg-gray-500 text-white text-3xl p-4 '>Github Followers : {data?.followers}
    <img src={data?.avatar_url}  alt="my picture" width={300} />
    </div>
  )
}
export default Github

export const githubInfoLoader =async () => {
    const response=await fetch(`https://api.github.com/users/abhishekkumar7983`);
    return response.json();
}

