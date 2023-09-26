import { PropsWithChildren } from "react";
import Styles from "./TextWithFloatImage.module.scss";

type TextWithFloatImageProps = {
  src: string;
  alt?: string;
  className?: string;
  floatDirection?: "right" | "left";
  captionImage?: string;
  openImageInNewTab?: boolean;
  maxWidth?: number | string;
};

export const TextWithFloatImage = ({
  src = "",
  alt = "",
  className,
  floatDirection = "right",
  openImageInNewTab = false,
  captionImage,
  maxWidth,
  children,
}: PropsWithChildren<TextWithFloatImageProps>) => {
  const setImage = () => {
    if (openImageInNewTab) {
      return (
        <a href={src} target="_blank">
          <img src={src} alt={alt} />
        </a>
      );
    } else {
      return <img src={src} alt={alt} />;
    }
  };

  const setFloatDirection = () => {
    switch (floatDirection) {
      case "left":
        return Styles.floatLeft;

      default:
        return "";
    }
  };

  return (
    <div
      className={`${Styles.TextWithFloatImage} ${className ? className : ""}`}
    >
      <figure style={{ maxWidth: maxWidth }} className={setFloatDirection()}>
        {setImage()}
        {captionImage && <figcaption>{captionImage}</figcaption>}
      </figure>
      <p>{children}</p>
    </div>
  );
};
