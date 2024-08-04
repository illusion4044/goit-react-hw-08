// src/components/RestrictedRoute/RestrictedRoute.jsx
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ element, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? element : <Navigate to={redirectTo} />;
};

RestrictedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RestrictedRoute;
