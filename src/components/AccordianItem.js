import React from 'react'

const AccordianItem = ({showItem , setShowItem, title , description}) => {
    const handleClick= ()=>{
        setShowItem(!showItem)
        
    }
  return (
    <div>
      <div onClick={handleClick} className='flex justify-between items-center  border-black border bg-gray-300'>
        <span className='font-bold p-2'>{title}</span>
        <span className='text-4xl p-2'> ⌄ </span>
      </div>
     <div className='p-2'>
      {showItem && description}
      </div>
    </div>
  )
}

export default AccordianItem
