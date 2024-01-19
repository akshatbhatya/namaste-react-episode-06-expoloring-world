// export let FetchData=async ()=>{

//     try {
//         let response =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.62984520058017&lng=74.83495283871889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//         let jsonData=await response.json()
//         console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

export let FetchData = async () => {
    try {
        let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.62984520058017&lng=74.83495283871889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let jsonData = await response.json();

       
        if (jsonData.data && jsonData.data.cards[4] && jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]) {
            // Extract the info array
            let infoArray = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info;

            // Use map to create a new card for each element in the info array
            let newCards = infoArray.map((info) => {
                // Create a new card structure based on your requirements
                return {
                    // Define the properties of the new card based on the info element
                    // Example: name, id, etc.
                    name: info.name,
                    id: info.id,
                    // Add more properties as needed
                };
            });

            // Log the new cards array
            console.log(newCards);
        } else {
            console.log("Data structure is not as expected.");
        }
    } catch (error) {
        console.log(error);
    }
};
