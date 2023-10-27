import { PropsWithChildren } from "react";
import Styles from "./ProcessPhaseTwo.module.scss";
import { Card } from "../../../../atoms/Card/Card";

type ProcessPhaseTwoProps = {};

export const ProcessPhaseTwo =
  ({}: PropsWithChildren<ProcessPhaseTwoProps>) => {
    return (
      <Card className={Styles.ProcessPhaseTwo}>
        <h3>Lorem ipsum Development Process</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint
          dolore delectus doloremque veniam blanditiis sunt, reprehenderit
          necessitatibus. Exercitationem aperiam rerum animi eveniet soluta
          natus ducimus! Earum iste voluptatem obcaecati. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Ab neque dolor quisquam eum ad
          minima. Accusamus exercitationem veritatis facilis fugit numquam
          accusantium earum, est iure ex soluta incidunt molestiae dolorem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius,
          molestiae sequi omnis suscipit quam voluptatem, amet et eos ipsam odit
          dignissimos praesentium ea accusantium eveniet molestias, totam
          consequatur quo!
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          inventore non ratione enim accusamus in exercitationem, dolore
          cupiditate earum. Temporibus similique eos modi hic harum perspiciatis
          nemo corrupti error maxime. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam quas culpa quos dicta facilis consectetur
          dolorum incidunt exercitationem! Aperiam maiores similique cumque
          molestias, dolores sapiente. Ab dolor vel quia ipsa.
        </p>
      </Card>
    );
  };
