import { PropsWithChildren } from "react";
import Styles from "./ShortGuide.module.scss";
import { DropdownCard } from "../../../molecules/Cards/DropdownCard/DropdownCard";

type ShortGuideProps = {};

type ShortGuide = {
  title: string;
  description: string;
};

const CONTENT_SHORT_GUIDE: ShortGuide[] = [
  {
    title: "Why does my city/community want to engage in a data space?",
    description:
      "We recommend exploring your motivation, ecosystem, existing data and technologies by using the Data Cooperation Canvas tool proposed by DS4SSCC. Through this tool you will consolidate in one unique diagram the most relevant points and information to make the right decision about your data space.",
  },
  {
    title:
      "Which is the technical maturity of my city/community to be engaged in a data space?",
    description: `In order to fill the technical dimension of your Data Cooperation Canvas, you would also have to collect the different data sources in your city/community, identify the level of digitalization of your data process (if you have a data platform, or some digitalized services, or no digitalization at all) and the existing technical infrastructures. In many cases the engagement to a data space will be an evolution from your current scenario (brownfield, greenfield, digital twin). The technical analysis should also include the collection of standards and reference implementations you are using currently in your technical infrastructure. The online <a href="https://inventory.ds4sscc.eu/" target="_blank" rel="noopener noreferrer">Catalogue of Specifications</a> collects all the standards, specifications and reference implementations that are currently being used by more than 80 cities interviewed during the project. You may have a look at the catalogue, identify which ones you are using and provide inputs about existing or new standards/implementations. <br /><br/>
      This analysis will give you the starting point for your technical evolution towards a data space.
      `,
  },
  {
    title:
      "How can my city/community organise the surrounding ecosystem with the best governance and fully compliant with EU regulations?",
    description: `We recommend looking at the analysed use cases and identity which one is closer to your current scenario. You can then follow the provided recommendations at local, regional, national and European level to set up the most suitable governance for you and follow the suggested rules for establishing the Code of Conduct.`,
  },
  {
    title:
      "Which are the architectural and technical evolutions that my city/community should do in order to engage in a data space?",
    description: `DS4SSCC proposes a high level reference architecture assuming that the city/community has already a certain level of digitalization, this means, at least a data platform where the data sources are integrated or some digitalized vertical services (parking, gardening, cadastre, water,...). If the city/community is not yet at this stage, a first step would be to set up the digital capture and process of the data in order to be able to share this data with others.<br/><br/>
    Once this pre-requisite has been fulfilled, the mandatory action is to connect to a Universal Trust Data Registry where universal credentials of data space users are stored. The identity and access management system of the city/community data platform must connect to this registry through an Authorization Policies Store, which includes the access rights allowed to the data and services in the platform for each user. Optionally, the city/community platform can be also connected to the Federation Layer to federate the publication and discovery services of the platform with the ones in the data space, as well as the marketplace, if it exists. Explanation about the evolution of the architecture, description of the mentioned components and four examples of application can be found in D3.2 Reference Architecture Model. 
    `,
  },
  {
    title:
      "Which are the stages of a data space and what should my city/community do in each of the stages?",
    description: `Following the recommendations from DSSC, 5 stages have been defined (exploratory, preparatory, implementation, operational, scaling). For each of the stages, the city/community needs to address different steps for governance, architecture and datasets that have been defined in D4.2 Roadmap for implementing a European data space for smart and sustainable cities and communities.`,
  },
];

export const ShortGuide = ({}: PropsWithChildren<ShortGuideProps>) => {
  return (
    <div className={Styles.ShortGuide}>
      <p>
        Would your city or community be interested in getting engaged in a data
        space? We recommend the following steps and pointers to specific
        material.
      </p>

      <div className={Styles.guide}>
        {CONTENT_SHORT_GUIDE.map((guide, index) => (
          <DropdownCard
            key={"guide" + index}
            className={Styles.dropdown}
            classNameActive={Styles.active}
            title={guide.title}
            guideStep={`0${index + 1}`}
          >
            <p
              dangerouslySetInnerHTML={{ __html: guide.description || "" }}
            ></p>
          </DropdownCard>
        ))}
      </div>
    </div>
  );
};
