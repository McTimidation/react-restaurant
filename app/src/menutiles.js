import { useState } from "react";
import { pages } from './getdata';
import { ClickFunction } from './menu'


function MenuTiles(props) {

        return (
            <>
                <button onClick={() => props.setPage('Appetizers')}>Apps</button>
                <button>Drinks</button>
                <button onClick={() => props.setPage('Entrees')}>Entrees</button>
                <button onClick={() => props.setPage('Desserts')}>Desserts</button>
            </>
                )

    }
    export default MenuTiles

    // onClick={ClickFunction(drinks)}