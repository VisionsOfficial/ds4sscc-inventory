import { PropsWithChildren, useState } from "react";
import Styles from "./FlipCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { TextWithIcon } from "../../Texts/TextWithIcon/TextWithIcon";

type FlipCardProps = {
  category: "participatoryRoles" | "intermediaryRoles" | "governanceRoles";
};

export const FlipCard = ({ category }: PropsWithChildren<FlipCardProps>) => {
  const [flip, setFlip] = useState(false);

  const contentCard = (content: "front" | "back") => {
    switch (content) {
      case "front":
        switch (category) {
          case "participatoryRoles":
            return "Participatory Roles";
          case "intermediaryRoles":
            return "Intermediary Roles";
          case "governanceRoles":
            return "Governance Roles";

          default:
            return null;
        }
      case "back":
        switch (category) {
          case "participatoryRoles":
            return (
              <>
                <TextWithIcon>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur distinctio maiores fuga quia sunt laudantium
                  consequatur repellendus recusandae nesciunt dignissimos
                  dolorum et, dolorem deleniti tenetur quas dicta modi optio
                  odit.
                </TextWithIcon>
                <TextWithIcon>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ad sequi doloremque aliquam enim harum repellendus ratione
                  omnis quis autem nemo fuga eveniet maiores, porro quisquam
                  quae minus inventore quod.
                </TextWithIcon>
              </>
            );
          case "intermediaryRoles":
            return (
              <>
                <TextWithIcon>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur distinctio maiores fuga quia sunt laudantium
                  consequatur repellendus recusandae nesciunt dignissimos
                  dolorum et, dolorem deleniti tenetur quas dicta modi optio
                  odit.
                </TextWithIcon>
              </>
            );
          case "governanceRoles":
            return (
              <>
                <TextWithIcon>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur distinctio maiores fuga quia sunt laudantium
                  consequatur repellendus recusandae nesciunt dignissimos
                  dolorum et, dolorem deleniti tenetur quas dicta modi optio
                  odit.
                </TextWithIcon>
                <TextWithIcon>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ad sequi doloremque aliquam enim harum repellendus ratione
                  omnis quis autem nemo fuga eveniet maiores, porro quisquam
                  quae minus inventore quod.
                </TextWithIcon>
                <TextWithIcon>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat dolorum hic consequatur cumque voluptatem accusantium
                  aperiam explicabo nostrum eos, nulla facilis! Voluptatum,
                  neque consequatur. Laboriosam iste excepturi architecto
                  sapiente mollitia.
                </TextWithIcon>
              </>
            );

          default:
            return null;
        }

      default:
        break;
    }
  };

  if (flip) {
    return (
      <Card
        className={`${Styles.FlipCard} ${Styles.active}`}
        onClick={() => {
          setFlip((prev) => !prev);
        }}
        // onMouseLeave={() => {
        //   setFlip(false);
        // }}
      >
        {contentCard("back")}
      </Card>
    );
  }

  return (
    <Card
      className={Styles.FlipCard}
      onClick={() => {
        setFlip((prev) => !prev);
      }}
      //   onMouseEnter={() => {
      //     setFlip(true);
      //   }}
    >
      <h3>{contentCard("front")}</h3>
    </Card>
  );
};
