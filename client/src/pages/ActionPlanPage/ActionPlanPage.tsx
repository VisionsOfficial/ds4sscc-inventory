import { PropsWithChildren, useState } from "react";
import Styles from "./ActionPlanPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { Button } from "../../components/atoms/Button/Button";
import { APP_IMAGES_ASSETS } from "../../utils/appImagesAssets";
import { PreliminaryPhase } from "../../components/organisms/ActionPlan/PreliminaryPhase/PreliminaryPhase";
import { DevelopmentPhase } from "../../components/organisms/ActionPlan/DevelopmentPhase/DevelopmentPhase";
import { ProvingConcept } from "../../components/organisms/ActionPlan/ProvingConcept/ProvingConcept";
import { OrganizingPlayingField } from "../../components/organisms/ActionPlan/OrganizingPlayingField/OrganizingPlayingField";
import { IncreasingImpactPreparingImplementation } from "../../components/organisms/ActionPlan/IncreasingImpactPreparingImplementation/IncreasingImpactPreparingImplementation";
import { CompleteImplementation } from "../../components/organisms/ActionPlan/CompleteImplementation/CompleteImplementation";
import { Card } from "../../components/atoms/Card/Card";
import { Link } from "react-router-dom";
import { PhaseContent } from "../../components/organisms/ActionPlan/PhaseContent/PhaseContent";

type ActionPlanPageProps = {};

type NavSelections = {
  main: MainReferenceNav | null;
  sub: SubReferenceNav | null;
};

export type MainReferenceNav =
  | "Phase 1: Preliminary phase"
  | "Phase 2: Development phase"
  | "Phase 3: Providing Concept"
  | "Phase 4: Organising Playing Field"
  | "Phase 5: Increasing impact & preparing implementation"
  | "Phase 6: Complete implementation";

export type SubReferenceNav = "Governance" | "Datasets" | "Architecture";

const CONTENT_MAIN_NAV: MainReferenceNav[] = [
  "Phase 1: Preliminary phase",
  "Phase 2: Development phase",
  "Phase 3: Providing Concept",
  "Phase 4: Organising Playing Field",
  "Phase 5: Increasing impact & preparing implementation",
  "Phase 6: Complete implementation",
];

