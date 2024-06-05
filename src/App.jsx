import React from 'react'
import Left from './components/Left'
import Right from './components/Right'

const App = () => {
  return (
    <>
      <div className=' flex justify-center mt-[-2rem] items-center gap-[7vw] h-[100vh] xs:flex-col'>
        <Left/>
        <Right/>
      </div>
    </>
  )
}

export default App
