import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components.js/Home';
import Text from './components.js/Text';
import Mainpage from './components.js/Mainpage';
import Productdetail from './components.js/Productdetail';
import Products from './components.js/Products';
import Simplecontextprovider from './components.js/Simplecontext';
import Sliderdemo from './components.js/Sliderdemo';
import Privacy from './components.js/Privacy';
import Terms from './components.js/Terms';
import Aboutus from './components.js/Aboutus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
      <Simplecontextprovider>
        <Routes>
          
        <Route exact path='text' element={<Sliderdemo/>}/>
          <Route path="/" element={< Home />}>
            <Route index element={<Mainpage />} />
            <Route path='detail/:id' element={<Productdetail />} />
            <Route path='product/:category' element={<Products />} />
            <Route path='privacy' element={<Privacy />} />
            <Route path='terms' element={<Terms />} />
            <Route path='aboutus' element={<Aboutus />} />
            

          </Route>
          
       
        </Routes>
        </Simplecontextprovider>
      </BrowserRouter>
    </div>
  );
}

export default App;
