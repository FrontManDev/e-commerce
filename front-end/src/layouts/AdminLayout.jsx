import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/componenst/SideBar';
import './AdminLayout.css';
export default function AdminLayout() {
  return (
    <div className='admin-layout'>
      <Sidebar />
      <Outlet />
    </div>
  );
}
