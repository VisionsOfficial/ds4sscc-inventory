import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./FlipCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { TextWithIcon } from "../../Texts/TextWithIcon/TextWithIcon";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";

type FlipCardProps = {
  category:
    | "participatoryRoles"
    | "intermediaryRoles"
    | "governanceRoles"
    | "public"
    | "academiaResearchInstitutes"
    | "private"
    | "civilSociety";
};

export const FlipCard = ({ category }: PropsWithChildren<FlipCardProps>) => {
  const [flip, setFlip] = useState(false);
  const [active, setActive] = useState(false);
  const { windowWidth } = useWindowWidth();

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
          case "public":
            return "Public";
          case "academiaResearchInstitutes":
            return "Academia / Research Institutes";
          case "private":
            return "Private";
          case "civilSociety":
            return "Civil Society";

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
          case "public":
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
          case "academiaResearchInstitutes":
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
          case "private":
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
          case "civilSociety":
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
          if (windowWidth <= 1024) {
            setFlip((prev) => !prev);
          } else {
            setActive((prev) => !prev);
            if (!active) {
              setFlip(false);
            }
          }
        }}
        onMouseLeave={() => {
          if (windowWidth <= 1024) return;
          if (active) return;
          setFlip(false);
        }}
      >
        {contentCard("back")}
      </Card>
    );
  }

  return (
    <Card
      className={Styles.FlipCard}
      onClick={() => {
        if (windowWidth <= 1024) {
          setFlip((prev) => !prev);
        } else {
          setActive((prev) => !prev);
        }
      }}
      onMouseEnter={() => {
        if (windowWidth <= 1024) return;
        setFlip(true);
      }}
    >
      <h3>{contentCard("front")}</h3>
    </Card>
  );
};
