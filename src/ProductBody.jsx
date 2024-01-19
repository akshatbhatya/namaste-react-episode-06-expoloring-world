import React, { useEffect, useState } from 'react'
import "./ProductBody.css"
import Card from './Card'

function ProductBody() {
    let [product, setProduct] = useState([])
    useEffect(() => {

        async function getdata() {
            let url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.62984520058017&lng=74.83495283871889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

            try {
                let response = await fetch(url)
                let jsonData = await response.json()
                let data = (jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
                let AllProduct = []
                for (let i = 0; i < data.length; i++) {
                    AllProduct.push(data[i].info);

                }
                setProduct(AllProduct)

            } catch (error) {
                console.log(error);

            }
        }
        getdata()
    }, [])
    if(product.length==0){
       return <h1>loading...</h1>
    }



    console.log(product);

    let handleTop = () => {
        let sorted = product.filter((product) => product.avgRating > 4)
        setProduct(sorted)
    }
    return (

        <>
            <button onClick={handleTop}>top rated</button>
            <div className='productbody-parent'>


                {product.map((card) => (
                    <Card card={card} key={card.id} />
                ))}



            </div>
        </>
    )
}

export default ProductBody



