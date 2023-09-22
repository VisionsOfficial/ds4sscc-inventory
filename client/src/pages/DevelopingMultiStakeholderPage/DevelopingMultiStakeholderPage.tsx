import { PropsWithChildren, useState } from "react";
import Styles from "./DevelopingMultiStakeholderPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { SubInfoHeaderCard } from "../../components/molecules/Cards/SubInfoHeaderCard/SubInfoHeaderCard";
import { Button } from "../../components/atoms/Button/Button";
import { ObjectivesAndScope } from "../../components/organisms/DevelopingMultiStakeholder/ObjectivesAndScope/ObjectivesAndScope";
import { IncentivesAndAddedValue } from "../../components/organisms/DevelopingMultiStakeholder/IncentivesAndAddedValue/IncentivesAndAddedValue";
import { TypesOfDataAndDataSources } from "../../components/organisms/DevelopingMultiStakeholder/TypesOfDataAndDataSources/TypesOfDataAndDataSources";
import { SharedDataFlows } from "../../components/organisms/DevelopingMultiStakeholder/SharedDataFlows/SharedDataFlows";
import { ResourcesNeeded } from "../../components/organisms/DevelopingMultiStakeholder/ResourcesNeeded/ResourcesNeeded";
import { KeyPartnersAndStakeholders } from "../../components/organisms/DevelopingMultiStakeholder/KeyPartnersAndStakeholders/KeyPartnersAndStakeholders";
import { BusinessAndGovernanceModel } from "../../components/organisms/DevelopingMultiStakeholder/BusinessAndGovernanceModel/BusinessAndGovernanceModel";
import { ContractualAgreements } from "../../components/organisms/DevelopingMultiStakeholder/ContractualAgreements/ContractualAgreements";
import { ImplementStepByStep } from "../../components/organisms/DevelopingMultiStakeholder/ImplementStepByStep/ImplementStepByStep";
import { APP_IMAGES_ASSETS } from "../../utils/appImagesAssets";

type DevelopingMultiStakeholderPageProps = {};

type DevelopingMultiStakeholderNav = "Why" | "What" | "Who" | "How";

type DevelopingMultiStakeholderSubNav =
  | "Define objectives & Scope"
  | "Identify incentives & added value"
  | "Identify types of data & data sources"
  | "Define shared data flows"
  | "Identify resources needed"
  | "Identify key partners & stakeholders"
  | "Choose an appropriate business and governance model"
  | "Choose appropriate contractual agreements"
  | "Implement step by step";

const CONTENT_NAV: DevelopingMultiStakeholderNav[] = [
  "Why",
  "What",
  "Who",
  "How",
];

export const DevelopingMultiStakeholderPage =
  ({}: PropsWithChildren<DevelopingMultiStakeholderPageProps>) => {
    const [sectionSelected, setSectionSelected] =
      useState<DevelopingMultiStakeholderNav | null>();
    const [subNavContent, setSubNavContent] =
      useState<DevelopingMultiStakeholderSubNav[]>();
    const [subSectionSelected, setSubSectionSelected] =
      useState<DevelopingMultiStakeholderSubNav | null>();

    const setBodyClass = () => {
      if (sectionSelected === "Why") {
        return Styles.contentRight;
      } else if (sectionSelected === "How") {
        return Styles.contentLeft;
      } else {
        return "";
      }
    };

    const contentSubNav = (mainSection: DevelopingMultiStakeholderNav) => {
      setSectionSelected(mainSection);
      if (mainSection !== sectionSelected) {
        setSubSectionSelected(null);
      }
      switch (mainSection) {
        case "Why":
          setSubNavContent([
            "Define objectives & Scope",
            "Identify incentives & added value",
          ]);
          break;
        case "What":
          setSubNavContent([
            "Identify types of data & data sources",
            "Define shared data flows",
            "Identify resources needed",
          ]);
          break;
        case "Who":
          setSubNavContent(["Identify key partners & stakeholders"]);
          break;
        case "How":
          setSubNavContent([
            "Choose an appropriate business and governance model",
            "Choose appropriate contractual agreements",
            "Implement step by step",
          ]);
          break;

        default:
          setSubNavContent([]);
          break;
      }
    };

    const contentBody = () => {
      switch (subSectionSelected) {
        case "Define objectives & Scope":
          return <ObjectivesAndScope />;
        case "Identify incentives & added value":
          return <IncentivesAndAddedValue />;
        case "Identify types of data & data sources":
          return <TypesOfDataAndDataSources />;
        case "Define shared data flows":
          return <SharedDataFlows />;
        case "Identify resources needed":
          return <ResourcesNeeded />;
        case "Identify key partners & stakeholders":
          return <KeyPartnersAndStakeholders />;
        case "Choose an appropriate business and governance model":
          return <BusinessAndGovernanceModel />;
        case "Choose appropriate contractual agreements":
          return <ContractualAgreements />;
        case "Implement step by step":
          return <ImplementStepByStep />;

        default:
          return null;
      }
    };

    const handleClickBack = () => {
      if (sectionSelected) {
        setSectionSelected(null);
        setSubSectionSelected(null);
      }
    };

    const contentNavMobile = () => {
      return CONTENT_NAV.map((el, index) => (
        <ul className={Styles.nav} key={el + index}>
          {sectionSelected === el && (
            <li>
              <img
                src={APP_IMAGES_ASSETS.icon.basic.cornerUpLeft}
                alt="Icon corner up left"
                className={Styles.back}
                onClick={() => {
                  handleClickBack();
                }}
              />
              <span className={Styles.path}>../{sectionSelected}</span>
            </li>
          )}
          <li>
            <Button
              className={sectionSelected === el ? "btn-secondary" : ""}
              style={sectionSelected ? { display: "none" } : {}}
              onClick={() => {
                contentSubNav(el);
              }}
            >
              {el}
            </Button>
          </li>
          {sectionSelected === el && (
            <ul className={Styles.subNav}>
              {subNavContent?.map((sub, index) => (
                <li key={sub + index}>
                  <Button
                    className={
                      subSectionSelected === sub ? "btn-secondary" : ""
                    }
                    onClick={() => {
                      setSubSectionSelected(sub);
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

    return (
      <main className={Styles.DevelopingMultiStakeholderPage}>
        <HeaderPage category="DevelopingMultiStakeholder" />

        <SubInfoHeaderCard category="DevelopingMultiStakeholder" />

        <section className={Styles.navContainer}>
          {CONTENT_NAV.map((el, index) => (
            <ul className={Styles.nav} key={el + index}>
              <li>
                <Button
                  className={sectionSelected === el ? "btn-secondary" : ""}
                  onClick={() => {
                    contentSubNav(el);
                  }}
                >
                  {el}
                </Button>
              </li>
              {sectionSelected === el && (
                <ul className={Styles.subNav}>
                  {subNavContent?.map((sub, index) => (
                    <li key={sub + index}>
                      <Button
                        className={
                          subSectionSelected === sub ? "btn-secondary" : ""
                        }
                        onClick={() => {
                          setSubSectionSelected(sub);
                        }}
                      >
                        {sub}
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          ))}
        </section>

        <section
          className={`${Styles.navContainer} ${Styles.navMobile} ${
            sectionSelected ? Styles.sectionActive : ""
          }`}
        >
          {contentNavMobile()}
        </section>

        <section className={`${Styles.content} ${setBodyClass()}`}>
          {contentBody()}
        </section>
      </main>
    );
  };
