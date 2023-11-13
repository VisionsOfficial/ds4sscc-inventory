import { PropsWithChildren } from "react";
import Styles from "./TypesOfDataAndDataSources.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { CheckOutCard } from "../../../molecules/Cards/CheckOutCard/CheckOutCard";
import { DatatypesAndSourcesTable } from "../../../molecules/Tables/DatatypesAndSourcesTable/DatatypesAndSourcesTable";

type TypesOfDataAndDataSourcesProps = {};

export const TypesOfDataAndDataSources =
  ({}: PropsWithChildren<TypesOfDataAndDataSourcesProps>) => {
    return (
      <div className={Styles.TypesOfDataAndDataSources}>
        <Card className={Styles.card}>
          <p>
            Creating clear dataset profiles allows partners to understand the
            opportunities and assess the risks in data sharing as well as the
            steps needed to share the data as specified (e.g. data
            cleaning/formatting, set-up of API, etc).
          </p>

          <DatatypesAndSourcesTable />

          <p>
            In addition, it is essential to follow the principle of{" "}
            <span>data minimisation</span> enshrined in GDPR’s article 5(1)(c)
            which states that personal data shall be:“adequate, relevant and{" "}
            <span>
              limited to what is necessary in relation to the purposes for which
              they are processed
            </span>
            ’. While it is key to follow this principle for legal compliance, it
            is also pragmatic to do so. Indeed, in some cases, stakeholders
            might be focusing on getting access to as much data as possible
            (foreseen possible future opportunities) rather than identifying the
            exact categories of data that are required to address the challenge.
            This can lead to lengthy and unnecessary discussions with data
            owners and thus delays in accessing the relevant data.
          </p>
        </Card>

        <CheckOutCard category="priorityDatasets" variantColor="bgGray" />
      </div>
    );
  };
