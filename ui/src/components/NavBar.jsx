import styles from "../css/NavBar.module.css";
import { useAuthContext } from "@asgardeo/auth-react";

function NavBar() {
  const { state, signIn, signOut } = useAuthContext();
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>Safe Server</div>
        <div className={styles.buttons}>
          {state?.isAuthenticated ? (
            <div className={styles.secondary} onClick={() => signOut()}>
              Log out
            </div>
          ) : (
            <>
              <div className={styles.secondary} onClick={() => signIn()}>
                Login
              </div>
              <div className={styles.primary} onClick={() => signIn()}>
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
