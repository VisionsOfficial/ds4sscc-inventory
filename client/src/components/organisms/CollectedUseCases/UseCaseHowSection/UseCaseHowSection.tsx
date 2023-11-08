import { PropsWithChildren } from "react";
import Styles from "./UseCaseHowSection.module.scss";
import { UseCase } from "../../../../types";
import { SectionTitleContainer } from "../../../molecules/Containers/SectionTitleContainer/SectionTitleContainer";
import { TextWithIcon } from "../../../molecules/Texts/TextWithIcon/TextWithIcon";
import { Pill } from "../../../atoms/Pills/Pill/Pill";

type UseCaseHowSectionProps = {
  useCase: UseCase;
  category:
    | "standards"
    | "mims"
    | "scope"
    | "datasets"
    | "specs"
    | "referenceImplementations"
    | "maturity"
    | "link";
};

export const UseCaseHowSection = ({
  useCase,
  category,
}: PropsWithChildren<UseCaseHowSectionProps>) => {
  const setTitle = () => {
    switch (category) {
      case "standards":
        return "Standards";
      case "mims":
        return "MIMs";
      case "scope":
        return "Scope";
      case "datasets":
        return "Data Sets";
      case "specs":
        return "Specs";
      case "referenceImplementations":
        return "Reference Implementations";
      case "maturity":
        return "Maturity";
      case "link":
        return "Link";

      default:
        return "";
    }
  };

  const contentBody = () => {
    switch (category) {
      case "standards":
        return (
          <ul>
            {useCase.standards?.map((standard, index) => (
              <li key={standard + index}>
                <TextWithIcon className={Styles.textAndIcon}>
                  {standard}
                </TextWithIcon>
              </li>
            ))}
          </ul>
        );
      case "mims":
        return (
          <ul>
            {useCase.mims?.map((mim, index) => (
              <li key={mim + index}>
                <TextWithIcon className={Styles.textAndIcon}>
                  {mim}
                </TextWithIcon>
              </li>
            ))}
          </ul>
        );
      case "scope":
        return (
          <ul>
            {useCase?.scope?.map((scope, index) => (
              <li key={scope + index}>{scope}</li>
            ))}
          </ul>
        );
      case "datasets":
        return (
          <ul>
            {useCase?.datasets?.map((dataset, index) => (
              <li key={dataset + index}>
                <TextWithIcon
                  className={Styles.textAndIcon}
                  innerHtml={dataset}
                ></TextWithIcon>
              </li>
            ))}
          </ul>
        );
      case "specs":
        return (
          <ul>
            {useCase?.specs?.map((spec, index) => (
              <li key={spec + index}>
                <TextWithIcon
                  className={Styles.textAndIcon}
                  innerHtml={spec}
                ></TextWithIcon>
              </li>
            ))}
          </ul>
        );
      case "referenceImplementations":
        return (
          <ul>
            {useCase?.referenceImplementations?.map((ref, index) => (
              <li key={ref.name + index}>
                <Pill link={ref.url} className={Styles.pill}>
                  {ref.name}
                </Pill>
              </li>
            ))}
          </ul>
        );
      case "maturity":
        return (
          <ul>
            {useCase?.maturity?.map((mat, index) => (
              <p key={mat + index}>{mat}</p>
            ))}
          </ul>
        );
      case "link":
        return (
          <ul>
            {useCase?.links?.map((link, index) => (
              <TextWithIcon
                key={"link" + index}
                className={`${Styles.textAndIcon} ${Styles.link}`}
                onclick={() => {
                  window.open(link.url);
                }}
              >
                {link?.name ? link.name : link.url}
              </TextWithIcon>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <SectionTitleContainer
      className={Styles.UseCaseHowSection}
      title={setTitle()}
    >
      {contentBody()}
    </SectionTitleContainer>
  );
};
