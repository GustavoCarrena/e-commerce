import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.spinner} spinner-grow`} role="status">
        <span className={`${styles.loading}`}>Loading...</span>
      </div>
    </div>
  );
};