export const ActionPlanPage = ({}: PropsWithChildren<ActionPlanPageProps>) => {
  const [navSelections, setNavSelections] = useState<NavSelections>({
    main: null,
    sub: null,
  });
  const [navContent, setNavContent] = useState<SubReferenceNav[]>();

  const handleMainNavSelected = (main: MainReferenceNav) => {
    setNavSelections((prev) => ({ ...prev, main: main, sub: null }));

    setNavContent(["Governance", "Datasets", "Architecture"]);
  };

  const handleClickBack = () => {
    if (navSelections.sub) {
      setNavSelections((prev) => ({
        ...prev,
        sub: null,
      }));
      return;
    }

    if (navSelections.main) {
      setNavSelections((prev) => ({
        ...prev,
        main: null,
        sub: null,
      }));
      return;
    }
  };

  const handleSubNavSelected = (sub: SubReferenceNav) => {
    setNavSelections((prev) => ({ ...prev, sub: sub }));
  };

  const contentNav = () => {
    return CONTENT_MAIN_NAV.map((el, index) => (
      <ul className={Styles.nav} key={el + index}>
        <li>
          <Button
            className={`${navSelections?.main === el ? "btn-secondary" : ""} ${
              Styles.mainButton
            }`}
            onClick={() => {
              handleMainNavSelected(el);
            }}
          >
            {el}
          </Button>
        </li>
        {navSelections.main === el && (
          <ul className={Styles.subNav}>
            {navContent?.map((sub, index) => (
              <li key={sub + index}>
                <Button
                  className={navSelections.sub === sub ? "btn-secondary" : ""}
                  onClick={() => {
                    handleSubNavSelected(sub);
                  }}
                >
                  {sub}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </ul>
    ));
  };

  const contentNavMobile = () => {
    return CONTENT_MAIN_NAV.map((el, index) => (
      <ul className={Styles.nav} key={el + index}>
        {navSelections.main === el && (
          <li>
            <img
              src={APP_IMAGES_ASSETS.icon.basic.cornerUpLeft}
              alt="Icon corner up left"
              className={Styles.back}
              onClick={() => {
                handleClickBack();
              }}
            />
            <span className={Styles.path}>
              ../{navSelections.sub ? navSelections.sub : navSelections.main}
            </span>
          </li>
        )}
        <li>
          <Button
            className={`${navSelections?.main === el ? "btn-secondary" : ""} ${
              Styles.mainButton
            }`}
            style={navSelections.main ? { display: "none" } : {}}
            onClick={() => {
              handleMainNavSelected(el);
            }}
          >
            {el}
          </Button>
        </li>
        {navSelections.main === el && (
          <ul className={Styles.subNav}>
            {navContent?.map((sub, index) => (
              <li key={sub + index}>
                <Button
                  className={navSelections.sub === sub ? "btn-secondary" : ""}
                  onClick={() => {
                    handleSubNavSelected(sub);
                  }}
                >
                  {sub}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </ul>
    ));
  };

  const setBodyClass = () => {
    if (navSelections.main === "Phase 1: Preliminary phase") {
      return Styles.contentRight;
    } else if (navSelections.main === "Phase 6: Complete implementation") {
      return Styles.contentLeft;
    } else {
      return "";
    }
  };

  const contentBody = () => {
    if (navSelections.sub) {
      switch (navSelections.sub) {
        case "Governance":
          switch (navSelections.main) {
            case "Phase 1: Preliminary phase":
              return (
                <PhaseContent
                  phase="Phase 1: Preliminary phase"
                  category="Governance"
                />
              );
            case "Phase 2: Development phase":
              return (
                <PhaseContent
                  phase="Phase 2: Development phase"
                  category="Governance"
                />
              );
            case "Phase 3: Providing Concept":
              return (
                <PhaseContent
                  phase="Phase 3: Providing Concept"
                  category="Governance"
                />
              );
            case "Phase 4: Organising Playing Field":
              return (
                <PhaseContent
                  phase="Phase 4: Organising Playing Field"
                  category="Governance"
                />
              );
            case "Phase 5: Increasing impact & preparing implementation":
              return (
                <PhaseContent
                  phase="Phase 5: Increasing impact & preparing implementation"
                  category="Governance"
                />
              );
            case "Phase 6: Complete implementation":
              return (
                <PhaseContent
                  phase="Phase 6: Complete implementation"
                  category="Governance"
                />
              );
            default:
              return null;
          }
        case "Datasets":
          switch (navSelections.main) {
            case "Phase 1: Preliminary phase":
              return (
                <PhaseContent
                  phase="Phase 1: Preliminary phase"
                  category="Datasets"
                />
              );
            case "Phase 2: Development phase":
              return (
                <PhaseContent
                  phase="Phase 2: Development phase"
                  category="Datasets"
                />
              );
            case "Phase 3: Providing Concept":
              return (
                <PhaseContent
                  phase="Phase 3: Providing Concept"
                  category="Datasets"
                />
              );
            case "Phase 4: Organising Playing Field":
              return (
                <PhaseContent
                  phase="Phase 4: Organising Playing Field"
                  category="Datasets"
                />
              );
            case "Phase 5: Increasing impact & preparing implementation":
              return (
                <PhaseContent
                  phase="Phase 5: Increasing impact & preparing implementation"
                  category="Datasets"
                />
              );
            case "Phase 6: Complete implementation":
              return (
                <PhaseContent
                  phase="Phase 6: Complete implementation"
                  category="Datasets"
                />
              );
            default:
              return null;
          }
        case "Architecture":
          switch (navSelections.main) {
            case "Phase 1: Preliminary phase":
              return (
                <PhaseContent
                  phase="Phase 1: Preliminary phase"
                  category="Architecture"
                />
              );
            case "Phase 2: Development phase":
              return (
                <PhaseContent
                  phase="Phase 2: Development phase"
                  category="Architecture"
                />
              );
            case "Phase 3: Providing Concept":
              return (
                <PhaseContent
                  phase="Phase 3: Providing Concept"
                  category="Architecture"
                />
              );
            case "Phase 4: Organising Playing Field":
              return (
                <PhaseContent
                  phase="Phase 4: Organising Playing Field"
                  category="Architecture"
                />
              );
            case "Phase 5: Increasing impact & preparing implementation":
              return (
                <PhaseContent
                  phase="Phase 5: Increasing impact & preparing implementation"
                  category="Architecture"
                />
              );
            case "Phase 6: Complete implementation":
              return (
                <PhaseContent
                  phase="Phase 6: Complete implementation"
                  category="Architecture"
                />
              );
            default:
              return null;
          }

        default:
          return null;
      }
    }

    switch (navSelections.main) {
      case "Phase 1: Preliminary phase":
        return <PreliminaryPhase />;
      case "Phase 2: Development phase":
        return <DevelopmentPhase />;
      case "Phase 3: Providing Concept":
        return <ProvingConcept />;
      case "Phase 4: Organising Playing Field":
        return <OrganizingPlayingField />;
      case "Phase 5: Increasing impact & preparing implementation":
        return <IncreasingImpactPreparingImplementation />;
      case "Phase 6: Complete implementation":
        return <CompleteImplementation />;

      default:
        return null;
    }
  };

  return (
    <main className={Styles.ActionPlanPage}>
      <HeaderPage category="actionPlan" />

      <section className={Styles.sectionNav}>{contentNav()}</section>
      <section
        className={`${Styles.sectionNav} ${Styles.sectionNavMobile} ${
          navSelections.main ? Styles.mainActive : ""
        }`}
      >
        {contentNavMobile()}
      </section>

      <section className={`${Styles.content} ${setBodyClass()}`}>
        {contentBody()}
      </section>

      <Card className={Styles.card}>
        <p>
          Those intending to implement a data space on a intercommunal, regional
          and national level should follow the instructions across the 6
          maturity phases and adapt them to their use case and their
          specifications, and map its respective complexities. The following
          environments can help you in your digital transformation journey
        </p>
        <div className={Styles.images}>
          <Link to={"https://living-in.eu/"} target="_blank">
            <img
              src={APP_IMAGES_ASSETS.logo.livingInEu}
              alt="Logo Living-in.eu"
            />
          </Link>
          <Link to={"https://dssc.eu/"} target="_blank">
            <img
              src={APP_IMAGES_ASSETS.logo.dataSpacesSupportCentre}
              alt="Logo data spaces support centre"
            />
          </Link>
          <Link
            to={"https://oascities.org/minimal-interoperability-mechanisms/"}
            target="_blank"
          >
            <img src={APP_IMAGES_ASSETS.logo.mims} alt="Logo MIMs" />
          </Link>
        </div>
      </Card>
    </main>
  );
};
