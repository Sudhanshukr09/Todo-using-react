import React from 'react'
import image from '../Assets/4891584.jpg'

const Left = () => {
  return (
    <div className='h-[79vh] w-[33vw] overflow-hidden rounded-lg bg-white xs:w-[40vh] xs:h-[30vh]'>
      <img src={image} className='w-[100%] h-[100%] object-contain '/>
    </div>
  )
}

export default Left
