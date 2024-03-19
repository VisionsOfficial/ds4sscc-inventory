import Styles from "./Copyright.module.scss";

export const Copyright = () => {
  return (
    <div className={Styles.Copyright}>
      <p>
        <a href="https://www.ds4sscc.eu/privacy-statement">Privacy Statement</a>{" "}
        | © European Data Space for Smart Communities (DS4SSCC-DEP) | All rights
        reserved.
      </p>
    </div>
  );
};
