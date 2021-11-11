import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Basket from './components/Basket';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar>
      </NavBar>
      <div className="row">
      <ItemListContainer greeting="hola" />
      <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
