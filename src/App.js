import NavBar from './components/NavBar';
import Main from './components/Main';
import Basket from './components/Basket';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="row">
      <Main></Main>
      <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
