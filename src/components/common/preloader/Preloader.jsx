import preloader from "../../../assets/images/preloader.svg";
import styles from "./Preloader.module.scss";

let Preloader = (props) => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
