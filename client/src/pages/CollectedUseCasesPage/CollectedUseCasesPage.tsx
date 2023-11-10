import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Styles from "./CollectedUseCasesPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { UseCaseCard } from "../../components/molecules/Cards/UseCaseCard/UseCaseCard";
import { USE_CASES_DATA } from "../../data/useCasesData";
import { useLocation } from "react-router-dom";

type CollectedUseCasesPageProps = {};

export const CollectedUseCasesPage =
  ({}: PropsWithChildren<CollectedUseCasesPageProps>) => {
    const [useCaseSelected, setUseCaseSelected] = useState<string>();
    const useCaseSelectedRef = useRef<HTMLElement | null>(null);
    const { search } = useLocation();
    const searchContent = search.split("?")[1];

    const scrollToUseCaseSelected = () => {
      if (useCaseSelectedRef.current) {
        useCaseSelectedRef.current.scrollIntoView({ behavior: "smooth" });
      } else {
        const element = document.documentElement;
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    useEffect(() => {
      if (!search) return;

      switch (searchContent) {
        case "IDEA":
          setUseCaseSelected("Intelligence Data Exchange Alliance");
          break;
        case "Helsinki":
          setUseCaseSelected("Energy & Climate Atlas");
          break;
        case "UrbanPlanning%20Eindhoven":
          setUseCaseSelected("Smart Urban Planning");
          break;
        case "Flanders%20Smart%20Data%20Space":
          setUseCaseSelected("Smart Data Space");
          break;
        case "Farm2Fork":
          setUseCaseSelected("Fram2Fork");
          break;

        default:
          break;
      }
    }, [search, searchContent]);

    console.log(searchContent);

    return (
      <main className={Styles.CollectedUseCasesPage}>
        <HeaderPage category="collectedUseCases" />

        <section
          className={Styles.useCaseSelected}
          style={!useCaseSelected ? { padding: 0 } : {}}
          ref={useCaseSelectedRef}
        >
          {USE_CASES_DATA?.map((uc, index) => {
            if (useCaseSelected === uc.name) {
              return (
                <UseCaseCard
                  key={uc.name + index}
                  useCase={uc}
                  active
                  onclick={() => {
                    setUseCaseSelected("");
                  }}
                />
              );
            }
          })}
        </section>

        <section className={Styles.content}>
          {USE_CASES_DATA?.map((uc, index) => {
            if (useCaseSelected === uc?.name) return null;
            return (
              <UseCaseCard
                key={uc.name + index}
                useCase={uc}
                onclick={() => {
                  setUseCaseSelected(uc.name);
                  scrollToUseCaseSelected();
                }}
              />
            );
          })}
        </section>
      </main>
    );
  };
