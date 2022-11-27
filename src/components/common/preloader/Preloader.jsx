import preloader from "../../../assets/images/preloader.svg";
import styles from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
