import styles from "../css/DataBar.module.css";

function DataBar({ title, current, total, format = (current) => current }) {
  const barCount = 25;
  const percent = current / total;
  const colored = Math.round(percent * barCount);

  const barColorStyle =
    percent > 0.7 ? styles.red : percent > 0.35 ? styles.yellow : styles.green;

  return (
    <div className={[styles.barWrap, barColorStyle].join(" ")}>
      <div className={styles.titleRow}>
        <div>{title}</div>
        <div>{format(current)}</div>
      </div>
      <div className={styles.bars}>
        {[...Array(barCount)].map((_, index) => (
          <div
            key={index}
            className={index < colored ? styles.colored : ""}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DataBar;
