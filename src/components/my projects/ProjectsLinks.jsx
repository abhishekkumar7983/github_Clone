import React, { useEffect, useState } from 'react'

export const ProjectsLinks = ({userId,repoData}) => {
    

    function formatDate(inputDate) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
        return formattedDate;
      }
      const openRepo = (link)=>{
        console.log("link",link)
        window.open(link,"_blank");
      }
  return (
  <div>
     {repoData.map( (data,index) => {
        const mode = data.private ? "private" : "public ";
        return (
            <div key={index}>
              <div>
                <span  onClick={()=>{openRepo(data.html_url)}}    className='text-2xl'>
                 {data.name}
                </span>
                <span className='ml-3 border px-2 text-gray-700 rounded-lg py-1 text-sm' >  
                  {mode}
                </span>
               </div >   
               <div>
               updated at {formatDate(data.updated_at)}
                </div>           
       <hr className='mt-5 mr-48' />
        </div>
        ) 
     })}
  </div>
  )
}
