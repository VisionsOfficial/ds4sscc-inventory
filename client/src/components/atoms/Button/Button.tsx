import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import Styles from "./Button.module.scss";

type BtnProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { variantColor?: "secondary" };

export const Button = forwardRef<HTMLButtonElement, BtnProps>((props, ref) => {
  return (
    <button
      className={`${Styles.Input} ${props.variantColor ? Styles.primary : ""}`}
      ref={ref}
      {...props}
    />
  );
});
