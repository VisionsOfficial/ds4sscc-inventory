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
import { GoalPhaseOne } from "../../components/organisms/ActionPlan/Goals/GoalPhaseOne/GoalPhaseOne";
import { GoalPhaseTwo } from "../../components/organisms/ActionPlan/Goals/GoalPhaseTwo/GoalPhaseTwo";
import { GoalPhaseThree } from "../../components/organisms/ActionPlan/Goals/GoalPhaseThree/GoalPhaseThree";
import { GoalPhaseFour } from "../../components/organisms/ActionPlan/Goals/GoalPhaseFour/GoalPhaseFour";
import { GoalPhaseFive } from "../../components/organisms/ActionPlan/Goals/GoalPhaseFive/GoalPhaseFive";
import { GoalPhaseSix } from "../../components/organisms/ActionPlan/Goals/GoalPhaseSix/GoalPhaseSix";
import { ProcessPhaseOne } from "../../components/organisms/ActionPlan/Process/ProcessPhaseOne/ProcessPhaseOne";
import { ProcessPhaseTwo } from "../../components/organisms/ActionPlan/Process/ProcessPhaseTwo/ProcessPhaseTwo";
import { ProcessPhaseThree } from "../../components/organisms/ActionPlan/Process/ProcessPhaseThree/ProcessPhaseThree";
import { ProcessPhaseFour } from "../../components/organisms/ActionPlan/Process/ProcessPhaseFour/ProcessPhaseFour";
import { ProcessPhaseFive } from "../../components/organisms/ActionPlan/Process/ProcessPhaseFive/ProcessPhaseFive";
import { ProcessPhaseSix } from "../../components/organisms/ActionPlan/Process/ProcessPhaseSix/ProcessPhaseSix";
import { SuggestedActionsTwo } from "../../components/organisms/ActionPlan/SuggestedActions/SuggestedActionsTwo/SuggestedActionsTwo";
import { SuggestedActionsSix } from "../../components/organisms/ActionPlan/SuggestedActions/SuggestedActionsSix/SuggestedActionsSix";
import { SuggestedActionsOne } from "../../components/organisms/ActionPlan/SuggestedActions/SuggestedActionsOne/SuggestedActionsOne";
import { SuggestedActionsThree } from "../../components/organisms/ActionPlan/SuggestedActions/SuggestedActionsThree/SuggestedActionsThree";
import { SuggestedActionsFive } from "../../components/organisms/ActionPlan/SuggestedActions/SuggestedActionsFive/SuggestedActionsFive";
import { SuggestedActionsFour } from "../../components/organisms/ActionPlan/SuggestedActions/SuggestedActionsFour/SuggestedActionsFour";
import { CheckOutCard } from "../../components/molecules/Cards/CheckOutCard/CheckOutCard";

type ActionPlanPageProps = {};

type NavSelections = {
  main: MainReferenceNav | null;
  sub: SubReferenceNav | null;
};

type MainReferenceNav =
  | "Phase 1: Preliminary phase"
  | "Phase 2: Development phase"
  | "Phase 3: Proving concept"
  | "Phase 4: Organizing playing field"
  | "Phase 5: Increasing impact & preparing implementation"
  | "Phase 6: Complete implementation";

type SubReferenceNav = "Goal" | "Process" | "Suggested Actions";

const CONTENT_MAIN_NAV: MainReferenceNav[] = [
  "Phase 1: Preliminary phase",
  "Phase 2: Development phase",
  "Phase 3: Proving concept",
  "Phase 4: Organizing playing field",
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

    setNavContent(["Goal", "Process", "Suggested Actions"]);
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
        case "Goal":
          switch (navSelections.main) {
            case "Phase 1: Preliminary phase":
              return <GoalPhaseOne />;
            case "Phase 2: Development phase":
              return <GoalPhaseTwo />;
            case "Phase 3: Proving concept":
              return <GoalPhaseThree />;
            case "Phase 4: Organizing playing field":
              return <GoalPhaseFour />;
            case "Phase 5: Increasing impact & preparing implementation":
              return <GoalPhaseFive />;
            case "Phase 6: Complete implementation":
              return <GoalPhaseSix />;
            default:
              return null;
          }
        case "Process":
          switch (navSelections.main) {
            case "Phase 1: Preliminary phase":
              return <ProcessPhaseOne />;
            case "Phase 2: Development phase":
              return <ProcessPhaseTwo />;
            case "Phase 3: Proving concept":
              return <ProcessPhaseThree />;
            case "Phase 4: Organizing playing field":
              return <ProcessPhaseFour />;
            case "Phase 5: Increasing impact & preparing implementation":
              return <ProcessPhaseFive />;
            case "Phase 6: Complete implementation":
              return <ProcessPhaseSix />;
            default:
              return null;
          }
        case "Suggested Actions":
          switch (navSelections.main) {
            case "Phase 1: Preliminary phase":
              return <SuggestedActionsOne />;
            case "Phase 2: Development phase":
              return <SuggestedActionsTwo />;
            case "Phase 3: Proving concept":
              return <SuggestedActionsThree />;
            case "Phase 4: Organizing playing field":
              return <SuggestedActionsFour />;
            case "Phase 5: Increasing impact & preparing implementation":
              return <SuggestedActionsFive />;
            case "Phase 6: Complete implementation":
              return <SuggestedActionsSix />;
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
      case "Phase 3: Proving concept":
        return <ProvingConcept />;
      case "Phase 4: Organizing playing field":
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

      <CheckOutCard category="actionPlanCheatsheet" sizing="mainContent" />
    </main>
  );
};
