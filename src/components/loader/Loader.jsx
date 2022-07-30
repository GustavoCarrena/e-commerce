import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={`${styles.loading} animate__animated animate__flash`}>Loading...</div>
  );
};
