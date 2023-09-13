import { PropsWithChildren } from "react";
import Styles from "./ImplementStepByStep.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { CheckOutCard } from "../../../molecules/Cards/CheckOutCard/CheckOutCard";

type ImplementStepByStepProps = {};

export const ImplementStepByStep =
  ({}: PropsWithChildren<ImplementStepByStepProps>) => {
    return (
      <div className={Styles.ImplementStepByStep}>
        <Card className={Styles.card}>
          <h3>Lorem ipsum</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            asperiores maiores minus deserunt adipisci porro, itaque perferendis
            totam tempora nemo mollitia omnis beatae, rerum nesciunt? Ut
            voluptate eaque in totam! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Veniam, maiores esse dolorum numquam, non quaerat
            quod magni eveniet natus delectus voluptates accusamus sint
            veritatis similique hic ut aspernatur quis culpa! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsam delectus fugiat
            exercitationem fugit a aliquid hic, quibusdam saepe repudiandae
            optio, cupiditate mollitia ea voluptate, impedit possimus nobis odit
            quasi. Nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nobis blanditiis saepe quidem adipisci reprehenderit
            distinctio illo voluptate, harum explicabo nisi quos beatae omnis
            recusandae expedita quisquam facere voluptates minima molestiae.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            mollitia! Recusandae accusamus, enim, distinctio modi libero non
            vero consectetur atque velit sequi sit fuga mollitia ea? Tenetur
            eaque quas mollitia.
          </p>
        </Card>

        <CheckOutCard category="actionPlan" variantColor="bgGray" />
      </div>
    );
  };
