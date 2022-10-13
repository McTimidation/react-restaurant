import axios from 'axios';

// call api to be stored in STATE. STATE object can be called and updated as user clicks different links
const pages = { 
            apps: [],
            drinks: [],
            entrees: [],
            desserts: [],
            }



async function getData() {
    await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
        .then((data) => {
            // console.log(data.data[0].category.title)
            data.data.forEach(data => {
            switch (data.category.title) {
                case "Appetizer":
                    pages.apps.push(data)
                    break;
                case "Dinner":
                    pages.entrees.push(data)
                    break;
                case "Dessert":
                    pages.desserts.push(data)
                    break;
            }
        })
        })
    
}

export { getData }
export { pages }
