import React, { useEffect } from 'react'
import "./ProductBody.css"
import Card from './Card'
import { FetchData } from '../Utils/Data';
function ProductBody() {
    useEffect(()=>{
        FetchData()
    },[])
  return (

    <>
    <button>Filter Data</button>
    <div className='productbody-parent'>

        <Card/>
      
    </div>
    </>
  )
}

export default ProductBody
