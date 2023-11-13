import { PropsWithChildren } from "react";
import Styles from "./UniversalTrustDataRegistry.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { TextWithIcon } from "../../../molecules/Texts/TextWithIcon/TextWithIcon";
import { CategoryCard } from "../../../molecules/Cards/CategoryCard/CategoryCard";

type UniversalTrustDataRegistryProps = {};

type UniversalTrustDataRegistryComponents =
  | "Public Key Storage"
  | "Revocation List"
  | "Trusted Participant List"
  | "Trusted Issuers List"
  | "REST API as an interface";

type FrameworkCompatibility = {
  title:
    | "W3C"
    | "Verifiable Credentials Issuance Protocols"
    | "Self-Issued OpenID Provider"
    | "Verifiable Credentials Exchange Protocol";
  link: {
    name: string;
    website: string;
  }[];
};

const CONTENT_UTDR: UniversalTrustDataRegistryComponents[] = [
  "Public Key Storage",
  "Revocation List",
  "Trusted Participant List",
  "Trusted Issuers List",
  "REST API as an interface",
];

const CONTENT_FRAMEWORK: FrameworkCompatibility[] = [
  {
    title: "W3C",
    link: [
      {
        name: "DID (Decentralised Identifiers)",
        website: "https://www.w3.org/TR/did-core/",
      },
      {
        name: "Verifiable Credentials (VC)",
        website: "https://www.w3.org/TR/vc-data-model/",
      },
    ],
  },
  {
    title: "Verifiable Credentials Issuance Protocols",
    link: [
      {
        name: "OIDC4VCI",
        website:
          "https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html",
      },
    ],
  },
  {
    title: "Self-Issued OpenID Provider",
    link: [
      {
        name: "SIOPv2",
        website:
          "https://openid.net/specs/openid-connect-self-issued-v2-1_0.html",
      },
    ],
  },
  {
    title: "Verifiable Credentials Exchange Protocol",
    link: [
      {
        name: "OIDC4VP",
        website:
          "https://openid.net/specs/openid-connect-4-verifiable-presentations-1_0-08.html",
      },
    ],
  },
];

export const UniversalTrustDataRegistry =
  ({}: PropsWithChildren<UniversalTrustDataRegistryProps>) => {
    return (
      <div className={Styles.UniversalTrustDataRegistry}>
        <Card className={Styles.utdrComponentCard}>
          <p>
            It allows the authentication and authorization of the data space
            participants which credentials are registered on it, as a trust
            authority.
          </p>

          <div className={Styles.componentCards}>
            <h3>
              The Universal Trust Data Registry should have the following
              components
            </h3>
            <div className={Styles.componentCardsContent}>
              {CONTENT_UTDR.map((el, index) => (
                <Card key={el + index} className={Styles.card}>
                  <div className={Styles.checkbox}></div>
                  <p>{el}</p>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        <Card className={Styles.framework}>
          <h3>Trust Framework Compatibility</h3>
          <p>
            DS4SSCC proposes a decentralised Trust framework compatible with the{" "}
            <a
              href="https://digital-strategy.ec.europa.eu/en/library/european-digital-identity-wallet-architecture-and-reference-framework"
              target="_blank"
              rel="noopener noreferrer"
            >
              EU DID Wallet Architecture
            </a>{" "}
            and{" "}
            <a
              href="https://ec.europa.eu/digital-building-blocks/wikis/display/EBSIDOC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EBSI
            </a>{" "}
            and a decentralised Identity Management based on latest W3C and OIDC
            standards:
          </p>

          <div className={Styles.frameworkCards}>
            {CONTENT_FRAMEWORK.map((el, index) => (
              <Card key={el.title + index} className={Styles.card}>
                <p className={Styles.title}>{el.title}</p>
                <ul>
                  {el.link.map((link, i) => (
                    <li key={link.name + i}>
                      <TextWithIcon
                        variantIcon="arrow"
                        className={Styles.listContainer}
                      >
                        <a
                          href={link.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      </TextWithIcon>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Card>

        <div className={Styles.examples}>
          <h3>Two examples of implementations</h3>
          <div className={Styles.cards}>
            <CategoryCard
              category="GAIA-X"
              variantColor="bgGray"
              className={Styles.card}
            />
            <CategoryCard
              category="iShare"
              variantColor="bgGray"
              className={Styles.card}
            />
          </div>
        </div>
      </div>
    );
  };
