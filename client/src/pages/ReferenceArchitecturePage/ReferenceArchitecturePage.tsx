import React, { PropsWithChildren, useState } from "react";
import Styles from "./ReferenceArchitecturePage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { SubInfoHeaderCard } from "../../components/molecules/Cards/SubInfoHeaderCard/SubInfoHeaderCard";
import { Button } from "../../components/atoms/Button/Button";
import { APP_IMAGES_ASSETS } from "../../utils/appImagesAssets";

type ReferenceArchitecturePageProps = {};

type NavSelections = {
  main: MainReferenceNav | null;
  sub: SubReferenceNav | null;
  nether: netherReferenceNav | null;
};

type NavContent = {
  sub: SubReferenceNav[];
  nether: netherReferenceNav[];
};

type MainReferenceNav =
  | "Context"
  | "High-level Architecture"
  | "Customized Architectures"
  | "Cookbook";

type SubReferenceNav =
  | "Scope & Goals"
  | "MIMs liaison"
  | "Existing scenarios"
  | "Overview"
  | "Systems view"
  | "Components"
  | "Case 1: Helsinki"
  | "Case 2: Flanders"
  | "Case 3: Valencia"
  | "Case 4: Amsterdam"
  | "Short guide"
  | "Recipes for scenarios"
  | "FAQs";

type netherReferenceNav =
  | "Universal Registry"
  | "Authorization Store"
  | "Federation layer";

const CONTENT_MAIN_NAV: MainReferenceNav[] = [
  "Context",
  "High-level Architecture",
  "Customized Architectures",
  "Cookbook",
];

export const ReferenceArchitecturePage =
  ({}: PropsWithChildren<ReferenceArchitecturePageProps>) => {
    const [navSelections, setNavSelections] = useState<NavSelections>({
      main: null,
      sub: null,
      nether: null,
    });
    const [navContent, setNavContent] = useState<NavContent>({
      sub: [],
      nether: [],
    });

    const handleMainNavSelected = (main: MainReferenceNav) => {
      setNavSelections((prev) => ({ ...prev, main: main }));
      if (main !== navSelections.main) {
        setNavSelections((prev) => ({ ...prev, sub: null, nether: null }));
      }

      switch (main) {
        case "Context":
          setNavContent((prev) => ({
            ...prev,
            sub: ["Scope & Goals", "MIMs liaison", "Existing scenarios"],
          }));
          break;
        case "High-level Architecture":
          setNavContent((prev) => ({
            ...prev,
            sub: ["Overview", "Systems view", "Components"],
          }));
          break;
        case "Customized Architectures":
          setNavContent((prev) => ({
            ...prev,
            sub: [
              "Case 1: Helsinki",
              "Case 2: Flanders",
              "Case 3: Valencia",
              "Case 4: Amsterdam",
            ],
          }));
          break;
        case "Cookbook":
          setNavContent((prev) => ({
            ...prev,
            sub: ["Short guide", "Recipes for scenarios", "FAQs"],
          }));
          break;

        default:
          break;
      }
    };

    const handleSubNavSelected = (sub: SubReferenceNav) => {
      setNavSelections((prev) => ({ ...prev, sub: sub, nether: null }));

      switch (sub) {
        case "Components":
          setNavContent((prev) => ({
            ...prev,
            nether: [
              "Universal Registry",
              "Authorization Store",
              "Federation layer",
            ],
          }));
          break;

        default:
          setNavContent((prev) => ({ ...prev, nether: [] }));
          break;
      }
    };

    const contentNav = () => {
      return CONTENT_MAIN_NAV.map((el, index) => (
        <ul className={Styles.nav} key={el + index}>
          <li>
            <Button
              className={`${
                navSelections?.main === el ? "btn-secondary" : ""
              } ${Styles.mainButton}`}
              onClick={() => {
                handleMainNavSelected(el);
              }}
            >
              {el}
            </Button>
          </li>
          {navSelections.main === el && (
            <ul className={Styles.subNav}>
              {navContent.sub?.map((sub, index) => (
                <React.Fragment key={sub + index}>
                  <li>
                    <Button
                      className={
                        navSelections.sub === sub ? "btn-secondary" : ""
                      }
                      onClick={() => {
                        handleSubNavSelected(sub);
                      }}
                    >
                      {sub}
                    </Button>
                  </li>
                  {navContent?.nether.length > 0 &&
                    navSelections.sub === "Components" &&
                    sub === "Components" && (
                      <ul className={Styles.netherNav}>
                        {navContent.nether?.map((nether, index) => (
                          <li key={nether + index}>
                            <Button
                              className={
                                navSelections.nether === nether
                                  ? "btn-secondary"
                                  : ""
                              }
                              onClick={() => {
                                setNavSelections((prev) => ({
                                  ...prev,
                                  nether: nether,
                                }));
                              }}
                            >
                              {nether}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                </React.Fragment>
              ))}
            </ul>
          )}
        </ul>
      ));
    };

    const handleClickBack = () => {
      if (navSelections.nether) {
        setNavSelections((prev) => ({ ...prev, nether: null }));
        return;
      }
      if (navSelections.sub) {
        setNavSelections((prev) => ({ ...prev, sub: null, nether: null }));
        return;
      }
      if (navSelections.main) {
        setNavSelections((prev) => ({
          ...prev,
          main: null,
          sub: null,
          nether: null,
        }));
        return;
      }
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
              className={`${
                navSelections?.main === el ? "btn-secondary" : ""
              } ${Styles.mainButton}`}
              style={navSelections.main ? { display: "none" } : {}}
              onClick={() => {
                handleMainNavSelected(el);
              }}
            >
              {el}
            </Button>
          </li>
          {navSelections.main === el && (
            <ul
              className={Styles.subNav}
              style={navSelections.sub === "Components" ? { gap: 0 } : {}}
            >
              {navContent.sub?.map((sub, index) => (
                <React.Fragment key={sub + index}>
                  <li>
                    <Button
                      className={
                        navSelections.sub === sub ? "btn-secondary" : ""
                      }
                      style={
                        navSelections.sub === "Components"
                          ? { display: "none" }
                          : {}
                      }
                      onClick={() => {
                        handleSubNavSelected(sub);
                      }}
                    >
                      {sub}
                    </Button>
                  </li>
                  {navContent?.nether.length > 0 &&
                    navSelections.sub === "Components" &&
                    sub === "Components" && (
                      <ul className={Styles.netherNav}>
                        {navContent.nether?.map((nether, index) => (
                          <li key={nether + index}>
                            <Button
                              className={
                                navSelections.nether === nether
                                  ? "btn-secondary"
                                  : ""
                              }
                              onClick={() => {
                                setNavSelections((prev) => ({
                                  ...prev,
                                  nether: nether,
                                }));
                              }}
                            >
                              {nether}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                </React.Fragment>
              ))}
            </ul>
          )}
        </ul>
      ));
    };

    return (
      <main className={Styles.ReferenceArchitecturePage}>
        <HeaderPage category="referenceArchitecture" subInfoHeader />

        <SubInfoHeaderCard />

        <section className={Styles.sectionNav}>{contentNav()}</section>
        <section
          className={`${Styles.sectionNav} ${Styles.sectionNavMobile} ${
            navSelections.main ? Styles.mainActive : ""
          }`}
        >
          {contentNavMobile()}
        </section>
      </main>
    );
  };
