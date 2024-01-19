import React, { useEffect, useState } from 'react'
import "./ProductBody.css"
import Card from './Card'
import ShimerUi from './ShimerUi'

function ProductBody() {
    let [product, setProduct] = useState([])
    let [search,setSearch]=useState([])
    let[searchData,setSearchData]=useState([])
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
                setSearchData(AllProduct)

            } catch (error) {
                console.log(error);

            }
        }
        getdata()
    }, [])
    if(product.length==0){
       return <ShimerUi/>
    }
  console.log("ProductBody rendered");

    let handleTop = () => {
        let sorted = product.filter((product) => product.avgRating > 4)
        setProduct(sorted)
    }
    let handleSearch=()=>{
        if(search==""){
            setSearchData(product)
            return

        }
        let sortedSerch=product.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()));
        setSearchData(sortedSerch)
    }
    return (

        <>
           <input type="text" placeholder='type name here'  onChange={(e)=>setSearch(e.currentTarget.value)}/>
           <button onClick={handleSearch}>search</button>
            <button onClick={handleTop}>top rated</button>
            <div className='productbody-parent'>


                {searchData.map((card) => (
                    <Card card={card} key={card.id} />
                ))}



            </div>
        </>
    )
}

export default ProductBody



