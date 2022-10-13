import { pages } from './getdata';



export function Menu(props) {



    let Food;
    switch (props.page) {
        case 'Appetizers':
            Food = pages.apps
            break;
        case 'Entrees':
            Food = pages.entrees
            break;
        case 'Desserts':
            Food = pages.desserts
            break;
        case 'Drinks':
            Food = null
            break;
        default: 
            Food = null;
        
    }
    if (Food) {
        Food.forEach(item =>{
                return (
                    <ul>
                        <li>{item.title}
                            <ul>
                                <li>{item.description}</li>
                                <li>${item.price}</li>
                            </ul>
                        </li>
                    </ul>
                )
            })
    } else {
        return (
            null
        )
    }
}



