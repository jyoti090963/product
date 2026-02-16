import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import RefreshHandler from './RefreshHandler';
import Navbar from './navbar';
import Homep from './pages/homep';
import Cart from './pages/cart';
import Aboutpage from './pages/about';
import Productpage from './pages/product';
import Singlep from './pages/singlep';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  // 🔥 AUTO LOGIN CHECK (MAIN REQUIREMENT)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // 🔐 PRIVATE ROUTE
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">

      {/* Navbar only after login */}
      {isAuthenticated && location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar setIsAuthenticated={setIsAuthenticated} />
      )}

      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>

        <Route
          path='/'
          element={
            isAuthenticated
              ? <Navigate to="/home" />
              : <Navigate to="/login" />
          }
        />


        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/signup' element={<Signup />} />

        {/* PROTECTED ROUTES */}
        <Route path='/Home' element={<PrivateRoute element={<Home />} />} />
       <Route path="/homep" element={<PrivateRoute element={<Homep />} />} />

        <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
        <Route path="/about" element={<PrivateRoute element={<Aboutpage />} />} />
        <Route path="/product" element={<PrivateRoute element={<Productpage />} />} />
        <Route path="/product/:id" element={<PrivateRoute element={<Singlep />} />} />

      </Routes>
    </div>
  );
}

export default App;
