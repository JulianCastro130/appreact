import './App.css';
import Efecto from './components/Efecto';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
//import Catalogo from './Views/Catalogo';

function App() {
    return (
        <BrowserRouter>
                    <Navbar />

            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/contador" element={<Efecto />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
