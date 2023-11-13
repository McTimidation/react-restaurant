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
    if (Food) {
        const menuItems = Food.map((item) =>
        
            <li className='col-6' ><h4>{item.title}</h4> 
                <ul><li key={item.id.toString()}>{item.description} <b>{item.price}</b></li></ul>
                    </li>
            )
            // console.log(item)
            // console.log(item.title)
            // console.log(item.description)
            // console.log(item.price)
            // let name = item.title
            // let bio = item.description
            // let price = item.price
            return (
                <div className="bg-dark card px-4 py-5">
                    <ul className='text-white row'>
                        {menuItems}
                    </ul>
                </div>
        ) 
    } else {
        return (
            null
        )
    }
}


