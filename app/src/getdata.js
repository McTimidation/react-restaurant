import axios from 'axios';
import { useEffect } from 'react';

// call api to be stored in STATE. STATE object can be called and updated as user clicks different links
const pages = { 
            apps: [],
            drinks: [],
            entrees: [],
            desserts: [],
            }



function getData() {
    axios.get('https://8000-mctimidatio-backendbist-ykff0egyo4x.ws-us75.gitpod.io/menu_items/')
        .then((data) => {
            data.data.forEach(data => {
            switch (data.category_id) {
                case 3:
                    pages.apps.push(data)
                    break;
                case 2:
                    pages.entrees.push(data) 
                    break;
                case 5:
                    pages.desserts.push(data) 
                    break;
            }
        }
    )
    })
}
export { pages }
export { getData }
