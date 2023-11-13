import axios from 'axios';

// call api to be stored in STATE. STATE object can be called and updated as user clicks different links
const pages = { 
            apps: [],
            drinks: [],
            entrees: [],
            desserts: [],
            }



function getData() {
    console.log("There is a CORS issue with this API, you can install an 'allow CORS' chrome extension to see the full menu")
    axios.get('https://www.jsonkeeper.com/b/MDXW')
        .then((data) => {
            data.data.forEach(data => {
            switch (data.category) {
                case "Appetizer":
                    if (pages.apps.length < 14) {
                    pages.apps.push(data) }
                    break;
                case "Dinner":
                    if (pages.entrees.length < 15) {
                    pages.entrees.push(data) }
                    break;
                case "Drink":
                    if (pages.desserts.length < 3) {
                    pages.desserts.push(data) }
            }
        })
        })
    
    
}

export { pages }
export { getData }
