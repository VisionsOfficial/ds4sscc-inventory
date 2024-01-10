import { PropsWithChildren } from "react";
import Styles from "./FAQs.module.scss";
import { DropdownCard } from "../../../molecules/Cards/DropdownCard/DropdownCard";

type FAQsProps = {};

type FAQDropdown = {
  title: string;
  description: string;
};

const CONTENT_FAQ: FAQDropdown[] = [
  {
    title: "What is a data space?",
    description: `According to the <a href="https://dssc.eu/space/Glossary/176554052/2.+Core+Concepts" target="_blank" rel="noopener noreferrer">DSSC Glossary</a>, a data space is “a distributed system defined by a governance framework that enables trustworthy data transactions between participants while supporting trust and data sovereignty”. A data space then consists of several actors who want to share and exchange data as an asset, and they need all the instruments to do that in a trusted and smooth manner. A data space needs to facilitate the agreements amongst participants to carry out the data transaction, which not necessarily has to be monetized. All the participants need to gain some value out of the data exchange.`,
  },
  {
    title: "Which is the value of a data space for a city or a community?",
    description: `The data spaces are the natural step for cities and communities with a certain degree of digitalization which have already integrated the data sources from the city in a data platform or digital services. It can also be an ambition for those cities still in digitalization progress but looking at the future.<br/><br/>
    With the evolution from data platforms to data spaces, the cities and communities will facilitate their access to data from third parties and vice-versa. This will happen without a significant investment in the integration of these third parties (city providers, e.g.) and without any implementation and any additional cost. Additionally, the cities could also monetize their data which is not openly available in their open data portals, allowing to reinvest these means in further enriching their digital offering.<br/><br/>
    Ultimately, thanks to these benefits, they could provide more efficient and sustainable services to the citizens and could engage them as data space participants, either as data providers and/or data consumers.
    `,
  },
  {
    title: "Why should I engage in a data space?",
    description:
      "Before embarking on this endeavour, be sure about your readiness and motivation for that. We recommend following the steps indicated in Short Guidance.",
  },
  {
    title: "What is a data space blueprint?",
    description: `According to the <a href="https://dssc.eu/space/Glossary/176554169/10.+DSSC-specific+terms" target="_blank" rel="noopener noreferrer">DSSC Glossary</a>, a data space blueprint is “a consistent, coherent and comprehensive set of guidelines to support the implementation, deployment and maintenance of data spaces”. Every data space may define different elements to include in the blueprint, but usually it should include a glossary, a conceptual model, a reference architecture, an inventory of components, standards and technologies and all the guidelines to use this material.`,
  },
  {
    title: "What does the DS4SSCC Technical Blueprint include?",
    description: `The DS4SSCC technical blueprint includes a Reference Architecture Model for smart cities and communities, a <a href="https://inventory.ds4sscc.eu/" target="_blank" rel="noopener noreferrer">Catalogue of Specifications</a> with the standards and reference implementations for each building block and a CookBook with all the recipes for the emerging data spaces to be deployed. This blueprint is complemented with the Governance, Use Cases and Roadmap described in other sections in the web.`,
  },
  {
    title: "How should I use the Catalogue of Specifications?",
    description: `The Catalogue is available <a href="https://inventory.ds4sscc.eu/" target="_blank" rel="noopener noreferrer">online</a> for consultation and evolution. Every city or community may look at the Catalogue to find which are most adopted standards and reference implementations used in other cities and communities. In this way, it can decide to follow them for the sake of interoperability or provide extensions to this catalogue by filling the online form. A <a href="https://drive.google.com/file/d/174_g8dAM3yxRiyTFUSvxvE4zEgYiAlaz/view" target="_blank" rel="noopener noreferrer">documented version</a> of the Catalogue is also available for reading all the details about the sources and process to build the Catalogue.`,
  },
  {
    title: "How can I identify which scenario is my city/community?",
    description:
      "Visit the section Existing Scenarios where the scenarios are described and find the closest. The recipes for each specific scenario can be found in section Recipes.",
  },
  {
    title:
      "How should I apply the proposed high level architecture to my concrete scenario?",
    description: `In the case of the brownfield or digital twin scenarios, the basic concept is to use the three recommended components in the high level architecture (coloured in green). Examples about how to use these components in several architectures can be found in section Components where four cases are described. In the case of the greenfield scenario, we recommend first to follow the steps indicated in section Recipes for this case of scenarios.`,
  },
  {
    title:
      "How can I find support to deploy the data space instance in my city/community?",
    description: `You may find support at the Data Spaces Support Center (DSSC) by mailing to <a href="mailto:support@dssc.eu">support@dssc.eu</a> or via this <a href="https://dataspacessupportcentre.atlassian.net/servicedesk/customer/portal/5/group/13/create/43" target="_blank" rel="noopener noreferrer">link</a>. If you apply to some of the open calls to be launched by the deployment project for the DS4SSCC, you will also have support from this project (information to be provided).`,
  },
  {
    title: "How can I keep posted about future evolutions?",
    description: `In order to follow all that is happening, you may stay tuned by following the <a href="https://www.linkedin.com/company/ds4sscc/" target="_blank" rel="noopener noreferrer">Linkedin</a> or <a href="https://twitter.com/ds4sscc" target="_blank" rel="noopener noreferrer">Twitter</a> accounts for DS4SSCC, or via <a href="https://www.ds4sscc.eu/" target="_blank" rel="noopener noreferrer">web site</a>.`,
  },
];

export const FAQs = ({}: PropsWithChildren<FAQsProps>) => {
  return (
    <div className={Styles.FAQs}>
      {CONTENT_FAQ.map((el, index) => (
        <DropdownCard
          key={el.title + index}
          title={el.title}
          className={Styles.dropdown}
          classNameActive={Styles.active}
        >
          <p dangerouslySetInnerHTML={{ __html: el.description || "" }}></p>
        </DropdownCard>
      ))}
    </div>
  );
};
