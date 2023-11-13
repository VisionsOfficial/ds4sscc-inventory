import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./CodeOfConductPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { Button } from "../../components/atoms/Button/Button";
import { VisionAndPrinciples } from "../../components/organisms/CodeOfConduct/VisionAndPrinciples/VisionAndPrinciples";
import { LegalFramework } from "../../components/organisms/CodeOfConduct/LegalFramework/LegalFramework";
import { useLocation } from "react-router-dom";
import { Roles } from "../../components/organisms/CodeOfConduct/Roles/Roles";
import { Responsibilities } from "../../components/organisms/CodeOfConduct/Responsibilities/Responsibilities";
import { GovernanceFramework } from "../../components/organisms/CodeOfConduct/GovernanceFramework/GovernanceFramework";

type CodeOfConductPageProps = {};

type CodeOfConductNav =
  | "Vision & principles"
  | "Roles"
  | "Responsibilities"
  | "Governance framework"
  | "Legal framework";

const CONTENT_NAV: CodeOfConductNav[] = [
  "Vision & principles",
  "Roles",
  "Responsibilities",
  "Governance framework",
  "Legal framework",
];

export const CodeOfConductPage =
  ({}: PropsWithChildren<CodeOfConductPageProps>) => {
    const { search } = useLocation();
    const [sectionSelected, setSectionSelected] = useState<CodeOfConductNav>();

    const contentBody = () => {
      switch (sectionSelected) {
        case "Vision & principles":
          return <VisionAndPrinciples />;
        case "Roles":
          return <Roles />;
        case "Responsibilities":
          return <Responsibilities />;
        case "Governance framework":
          return <GovernanceFramework />;
        case "Legal framework":
          return <LegalFramework />;

        default:
          return null;
      }
    };

    useEffect(() => {
      if (!search) return;

      if (search === "?responsibilities") {
        setSectionSelected("Responsibilities");
      } else if (search === "?governanceFramework") {
        setSectionSelected("Governance framework");
      } else return;
    }, []);

    return (
      <main className={Styles.CodeOfConductPage}>
        <HeaderPage category="codeOfConducts" />

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
