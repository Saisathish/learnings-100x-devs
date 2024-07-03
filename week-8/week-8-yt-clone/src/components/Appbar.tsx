import React from 'react'
import Searchbar from './Searchbar'

const Appbar = () => {
  return (
    <div className='flex justify-between items-center p-3'>
      <div>Youtube</div>
      <Searchbar />
      <div>Signin</div>
    </div>
  )
}

export default Appbar