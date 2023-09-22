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
                  <span>Data holder:</span> ‘A legal person, including public
                  sector bodies and international organisations, or a natural
                  person who is not a data subject with respect to the specific
                  data in question, which, in accordance with applicable Union
                  or national law, has the right to grant access to or to share
                  certain personal data or non-personal data’ (
                  <a
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R0868#d1e965-1-1"
                    target="_blank"
                  >
                    DGA
                  </a>
                  , article 2)
                </TextWithIcon>
                <TextWithIcon>
                  <span>Data provider:</span> A DS participant that, in the
                  context of a specific data transaction, technically provides
                  data to the data users that have a right or duty (granted by
                  the data rights holder) to access and/or receive that data.
                  (DSSC Glossary)
                </TextWithIcon>
                <TextWithIcon>
                  <span>Data user:</span> A natural or legal person who has
                  lawful access to certain personal or non-personal data and has
                  the right, including under Regulation (EU) 2016/679 in the
                  case of personal data, to use that data for commercial or
                  non-commercial purposes (DGA, article 2)
                </TextWithIcon>
                <TextWithIcon>
                  <span>Use-case participants:</span> A DS participant that is
                  involved in one or several use-cases. While the use-case
                  participants can take part in data transactions, it is not
                  always the case.
                </TextWithIcon>
              </>
            );
          case "intermediaryRoles":
            return (
              <>
                <TextWithIcon>
                  <span>Data intermediaries/ enabling services:</span> A DS
                  participant that provides a (technical or non-technical)
                  service enabling or facilitating trustworthy data transactions
                  for data space members. Examples of data space services
                  include identity management, vocabulary providers,
                  authorisation management, consent management, clearing house.
                  Data intermediaries can be{" "}
                  <span>
                    registered and DGA-compliant as per Article 10 of the Data
                    Governance Act
                  </span>
                  . In this case they have to be neutral third parties and have
                  a structural separation between the intermediation services
                  they provide and other data services (see section 2.5.1.).
                </TextWithIcon>
                <TextWithIcon>
                  <span>Personal data intermediaries:</span> A DS participant
                  which facilitates the management of personal data, often
                  providing direct mechanisms for citizens to give permission to
                  use their data to organisations.
                </TextWithIcon>
              </>
            );
          case "governanceRoles":
            return (
              <>
                <TextWithIcon>
                  <span>
                    Governance bodies (e.g. Governance Authority, Steering
                    Committee, Advisory boards):
                  </span>{" "}
                  The party(ies) that is (are) accountable for the governance of
                  a particular governance framework. In any scenario, they{" "}
                  <span>
                    do not replace the role of public enforcement authorities
                  </span>
                  . (DSSC Glossary)
                </TextWithIcon>
                <TextWithIcon>
                  <span>Orchestrator/ coordinating entity:</span> Organisation
                  which coordinates/ orchestrates the data space ecosystem and
                  ensures its functioning and that members abide by the agreed
                  common rules and principles.
                </TextWithIcon>
                <TextWithIcon>
                  <span>
                    Community support bodies (e.g. Training & capacity building,
                    legal & technological support):
                  </span>{" "}
                  animates/supports the DS4SSCC community of practice.
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
