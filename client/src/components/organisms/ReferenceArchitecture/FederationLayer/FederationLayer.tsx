import { PropsWithChildren } from "react";
import Styles from "./FederationLayer.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { Button } from "../../../atoms/Button/Button";
import { openNewWindow } from "../../../../utils/openUrl";

type FederationLayerProps = {};

export const FederationLayer =
  ({}: PropsWithChildren<FederationLayerProps>) => {
    return (
      <div className={Styles.FederationLayer}>
        <Card className={Styles.card}>
          <h3>
            The Federation Layer (or federated services) in the architecture is
            formed by the components that users need to access the services and
            data offered by the participants of another Data Space, without
            compromising the individual data sovereignty.{" "}
          </h3>
          <p>
            These services are mainly about Catalogue Services, Marketplace
            Services and Metadata Broker Services. It can be implemented through
            several mechanisms, for example through Data or Services Publication
            Platforms. They can be offered by data space intermediaries or fully
            decentralised based on P2P mechanisms.
          </p>
        </Card>

        <Card className={Styles.example}>
          <h3>Example</h3>
          <p>
            An example of marketplace services can be the FIWARE Business
            Application Ecosystem component, a combination of the FIWARE
            Business Framework and{" "}
            <a
              href="https://www.tmforum.org/oda/open-apis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TM Forum APIs
            </a>
            .
          </p>

          <Button
            onClick={() => {
              openNewWindow(
                "https://github.com/FIWARE-TMForum/Business-API-Ecosystem"
              );
            }}
          >
            Read more
          </Button>
        </Card>
      </div>
    );
  };
