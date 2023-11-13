import { PropsWithChildren } from "react";
import Styles from "./GuidingDataCooperationCanvasTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type GuidingDataCooperationCanvasTableProps = {};

type BodyTable = {
  section: "Why" | "Who" | "What" | "How";
  description: string;
};

const CONTENT_BODY: BodyTable[] = [
  {
    section: "Why",
    description: `What is the purpose of the data exchange? <br />
        What are the outcomes envisioned for the data exchange? <br />
        What is the scope of the data exchange? What is out of scope? <br />
        What is the context that creates the opportunity/necessity for data exchange? <br />
        Why will this data exchange succeed? What is the added value for participants? <br />
        What is the motivation for the key partners to join the data exchange? 
        `,
  },
  {
    section: "Who",
    description: `Who will be the partners in the initiative? How (much) would they contribute? <br />
    Who will be interested in / able to participate? How many participants will the exchange have? What are the “dream participants”? <br />
    Are there other organisations that also want to share the same kind of data?  <br />
    What key roles are needed to sustain the cooperation? What rights and responsibilities are associated with these roles? <br />
    What will be the data intermediary organisation (if any)? 
    `,
  },
  {
    section: "What",
    description: `What types of data will the data exchange involve? <br />
    What organisation will share what data when? <br />
    What is the provenance/source of the datasets? <br />
    What is the data quality (e.g., format, standards, etc)? <br />
    What organisational resources are required for this data cooperation? What resources are available already? What needs to be done to get all required resources? <br />
    What steps are performed as a shared process in the data exchange? What steps are done individually?
    How can the data be uniformed/standardised/combined? <br />
    What shared concepts, languages, formats, or methods can be used?  What data standards & formats are used or need to be used? <br />
    What technical concepts or models need to be in place for the data exchange. What MIMs are implemented and how are they implemented? <br />
    What technical infrastructure is needed for the data exchange?
    `,
  },
  {
    section: "How",
    description: `What will the long-term business model of the exchange look like? <br />
    How should the value created be distributed?  <br />
    What are the costs of the data exchange? Who is paying? What are the revenues? Who is profiting? What compensation, fees or other financials are needed?  <br />
    How are decisions made? <br />
    What operational processes/ mechanisms should be in place? (e.g., monitoring, accountability, certification, clearance, conflict resolution, termination, etc.)  <br />
    What are the most appropriate contractual agreements? <br />
    What are the relevant local/national/European frameworks to consider? <br />
    How will the data exchange be implemented and sustained over time?
    `,
  },
];

export const GuidingDataCooperationCanvasTable =
  ({}: PropsWithChildren<GuidingDataCooperationCanvasTableProps>) => {
    return (
      <Table className={Styles.GuidingDataCooperationCanvasTable}>
        <TableHead variantColor="secondary">
          <TableRow>
            <th colSpan={5}>
              Guiding questions to fill the Data Cooperation Canvas
            </th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_BODY.map((el, index) => (
            <TableRow key={el.section + index}>
              <td colSpan={1}>{el.section}</td>
              <td colSpan={4}>
                <p dangerouslySetInnerHTML={{ __html: el.description }}></p>
              </td>
            </TableRow>
          ))}
        </TableBody>
        <caption>Table 9: Data Cooperation Canvas- Guiding Questions</caption>
      </Table>
    );
  };
