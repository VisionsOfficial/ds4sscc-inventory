import { PropsWithChildren } from "react";
import Styles from "./LegalFramework.module.scss";
import { LegalFrameworkTable } from "../../../molecules/Tables/LegalFrameworkTable/LegalFrameworkTable";

type LegalFrameworkProps = {};

export const LegalFramework = ({}: PropsWithChildren<LegalFrameworkProps>) => {
  return (
    <div className={Styles.LegalFramework}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ea
        officia nobis placeat. Id, nesciunt, facilis consectetur adipisci
        accusantium ex incidunt molestiae tempora ab praesentium, laboriosam
        maiores accusamus explicabo dolore.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ut
        fugit autem dicta a impedit sit ipsa obcaecati voluptates hic quibusdam
        maxime laborum, maiores at recusandae doloremque, eaque aut adipisci!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, enim?
        Non aspernatur quis, maxime corrupti architecto illo. Deleniti odit
        neque, dicta libero magnam aspernatur ab molestiae odio quis incidunt
        temporibus!
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate cum
        aliquam saepe voluptatem culpa ipsam libero, perspiciatis soluta quam,
        quia et animi facere, dolorum ducimus autem repudiandae. Sapiente,
        aperiam nostrum.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        quasi a accusamus harum deserunt mollitia obcaecati atque optio
        consequuntur, fugiat modi libero qui. Placeat, voluptatum nisi non
        numquam laboriosam alias.
      </p>

      <LegalFrameworkTable />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quos
        nam odio qui consequatur, iste, enim ut, quod neque placeat quibusdam
        commodi ad eveniet ex et voluptatibus quasi tempora! Odit.
      </p>
    </div>
  );
};
