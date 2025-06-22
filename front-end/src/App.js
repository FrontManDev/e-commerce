import {Routes,Route} from 'react-router-dom'; 
import './App.css';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Home from '../src/pages/home/Home';
import Contact from './pages/contact/Contact';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;