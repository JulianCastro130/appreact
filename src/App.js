import NavBar from './components/NavBar';
import Main from './components/Main';
import Basket from './components/Basket';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar>
      </NavBar>
      <div className="row">
      <Main></Main>
      <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
