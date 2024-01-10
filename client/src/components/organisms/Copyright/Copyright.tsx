import Styles from "./Copyright.module.scss";

export const Copyright = () => {
  return (
    <div className={Styles.Copyright}>
      © {new Date().getFullYear()} Data Space for Smart and Sustainable Cities
      and Communities. All rights reserved.
    </div>
  );
};
