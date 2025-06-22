import {Routes,Route} from 'react-router-dom'; 
import './App.css';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Home from '../src/pages/home/Home';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;