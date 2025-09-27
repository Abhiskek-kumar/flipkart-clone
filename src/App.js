
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Detailview from './components/dettails/Detailview';
import Cart from './components/cart/Cart';
import LoginPlaceOrder from './components/LoginPlaceOrder/LoginPlaceOrder';
 import PaymentOpstion from './payments/PaymentOpstion';
import { Box } from '@mui/material';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
          <Route path='/' element={  <Home />   }/>
          <Route path='product/:id' element ={<Detailview/>}/>
          <Route path='/cart' element ={<Cart/>}/>
            <Route path="/LoginplaceOrder" element={<LoginPlaceOrder />} /> 
               <Route path="/PaymentOpstion" element={<PaymentOpstion />} />
          </Routes>
          
        </Box>
</BrowserRouter>
    </div>
  );
}

export default App;
