import Header from './header';
import MenuTiles from './menutiles';
import { getData } from './getdata';
import { Menu } from './menu'
import { useState } from 'react';



function App() {
    const [ page, setPage ] = useState('Home')


    getData();
    return (
        <>
        <Header />
        <MenuTiles page={page} setPage={setPage} />
        <Menu page={page} setPage={setPage}/>
        </>
    )
}

export default App;