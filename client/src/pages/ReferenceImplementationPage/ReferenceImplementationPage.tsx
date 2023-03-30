import { PropsWithChildren } from "react";
import Styles from "./ReferenceImplementationPage.module.scss";

type ReferenceImplementationPageProps = {};

export const ReferenceImplementationPage = ({}: PropsWithChildren<ReferenceImplementationPageProps>) => {
    return (
        <div className={Styles.ReferenceImplementationPage}></div>
    )
}