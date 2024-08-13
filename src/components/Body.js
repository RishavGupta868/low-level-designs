import React from 'react'
import { useEffect, useState } from "react";
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';
const Body = () => {
    const [meme,setMeme]= useState(null)

  const fetchMemes = async ()=>{

    const data = await fetch('https://meme-api.com/gimme/20');
    const json = await data.json();
    
    setMeme(json.memes)
  }
  useEffect(()=>{
    fetchMemes();
  },[])
  if(!meme) return <Shimmer/>
  return (

    <div className='flex flex-row flex-wrap bg-orange-400 pl-9'>
        {meme && meme.map((element,index)=>{
            return(
                <MemeCard key={index} data={element} />
            )
        })}
     
        
            
        
    
    </div>
  )
}

export default Body
