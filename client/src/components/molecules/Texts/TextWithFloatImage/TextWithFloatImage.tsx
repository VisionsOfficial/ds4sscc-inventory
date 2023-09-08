import { PropsWithChildren } from "react";
import Styles from "./TextWithFloatImage.module.scss";

type TextWithFloatImageProps = {};

export const TextWithFloatImage = ({
  children,
}: PropsWithChildren<TextWithFloatImageProps>) => {
  return (
    <div className={Styles.TextWithFloatImage}>
      <img src="#" alt="placeholder" className="img-placeholder" /> {children}
    </div>
  );
};
