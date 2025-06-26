import { Route } from "react-router-dom";
import Product from '../store/pages/product/Product';
import ProductDetails from '../store/pages/productdetails/ProductDetails';
import Orders from '../store/pages/orders/Orders';
import Home from '../store/pages/home/Home';
import Contact from '../store/pages/contact/Contact';
import Registration from '../store/pages/registration/Registration';
import Profile from '../store/pages/profile/Profile';
import Cart from '../store/pages/cart/Cart';
export default function UserRoutes() {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Product />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/orders" element={<Orders />} />
        </>
    )
}