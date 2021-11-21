import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar></NavBar>
            <div className="row">
            <ItemListContainer class="Item block col-1" saludo="Bienvenidos a mi E-comerce 🙌🏼 " />
            <ItemCount></ItemCount>
            </div>
        </>
    );
}

export default App;
