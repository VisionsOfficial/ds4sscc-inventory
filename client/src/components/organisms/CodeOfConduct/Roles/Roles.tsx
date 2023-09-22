import { PropsWithChildren } from "react";
import Styles from "./Roles.module.scss";
import { FlipCard } from "../../../molecules/Cards/FlipCard/FlipCard";

type RolesProps = {};

export const Roles = ({}: PropsWithChildren<RolesProps>) => {
  return (
    <div className={Styles.Roles}>
      <div>
        <p>
          Based on the DSSC glossary (version for{" "}
          <a
            href="https://confluence.external-share.com/content/80889/dssc_blueprintv05_public_consultation/142606408"
            target="_blank"
          >
            public consultation
          </a>
          ), we define:
        </p>
        <ul>
          <li>
            <span>Data Subject:</span> an identified or identifiable natural
            person (
            <a href="https://gdpr-info.eu/art-4-gdpr/" target="_blank">
              GDPR
            </a>
            , article 4)
          </li>
          <li>
            <span>Data space participant:</span> A party that has committed to
            the governance framework of a particular data space and may have one
            or more roles in it.
          </li>
          <li>
            <span>Data space role:</span> A distinct and logically consistent
            set of responsibilities within a data space, that encompass
            associated rights and duties required to perform specific tasks, and
            that are designed to be fulfilled by one or more participants.
          </li>
        </ul>
      </div>

      <div>
        <p>
          We define three categories of roles in the context of
          DS4SSCC as follow:
        </p>
        <ul>
          <li>
            <span>Participatory:</span> roles involving data transactions.
          </li>
          <li>
            <span>Intermediary:</span> roles facilitating data exchanges and/or
            enabling the functioning of the DS.
          </li>
          <li>
            <span>Governing:</span> roles related to the development,
            implementation, enforcement and facilitation of rules of engagement
            and the governance framework of the DS.
          </li>
        </ul>
      </div>

      <p>
        DS members can have more than one role in accordance with the relevant
        legal frameworks (see section 2.5) and the agreed governance rules (see
        section 2.4)
      </p>

      <section className={Styles.cards}>
        <FlipCard category="participatoryRoles" />
        <FlipCard category="intermediaryRoles" />
        <FlipCard category="governanceRoles" />
      </section>
    </div>
  );
};
