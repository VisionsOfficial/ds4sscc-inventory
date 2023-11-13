import { PropsWithChildren } from "react";
import Styles from "./LegalFrameworkTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";

type LegalFrameworkTableProps = {
  category: "crossSectorialLegislation" | "otherRelevant";
};

type ContentLegalFrameworkTable = {
  link: {
    name: string;
    url: string;
  };
  description: string;
  status: "Ongoing" | "Completed, in force in Sept 2023" | "In force";
};

const CONTENT_TABLE: ContentLegalFrameworkTable[] = [
  {
    link: {
      name: "Data Act",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=COM%3A2022%3A68%3AFIN",
    },
    description:
      "Proposal for a Regulation Of The European Parliament And Of The Council on harmonised rules on fair access to and use of data",
    status: "Ongoing",
  },
  {
    link: {
      name: "Data Governance Act",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A52020PC0767https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A52020PC0767",
    },
    description:
      "Proposal for a Regulation of the European Parliament and of the Council on European data governance",
    status: "Completed, in force in Sept 2023",
  },
  {
    link: {
      name: "ePrivacy Directive",
      url: "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32002L0058",
    },
    description:
      "Directive 2002/58/EC of the European Parliament and of the Council of 12 July 2002 concerning the processing of personal data and the protection of privacy in the electronic communications sector",
    status: "In force",
  },
  {
    link: {
      name: "ePrivacy Regulation",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52017PC0010",
    },
    description:
      "Proposal for a Regulation Of The European Parliament And Of The Council concerning the respect for private life and the protection of personal data in electronic communications and repealing Directive 2002/58/EC (Regulation on Privacy and Electronic Communications)",
    status: "Ongoing",
  },
  {
    link: {
      name: "General Data Protection Regulation",
      url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
    },
    description:
      "General Regulation on data protection 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data",
    status: "In force",
  },
  {
    link: {
      name: "Implementing Act on High-Value Datasets",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2023.019.01.0043.01.ENG",
    },
    description:
      "Commission Implementing Regulation (EU) 2023/138 of 21 December 2022 laying down a list of specific high-value datasets and the arrangements for their publication and re-use",
    status: "In force",
  },
  {
    link: {
      name: "Open Data Directive",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1561563110433&uri=CELEX:32019L1024",
    },
    description:
      "Directive (EU) 2019/1024 of the European Parliament and of the Council of 20 June 2019 on open data and the re-use of public sector information",
    status: "In force",
  },
  {
    link: {
      name: "Regulation on the Free Flow of Non-Personal Data",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32018R1807",
    },
    description:
      "Regulation (EU) 2018/1807 of the European Parliament and of the Council of 14 November 2018 on a framework for the free flow of non-personal data in the European Union",
    status: "In force",
  },
];

