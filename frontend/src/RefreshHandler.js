import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);

            // Redirect to /home only if on login, signup, or root
            if (['/', '/login', '/signup'].includes(location.pathname)) {
                navigate('/home', { replace: true }); // replace true avoids back button going to login
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [location.pathname, navigate, setIsAuthenticated]);

    return null;
}

export default RefreshHandler;
