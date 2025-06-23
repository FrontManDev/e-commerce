import {Routes,Route} from 'react-router-dom'; 
import './App.css';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Home from '../src/pages/home/Home';
import Contact from './pages/contact/Contact';
import Registration from './pages/registration/Registration';
import Profile from './pages/profile/Profile';
import Cart from './pages/cart/Cart';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;