const CONTENT_OTHER_RELEVANT_TABLE: ContentLegalFrameworkTable[] = [
  {
    link: {
      name: "Artificial Intelligence Act",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A52021PC0206",
    },
    description:
      "Proposal For A Regulation Of The European Parliament And Of The Council Laying Down Harmonised Rules On Artificial Intelligence (Artificial Intelligence Act) And Amending Certain Union Legislative Acts",
    status: "Ongoing",
  },
  {
    link: {
      name: "AI Liability Directive",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52022PC0496",
    },
    description:
      "Proposal for a Directive Of The European Parliament And Of The Council on adapting non-contractual civil liability rules to artificial intelligence",
    status: "Ongoing",
  },
  {
    link: {
      name: "Copyright in the Digital Single Market Directive",
      url: "https://eur-lex.europa.eu/eli/dir/2019/790/oj",
    },
    description:
      "Directive (EU) 2019/790 of the European Parliament and of the Council of 17 April 2019 on copyright and related rights in the Digital Single Market and amending Directives 96/9/EC and 2001/29/EC",
    status: "In force",
  },
  {
    link: {
      name: "Cybersecurity Act",
      url: "https://eur-lex.europa.eu/eli/reg/2019/881/oj",
    },
    description:
      "Regulation (EU) 2019/881 of the European Parliament and of the Council of 17 April 2019 on ENISA (the European Union Agency for Cybersecurity) and on information and communications technology cybersecurity certification and repealing Regulation (EU) No 526/2013 (Cybersecurity Act) (Text with EEA relevance)",
    status: "In force",
  },
  {
    link: {
      name: "Digital Markets Act",
      url: "https://eur-lex.europa.eu/eli/reg/2022/1925",
    },
    description:
      "Regulation (EU) 2022/1925 of the European Parliament and of the Council of 14 September 2022 on contestable and fair markets in the digital sector and amending Directives (EU) 2019/1937 and (EU) 2020/1828",
    status: "In force",
  },
  {
    link: {
      name: "Digital Services Act",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32022R2065",
    },
    description:
      "Regulation (EU) 2022/2065 of the European Parliament and of the Council of 19 October 2022 on a Single Market For Digital Services and amending Directive 2000/31/EC",
    status: "In force",
  },
  {
    link: {
      name: "eIDAS",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2014.257.01.0073.01.ENG",
    },
    description:
      "Regulation 910/2014 on electronic identification and trust services for electronic transactions in the internal market",
    status: "In force",
  },
  {
    link: {
      name: "Interoperable Europe Act",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52022PC0720",
    },
    description:
      "Proposal for a Regulation of the European Parliament and of the Council laying down measures for a high level of public sector interoperability across the Union",
    status: "Ongoing",
  },
  {
    link: {
      name: "NIS2 Directive",
      url: "https://eur-lex.europa.eu/eli/dir/2022/2555",
    },
    description:
      "Directive (EU) 2022/2555 of the European Parliament and of the Council of 14 December 2022 on measures for a high common level of cybersecurity across the Union",
    status: "In force",
  },
  {
    link: {
      name: "Platform-to-Business Regulation",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R1150",
    },
    description:
      "Regulation (EU) 2019/1150 of the European Parliament and of the Council of 20 June 2019 on promoting fairness and transparency for business users of online intermediation services",
    status: "In force",
  },
];

export const LegalFrameworkTable = ({
  category,
}: PropsWithChildren<LegalFrameworkTableProps>) => {
  const contentTaleBody = () => {
    switch (category) {
      case "crossSectorialLegislation":
        return CONTENT_TABLE.map((el, index) => (
          <TableRow key={el.link.name + index}>
            <td>
              <span>Legislation/ regulation</span>
              <a href={el.link.url} target="_blank">
                {el.link.name}
              </a>
            </td>
            <td>
              <span>Legislation/ regulation</span>
              {el.description}
            </td>
            <td>
              <span>Status</span>
              {el.status}
            </td>
          </TableRow>
        ));

      case "otherRelevant":
        return CONTENT_OTHER_RELEVANT_TABLE.map((el, index) => (
          <TableRow key={el.link.name + index}>
            <td>
              <span>Legislation/ regulation</span>
              <a href={el.link.url} target="_blank">
                {el.link.name}
              </a>
            </td>
            <td>
              <span>Legislation/ regulation</span>
              {el.description}
            </td>
            <td>
              <span>Status</span>
              {el.status}
            </td>
          </TableRow>
        ));

      default:
        return null;
    }
  };

  return (
    <Table className={Styles.LegalFrameworkTable}>
      <caption>
        {category === "crossSectorialLegislation"
          ? "Table 6: EU cross-sectorial legislation related to non-personal and personal data"
          : "Table 7: Other relevant EU cross-sectorial regulations"}
      </caption>
      <TableHead variantColor="secondary">
        <TableRow>
          <th>Legislation/ regulation</th>
          <th>Description</th>
          <th>Status</th>
        </TableRow>
      </TableHead>
      <TableBody variantColorMobile="secondary">{contentTaleBody()}</TableBody>
    </Table>
  );
};
