import NavBar from "./NavBar";
import styles from "../css/Dashboard.module.css";
import ServerCard from "./ServerCard";

function Dashboard() {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.container}>
        <h1>Servers</h1>
        <div className={styles.cards}>
          <ServerCard name="Dev-UDPQuiz VPS" image="ubuntu" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
