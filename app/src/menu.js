import { pages } from './getdata';



export function Menu(props) {
    console.log(props)
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
        
    } console.log(Food)
    let name = [];
    if (Food) {
        Food.forEach(item => {
            name.push(<li>{item.title} {item.price}<ul><li>{item.description}<br></br></li></ul></li>)
            console.log(item)
            console.log(item.title)
            console.log(item.description)
            console.log(item.price)
            // let name = item.title
            // let bio = item.description
            // let price = item.price
                
            }); 

                return (
                
                    <ul>
                        {name}
                    </ul>
                
            ) 
    } else {
        return (
            null
        )
    }
}



