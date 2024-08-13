import React from 'react'

const MemeCard = ({data}) => {
    const {title , url } = data;
  return (
    <div className='w-72 border-black border m-2 p-4 rounded-lg bg-white hover:bg-orange-600'>
       
       <h1 className='font-semibold text-lg text-wrap p-2'>{title}</h1>
       <img className='pt-4' src={url} alt='meme-image'/>
      
    </div>
  )
}

export default MemeCard
