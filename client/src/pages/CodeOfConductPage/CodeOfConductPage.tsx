import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./CodeOfConductPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { SubInfoHeaderCard } from "../../components/molecules/Cards/SubInfoHeaderCard/SubInfoHeaderCard";
import { Button } from "../../components/atoms/Button/Button";
import { VisionAndPrinciples } from "../../components/organisms/CodeOfConduct/VisionAndPrinciples/VisionAndPrinciples";
import { RolesAndResponsibilities } from "../../components/organisms/CodeOfConduct/RolesAndResponsibilities/RolesAndResponsibilities";
import { GovernanceRules } from "../../components/organisms/CodeOfConduct/GovernanceRules/GovernanceRules";
import { LegalFramework } from "../../components/organisms/CodeOfConduct/LegalFramework/LegalFramework";
import { useLocation } from "react-router-dom";

type CodeOfConductPageProps = {};

type CodeOfConductNav =
  | "Share vision & principles"
  | "Roles & responsibilities"
  | "Governance rules"
  | "Legal framework";

const CONTENT_NAV: CodeOfConductNav[] = [
  "Share vision & principles",
  "Roles & responsibilities",
  "Governance rules",
  "Legal framework",
];

export const CodeOfConductPage =
  ({}: PropsWithChildren<CodeOfConductPageProps>) => {
    const { search } = useLocation();
    const [sectionSelected, setSectionSelected] = useState<CodeOfConductNav>();

    const contentBody = () => {
      switch (sectionSelected) {
        case "Share vision & principles":
          return <VisionAndPrinciples />;
        case "Roles & responsibilities":
          return <RolesAndResponsibilities />;
        case "Governance rules":
          return <GovernanceRules />;
        case "Legal framework":
          return <LegalFramework />;

        default:
          return null;
      }
    };

    useEffect(() => {
      if (!search) return;

      if (search === "?rolesAnResponsibilities") {
        setSectionSelected("Roles & responsibilities");
      } else if (search === "?governanceRules") {
        setSectionSelected("Governance rules");
      } else return;
    }, []);

    return (
      <main className={Styles.CodeOfConductPage}>
        <HeaderPage category="codeOfConducts" subInfoHeader />

        <SubInfoHeaderCard />

        <section className={Styles.nav}>
          {CONTENT_NAV.map((el, index) => (
            <Button
              className={sectionSelected === el ? "btn-secondary" : ""}
              key={el + index}
              onClick={() => {
                setSectionSelected(el);
              }}
            >
              {el}
            </Button>
          ))}
        </section>

        <section className={Styles.content}>{contentBody()}</section>
      </main>
    );
  };
