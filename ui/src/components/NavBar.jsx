import styles from "../css/NavBar.module.css";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function NavBar() {
  const user = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>Safe Server</div>
        <div className={styles.buttons}>
          {user ? (
            <div
              className={styles.secondary}
              onClick={() => {
                window.location.href = "/auth/logout";
              }}
            >
              Log out
            </div>
          ) : (
            <>
              <div
                className={styles.secondary}
                onClick={() => {
                  window.location.href = "/auth/login";
                }}
              >
                Login
              </div>
              <div
                className={styles.primary}
                onClick={() => {
                  window.location.href = "/auth/login";
                }}
              >
                Sign up
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
