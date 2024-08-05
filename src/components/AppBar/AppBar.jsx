import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.appBar}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts" className={styles.navLink}>
              Contacts
            </NavLink>
            <button
              className={styles.logoutButton}
              onClick={() => console.log('Logout')}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/register" className={styles.navLink}>
              Register
            </NavLink>
            <NavLink to="/login" className={styles.navLink}>
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
