import { PropsWithChildren } from "react";
import Styles from "./ResourcesNeeded.module.scss";
import { Card } from "../../../atoms/Card/Card";

type ResourcesNeededProps = {};

export const ResourcesNeeded =
  ({}: PropsWithChildren<ResourcesNeededProps>) => {
    return (
      <div className={Styles.ResourcesNeeded}>
        {[...Array(3)].map((_, index) => (
          <Card key={index} className={Styles.card}>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias omnis fugiat nam amet dolorem debitis reprehenderit, non
              repellendus, veniam accusantium, quibusdam iusto quam eveniet
              dicta nemo explicabo inventore excepturi dolore. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Molestias laborum
              natus nostrum, suscipit id totam eaque sunt quam eos quo,
              doloremque dolore tenetur, rem porro in amet excepturi
              perspiciatis reprehenderit?
            </p>
          </Card>
        ))}
      </div>
    );
  };
