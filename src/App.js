
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Category from './components/category';
import Promo from './components/Promo';
import ShopSport from './components/ShopSport';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido a la primera entrega de react"}/>
    <Shop/>
    <Category/>
    <ShopSport/>
    <Promo/>
    <Footer/>
    
    </>
  );
}


export default App;
