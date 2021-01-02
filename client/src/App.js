import './styles/App.css';
import LandingPage from './components/LandingPage/LandingPage';
import ItemsMenu from './components/ItemsMenu/ItemsMenu';
import OrderForm from './components/OrderForm/OrderFrom';
import { useState } from 'react';

function App() 
{
  const [coffeeList, setCoffeeList] = useState([]);
  const [cookiesList, setCookiesList] = useState([]);
  const [orderMode, setOrderMode] = useState(false);

  return (
    <>
    <LandingPage />
    <ItemsMenu type='coffee' orderMode={orderMode} setOrderItemsList={setCoffeeList} />
    <ItemsMenu type='cookies' orderMode={orderMode} setOrderItemsList={setCookiesList}  />
    <OrderForm orderMode = {orderMode} setOrderMode={setOrderMode} coffee={coffeeList} cookies={cookiesList} />
    </>
  );
}

export default App;