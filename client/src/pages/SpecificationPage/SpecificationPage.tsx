import { PropsWithChildren } from "react";
import Styles from "./SpecificationPage.module.scss";

type SpecificationPageProps = {};

export const SpecificationPage = ({}: PropsWithChildren<SpecificationPageProps>) => {
    return (
        <div className={Styles.SpecificationPage}></div>
    )
}