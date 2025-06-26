import Header from '../store/components/header/Header';
import Footer from '../store/components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
}
