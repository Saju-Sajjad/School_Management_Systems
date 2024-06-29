import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLogin);
  
  console.log(`ProtectedRoute: isLoggedIn - ${isLoggedIn}`);

  return isLoggedIn ? element : <Navigate to="/adminlogin" />;
};


ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired
};

export default ProtectedRoute;
