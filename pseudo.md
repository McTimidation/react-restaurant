# React Restaurant

Using an api with the data, create a website for a restaurant. Show a menu for the data from the API. Make it responsive. Make it sexy.

## Revolutionary Pour
- American Revolution themed bar and restaurant

## Identifying Components/UI

### Homepage
- a hero image on page load. Sound roudy rebels pounding some brews?

- the logo for RP centered at bottom of image. 

- a tile (maybe with background image) that links to specific menu

- 4 tiles centered on homepage Apps (& Drinks?), Desserts, Entrees, Brunch? or Drinks? (With a name like revolutionary pour you really need a robust drink menu)

- footer with address, hours, phone number (maybe a map!)

### Menu page (4)
- logo centered at top. background image?

- 3 links to each of the other menus

- same footer as homepage

- 3 menu items per row, display name, description, price, (spice level and image?)

- 1 per row on mobile

- 2 for tablets?

## Functionality/STATE overviews

- Home page should open to hero image, then either let the use scroll or scroll automatically if the user doesn't after certain amount of time

- Logo should be at the bottom of page on load, then as the page loads, scroll down off of the hero image, while simultaneously scrolling up relative to the page, so that when the user is looking at the portion of the page with the icons, the hero image is off screen and the logo is at the top.

- each tile should display the corresponding menu when clicked, accessed while staying within the page.

- hover effect on the tiles?

- the menu page will display data from the api, which is called on page load and stored in STATE

- menu will loop through data from api to display menu items on page.


## Break It Down Piece By Piece

- bootstrap a hero image with logo. fun scroll can be a stretch goal.
 - pure function component to display hero and logo
 function Image() {
    return (
        <img src=''>
    )
 }
 function Header() {
    return(
        <>
            <Image />
            <h1>Revolutionary Pour</h1>
        </>
    )
 }

- menu tile, 2 rows of 2 for desktop, stacked vertically for mobile
 - will navigate to corresponding menu page when clicked

<!-- import ClickFunction from 'clickfunction'; -->

function MenuTiles(props) {
<!-- click function should be imported to this component -->
    return (
        <>
            <button onClick={ClickFunction(apps)}>Apps</button>
            <button onClick={ClickFunction(drinks)}>Drinks</button>
            <button onClick={ClickFunction(entrees)}>Entrees</button>
            <button onClick={ClickFunction(desserts)}>Desserts</button>
        </>
            )
}
export default MenuTiles


- call api to be stored in STATE. STATE object can be called and updated as user clicks different links
pages = { 
            apps: [],
            drinks: [],
            entrees: [],
            desserts: [],
            }

import axios from 'axios';

async function getData() {
   await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
        .then((data) => {
            data.forEach((data) => {
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

- once the button on home page is clicked, it will call this function to display the data.

function ClickFunction(props) {
    props.forEach(item) => {
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
    }
}



