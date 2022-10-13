import Header from './header';
import MenuTiles from './menutiles';
import { getData } from './getdata';

function App() {
    getData();
    return (
        <>
        <Header />
        <MenuTiles />
        </>
    )
}

export default App;