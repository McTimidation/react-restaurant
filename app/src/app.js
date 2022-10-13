import Header from './header';
import MenuTiles from './menutiles';
import { getData } from './getdata';
import { Menu } from './menu'
import { useState } from 'react';
import Footer from './footer';



function App() {
    const [ page, setPage ] = useState('Home')


    getData();
    return (
        <>
        <Header />
        <MenuTiles page={page} setPage={setPage} />
        <Menu page={page} setPage={setPage}/>
        <Footer />
        </>
    )
}

export default App;