import './NotFound.css';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h2 className="not-found-title">Oops! Page Not Found</h2>
            <h1 className="not-found-code">404</h1>
            <NavLink to='/' className="not-found-link">Go To Home</NavLink>
        </div>
    );
}