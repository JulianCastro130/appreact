import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer class="Item" saludo="Bienvenidos a mi E-comerce 🙌🏼 " />
        </>
    );
}

export default App;
