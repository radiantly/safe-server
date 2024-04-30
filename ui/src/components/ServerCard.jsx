import styles from "../css/ServerCard.module.css";
import DataBar from "./DataBar";

const percentFormatter = (number) => `${number}%`;
const gbFormatter = (number) => `${number}GiB`;

function ServerCard({ name, image, ram, ramTot, cpu, alertCount }) {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.nameRow}>
        <div>{name}</div>
        <div className={styles.logoWrap}>
          {image && (
            <img src={`/distros/128_${image}.png`} alt={`${image} logo`} />
          )}
        </div>
      </div>
      <DataBar title="RAM" total={ramTot} current={ram} format={gbFormatter} />
      <DataBar
        title="CPU"
        total={100}
        current={cpu}
        format={percentFormatter}
      />
      <div
        className={[styles.alerts, alertCount ? "" : styles.noAlerts].join(" ")}
      >
        {alertCount || "0"} alerts
      </div>
    </div>
  );
}

export default ServerCard;
