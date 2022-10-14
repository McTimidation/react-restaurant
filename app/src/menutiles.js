import { useState } from "react";
import { pages } from './getdata';
import { ClickFunction } from './menu';



function MenuTiles(props) {
    
        return (
            <div className='bg-dark text-secondary px-4 py-5 text-center'>
                <button className="btn btn-outline-light" onClick={() => props.setPage('Appetizers')}>Apps</button>
                <button className="btn btn-outline-light" >Drinks</button>
                <button className="btn btn-outline-light" onClick={() => props.setPage('Entrees')}>Entrees</button>
                <button className="btn btn-outline-light" onClick={() => props.setPage('Desserts')}>Desserts</button>
            </div>
                )

    }
    export default MenuTiles

    // onClick={ClickFunction(drinks)}