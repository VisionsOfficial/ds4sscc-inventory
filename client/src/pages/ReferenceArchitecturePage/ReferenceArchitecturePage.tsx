import React, { PropsWithChildren, useState } from "react";
import Styles from "./ReferenceArchitecturePage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { SubInfoHeaderCard } from "../../components/molecules/Cards/SubInfoHeaderCard/SubInfoHeaderCard";
import { Button } from "../../components/atoms/Button/Button";
import { APP_IMAGES_ASSETS } from "../../utils/appImagesAssets";
import { ScopeAndGoals } from "../../components/organisms/ReferenceArchitecture/ScopeAndGoals/ScopeAndGoals";
import { MIMsLiaison } from "../../components/organisms/ReferenceArchitecture/MIMsLiaison/MIMsLiaison";
import { ExistingScenarios } from "../../components/organisms/ReferenceArchitecture/ExistingScenarios/ExistingScenarios";
import { OverviewHL } from "../../components/organisms/ReferenceArchitecture/OverviewHL/OverviewHL";
import { UniversalTrustDataRegistry } from "../../components/organisms/ReferenceArchitecture/UniversalTrustDataRegistry/UniversalTrustDataRegistry";
import { AuthorizationPoliciesStore } from "../../components/organisms/ReferenceArchitecture/AuthorizationPoliciesStore/AuthorizationPoliciesStore";
import { FederationLayer } from "../../components/organisms/ReferenceArchitecture/FederationLayer/FederationLayer";
import { ShortGuide } from "../../components/organisms/ReferenceArchitecture/ShortGuide/ShortGuide";
import { RecipesForScenarios } from "../../components/organisms/ReferenceArchitecture/RecipesForScenarios/RecipesForScenarios";
import { FAQs } from "../../components/organisms/ReferenceArchitecture/FAQs/FAQs";

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
  | "Components"
  | "Case 1: Helsinki"
  | "Case 2: Flanders"
  | "Case 3: Valencia"
  | "Case 4: Amsterdam"
  | "Short guide"
  | "Recipes for scenarios"
  | "FAQs";

export type netherReferenceNav =
  | "Universal Trust Data Registry"
  | "Authorization Policies Store"
  | "Federation Layer";

const CONTENT_MAIN_NAV: MainReferenceNav[] = [
  "Context",
  "High-level Architecture",
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
            sub: ["Overview", "Components"],
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
              "Universal Trust Data Registry",
              "Authorization Policies Store",
              "Federation Layer",
            ],
          }));
          break;

        default:
          setNavContent((prev) => ({ ...prev, nether: [] }));
          break;
      }
    };

    const handleNetherSelected = (nether: netherReferenceNav) => {
      handleSubNavSelected("Components");
      setNavSelections((prev) => ({
        ...prev,
        nether: nether,
      }));
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

    const setBodyClass = () => {
      if (navSelections.main === "Context") {
        return Styles.contentRight;
      } else if (navSelections.main === "Cookbook") {
        return Styles.contentLeft;
      } else {
        return "";
      }
    };

    const contentBody = () => {
      if (navSelections.nether) {
        switch (navSelections.nether) {
          case "Universal Trust Data Registry":
            return <UniversalTrustDataRegistry />;
          case "Authorization Policies Store":
            return <AuthorizationPoliciesStore />;
          case "Federation Layer":
            return <FederationLayer />;

          default:
            return null;
        }
      }

      switch (navSelections.sub) {
        case "Scope & Goals":
          return <ScopeAndGoals />;
        case "MIMs liaison":
          return <MIMsLiaison />;
        case "Existing scenarios":
          return <ExistingScenarios />;
        case "Overview":
          return <OverviewHL updateNavSelected={handleNetherSelected} />;
        case "Short guide":
          return <ShortGuide />;
        case "Recipes for scenarios":
          return <RecipesForScenarios />;
        case "FAQs":
          return <FAQs />;

        default:
          return null;
      }
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
        <HeaderPage category="referenceArchitecture" />

        <SubInfoHeaderCard category="referenceArchitecture" />

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
      </main>
    );
  };
