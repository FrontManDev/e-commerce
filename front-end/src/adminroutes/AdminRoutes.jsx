import Dashboard from '../admin/pages/dahsboard/Dashboard';
import { Route } from 'react-router-dom';
import Orders from '../admin/pages/order/Orders';
import Users from '../admin/pages/users/Users';
import Products from '../admin/pages/poducts/Products';
import Category from '../admin/pages/category/Category';
import Notifications from '../admin/pages/notifications/Notifications';
import AddProducts from '../admin/pages/addproducts/AddProducts';
export default function AdminRoutes() {
    return (
        <>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/adminorders' element={<Orders />} />
            <Route path='/users' element={<Users />} />
            <Route path='/adminproducts' element={<Products />} />
            <Route path='/admincategory' element={<Category />} />
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/AddProducts' element={<AddProducts/>}/>
        </>
    )
}