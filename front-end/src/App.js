import { Routes, Route } from 'react-router-dom';
import './App.css';

import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

import NotFound from './store/pages/notfound/NotFound';
import AdminRoutes from './adminroutes/AdminRoutes';
import UserRoutes from './userroutes/UserRoutes';
function App() {
  return (
    <Routes>

      <Route element={<UserLayout />}>
        {UserRoutes()}
      </Route>

      <Route element={<AdminLayout />}>
        {AdminRoutes()}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
