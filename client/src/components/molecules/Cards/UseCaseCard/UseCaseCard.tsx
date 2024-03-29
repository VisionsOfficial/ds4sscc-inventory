import { PropsWithChildren, useState } from "react";
import Styles from "./UseCaseCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { UseCase } from "../../../../types";
import { LocationTitle } from "../../../atoms/Titles/LocationTitle/LocationTitle";
import { Button } from "../../../atoms/Button/Button";
import { UseCaseHowSection } from "../../../organisms/CollectedUseCases/UseCaseHowSection/UseCaseHowSection";
import { Link } from "react-router-dom";

type UseCaseCardProps = {
  useCase: UseCase;
  className?: string;
  active?: boolean;
  onclick?: () => void;
};

type Nav = "What" | "How";

const NAV_CONTENT: Nav[] = ["What", "How"];

const useCasesWhithoutHowSection = [
  "LxDataLab",
  "DatCity Lab",
  "Rubi Brilla - Rubi City Council",
  "RUDI - Rennes Metropole",
];

export const UseCaseCard = ({
  useCase,
  className,
  active = false,
  onclick,
}: PropsWithChildren<UseCaseCardProps>) => {
  const [navSelected, setNavSelected] = useState<"What" | "How">("What");

  const setProps = () => {
    let classProps = className ? className : "";
    let activeCard = active ? Styles.active : "";

    return [Styles.UseCaseCard, classProps, activeCard].join(" ");
  };

  const handleClick = () => {
    if (onclick) {
      onclick();
    }
  };

  const contentActive = () => {
    switch (navSelected) {
      case "What":
        return (
          <>
            <p
              dangerouslySetInnerHTML={{ __html: useCase?.description }}
              className={Styles.what}
            ></p>
            {useCase.image && (
              <Link to={useCase.image} target="_blank">
                <img src={useCase.image} alt="" />
              </Link>
            )}
          </>
        );

      case "How":
        if (useCasesWhithoutHowSection.find((el) => el === useCase.name))
          return null;
        return (
          <div className={Styles.howSection}>
            <UseCaseHowSection useCase={useCase} category="standards" />

            <UseCaseHowSection useCase={useCase} category="mims" />

            <UseCaseHowSection useCase={useCase} category="scope" />

            <UseCaseHowSection useCase={useCase} category="datasets" />

            <UseCaseHowSection useCase={useCase} category="specs" />

            <UseCaseHowSection
              useCase={useCase}
              category="referenceImplementations"
            />

            <UseCaseHowSection useCase={useCase} category="maturity" />

            <UseCaseHowSection useCase={useCase} category="link" />
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className={Styles.wrapper}>
      <Card
        className={setProps()}
        onClick={() => {
          handleClick();
        }}
      >
        <div className={Styles.locations}>
          {useCase.collaborators.map((colab, index) => (
            <LocationTitle key={colab.location + index} collaborator={colab} />
          ))}
        </div>
        <h3>{useCase.name}</h3>
      </Card>

      {active && (
        <section className={Styles.activeContent}>
          <div className={Styles.nav}>
            {NAV_CONTENT?.map((el, index) => {
              if (
                useCasesWhithoutHowSection.find((el) => el === useCase.name) &&
                el === "How"
              )
                return null;

              return (
                <Button
                  key={el + index}
                  onClick={() => {
                    setNavSelected(el);
                  }}
                  className={navSelected === el ? "btn-secondary" : ""}
                >
                  {el}
                </Button>
              );
            })}
          </div>
          {contentActive()}
        </section>
      )}
    </div>
  );
};
