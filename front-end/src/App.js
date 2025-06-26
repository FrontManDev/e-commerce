import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './store/components/header/Header';
import Footer from './store/components/footer/Footer';
import Home from './store/pages/home/Home';
import Contact from './store/pages/contact/Contact';
import Registration from './store/pages/registration/Registration';
import Profile from './store/pages/profile/Profile';
import Cart from './store/pages/cart/Cart';
import NotFound from './store/pages/notfound/NotFound';
import Product from './store/pages/product/Product';
import ProductDetails from './store/pages/productdetails/ProductDetails';
import Orders from './store/pages/orders/Orders';
import Dashboard from './Admin/Dashboard';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;