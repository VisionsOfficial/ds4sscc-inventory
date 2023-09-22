import { PropsWithChildren, useRef, useState } from "react";
import Styles from "./CollectedUseCasesPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { UseCaseCard } from "../../components/molecules/Cards/UseCaseCard/UseCaseCard";
import { USE_CASES_DATA } from "../../data/useCasesData";

type CollectedUseCasesPageProps = {};

export const CollectedUseCasesPage =
  ({}: PropsWithChildren<CollectedUseCasesPageProps>) => {
    const [useCaseSelected, setUseCaseSelected] = useState<string>();
    const useCaseSelectedRef = useRef<HTMLElement | null>(null);

    const scrollToUseCaseSelected = () => {
      if (useCaseSelectedRef.current) {
        useCaseSelectedRef.current.scrollIntoView({ behavior: "smooth" });
      } else {
        const element = document.documentElement;
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

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
