import axios from 'axios';

// call api to be stored in STATE. STATE object can be called and updated as user clicks different links
const pages = { 
            apps: [],
            drinks: [],
            entrees: [],
            desserts: [],
            }



function getData() {
    axios.get('https://www.jsonkeeper.com/b/MDXW')
        .then((data) => {
            data.data.forEach(data => {
            switch (data.category.title) {
                case "Appetizer":
                    if (pages.apps.length < 14) {
                    pages.apps.push(data) }
                    break;
                case "Dinner":
                    if (pages.entrees.length < 31) {
                    pages.entrees.push(data) }
                    break;
                case "Dessert":
                    if (pages.desserts.length < 12) {
                    pages.desserts.push(data) }
            }
        })
        })
    
    
}

export { pages }
export { getData }
