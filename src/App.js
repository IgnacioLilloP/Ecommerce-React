
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer';
import Footer from './componentes/Footer';
import Shop from './componentes/Shop';
import Category from './componentes/category';
import Promo from './componentes/Promo';
import Blog from './componentes/ShopSport';
import ProductPage from './componentes/ProductPage';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido a la primera entrega de react"}/>
    <Shop/>
    <Category/>
    <Blog/>
    <Promo/>
    <Footer/>
    
    </>
  );
}

export default App;
