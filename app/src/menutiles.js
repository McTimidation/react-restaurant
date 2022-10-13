import ClickFunction from './clickfunction';
import { pages } from './getdata'

function MenuTiles() {
    // click function should be imported to this component
        return (
            <>
                <button onClick={ClickFunction(pages.apps)}>Apps</button>
                <button>Drinks</button>
                <button onClick={ClickFunction(pages.entrees)}>Entrees</button>
                <button onClick={ClickFunction(pages.desserts)}>Desserts</button>
            </>
                )
    }
    export default MenuTiles

    // onClick={ClickFunction(drinks)}