import React from 'react'
import "./Card.css"

function Card({card}) {

    let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/"

    let {name,cloudinaryImageId,locality,areaName,costForTwo,cuisines,avgRating}=card
  return (
    <div className='card'>

        <div className="img">
            <img src={url+cloudinaryImageId} alt={url} />
        </div>
        <h4>{name}</h4>
        <h4>{areaName}</h4>
        <h4>{locality}</h4>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      
    </div>
  )
}

export default Card
