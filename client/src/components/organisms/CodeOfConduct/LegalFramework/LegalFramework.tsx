import { PropsWithChildren } from "react";
import Styles from "./LegalFramework.module.scss";
import { LegalFrameworkTable } from "../../../molecules/Tables/LegalFrameworkTable/LegalFrameworkTable";
import { ContractualAgreementsTable } from "../../../molecules/Tables/ContractualAgreementsTable/ContractualAgreementsTable";

type LegalFrameworkProps = {};

export const LegalFramework = ({}: PropsWithChildren<LegalFrameworkProps>) => {
  return (
    <div className={Styles.LegalFramework}>
      <p>
        Digital sovereignty and fair and trustworthy data sharing have been
        identified as policy priorities of the European Commission under the
        agenda of ‘A Europe fit for the{" "}
        <a
          href="https://ec.europa.eu/commission/presscorner/detail/en/ip_20_273"
          target="_blank"
        >
          digital age
        </a>
        ’ and with the publication of the European Data Strategy (2020). In
        practice, the creation and deployment of common European data spaces fit
        within an existing and emerging cross-sectoral regulatory ecosystem.
      </p>

      <h3>Regulatory ecosystem</h3>
      <p>
        DS4SSCC must comply within the existing and upcoming cross-sectorial
        legislation related to non-personal and personal data including the Data
        Governance Act; the Data Act; the Open Data Directive and the
        Implementing Act on High Value Datasets, the Regulation on the Free Flow
        of Non-Personal Data, the General Data Protection Regulation, and
        ePrivacy Directive (see Table 6).
      </p>

      <LegalFrameworkTable category="crossSectorialLegislation" />

      <p>
        The DGA and DA are particularly relevant in the context of DS4SSCC. The
        DGA aims to (1) promote the fair reuse of certain categories of
        protected data held by public sector bodies ; (2) foster the creation of
        data intermediation services, and (3) facilitate data altruism
        understood as a voluntary donation of data by entities, individuals, or
        organisations that make data available for the common good. Finally, it
        also supports the creation and development of common European data
        spaces.
      </p>

      <p>
        The DA aims at maximising the value of data by ensuring that a wider
        range of stakeholders (including citizens) gains control over their data
        in B2B, B2G and B2C contexts and that more data is used to generate
        innovation and boost the digital economy. The text gives public sector
        bodies the right to access and use private sector data in situations of
        public emergency, for implementing a legal mandate and for reducing the
        administrative burden in cities as well as introduces the possibility of
        sharing data with third parties and new rules for allowing cloud
        switching between cloud providers. These provisions would allow local
        authorities to gain access to data that could be used to develop
        data-driven innovative services in the city, such as for mobility,
        climate transition and urban planning purposes.
      </p>

      <p>
        Other relevant cross-sectorial regulations to consider when it comes to
        data sharing and re(use) include Artificial Intelligence, Digital
        Identity, Cybersecurity, Intellectual Property Rights, Interoperability
        and Platforms and Digital Services (see Table 7). These regulations
        intersect with different components of data exchanges.
      </p>

      <LegalFrameworkTable category="otherRelevant" />

      <p>
        DS4SSCC must also comply with EU Competition policies and regulations to
        promote fair commercial and competition practices (e.g.,{" "}
        <a
          href="https://competition-policy.ec.europa.eu/antitrust/legislation_en"
          target="_blank"
        >
          Antitrust legislation
        </a>
        ,{" "}
        <a
          href="https://commission.europa.eu/law/law-topic/consumer-protection-law_en"
          target="_blank"
        >
          Consumer protection law
        </a>
        ,{" "}
        <a
          href="https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law_en"
          target="_blank"
        >
          Consumer contract law
        </a>
        ,{" "}
        <a
          href="https://single-market-economy.ec.europa.eu/single-market/public-procurement/legal-rules-and-implementation_en"
          target="_blank"
        >
          Public procurement rules and legislations
        </a>
        ).
      </p>
      <p>
        National and local specific frameworks need also to be taken into
        account. For example, the French Law for a Digital Republic (‘
        <a
          href="https://www.wipo.int/wipolex/en/legislation/details/18412"
          target="_blank"
        >
          Projet de loi pour une République numérique
        </a>
        ’) adopted in 2016 mandates companies operating under public service
        delegation (e.g., utilities, transportation) to publish their data.
        France also adopted a law on Energy Transition and Green Growth (2015),
        which compels energy distributors to publish local energy consumption
        data (see Chignard & Glatron, 2023).{" "}
      </p>
      <p>
        Finally, the legal framework of DS4SSCC will be informed by relevant
        sector policies and regulations according to specific use-cases. For
        example, National Data Access Points have been established to facilitate
        access, easy exchange and reuse of data in the{" "}
        <a
          href="https://transport.ec.europa.eu/transport-themes/intelligent-transport-systems/road/action-plan-and-directive/national-access-points_en"
          target="_blank"
        >
          transport sector
        </a>
        .
      </p>

      <h3>Contractual agreements</h3>
      <p>
        Following the legal frameworks highlighted in the previous section,
        DS4SSCC should consist of several types of contractual agreements as
        stated in Table 8.
      </p>

      <ContractualAgreementsTable />
    </div>
  );
};
