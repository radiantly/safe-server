import { GoArrowRight } from "react-icons/go";
import { BsChevronDoubleDown } from "react-icons/bs";
import NavBar from "./NavBar";
import styles from "../css/Home.module.css";
function Home() {
  return (
    <div className={styles.hero}>
      <NavBar />
      <div className={styles.thriller}>
        <div className={styles.content}>
          <div className={styles.desc}>
            AI-powered server
            <br />
            monitoring and
            <br />
            management
          </div>
          <div className={styles.tagline}>
            Health checks. Server hardening.
            <br />
            Resource usage alerts. Never been easier.
          </div>
          <div className={styles.demo}>
            <div>See a demo</div>
            <GoArrowRight className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.scrollWrap}>
        <div>Scroll to learn more</div>
        <BsChevronDoubleDown className={styles.icon} />
      </div>
    </div>
  );
}

export default Home;
