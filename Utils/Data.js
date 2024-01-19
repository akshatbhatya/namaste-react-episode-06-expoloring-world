export let FetchData=async ()=>{

    try {
        let response =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.62984520058017&lng=74.83495283871889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let jsonData=await response.json()
        console.log(jsonData);
        
    } catch (error) {
        console.log(error);
        
    }
    
}