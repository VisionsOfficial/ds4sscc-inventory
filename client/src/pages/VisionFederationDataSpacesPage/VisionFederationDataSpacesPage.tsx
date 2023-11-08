import { PropsWithChildren } from "react";
import Styles from "./VisionFederationDataSpacesPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";

type VisionFederationDataSpacesPageProps = {};

export const VisionFederationDataSpacesPage =
  ({}: PropsWithChildren<VisionFederationDataSpacesPageProps>) => {
    return (
      <main className={Styles.VisionFederationDataSpacesPage}>
        <HeaderPage category="visionsFederation" />

        <section className={Styles.content}>
          <p>
            More specifically, in the vision set out by the European strategy
            for data, the creation of EU-wide common, interoperable data spaces
            in strategic sectors aims at overcoming legal and technical barriers
            to data sharing by combining the necessary tools and infrastructures
            and addressing issues of trust by way of common rules. A common
            European data space brings together relevant data infrastructures
            and governance frameworks in order to facilitate data pooling and
            sharing.
          </p>
          <p>Key Elements of the Vision:</p>
          <ol>
            <li>
              Interoperability: At the heart of the Federation of Data Spaces is
              the idea of interoperability. Data should be able to move freely
              between different data spaces, regardless of the technologies and
              standards used. This interoperability allows for the efficient
              exchange of data, unlocking its potential for innovation.
            </li>
            <li>
              Data Sovereignty: Despite the free flow of data, individuals and
              organisations should retain control over their data. Data
              sovereignty ensures that data owners have the authority to decide
              who can access and use their data and under what conditions.
            </li>
            <li>
              Privacy and Security: The Federation of Data Spaces prioritises
              robust privacy and security measures. Data should be protected
              from unauthorised access and misuse, ensuring that individuals'
              and organisations' sensitive information remains confidential.
            </li>
            <li>
              Standards and Governance: Establishing common standards and
              governance frameworks is crucial to enable the Federation of Data
              Spaces. These standards ensure consistency and compliance,
              promoting trust among data space participants.
            </li>
            <li>
              Inclusivity: The vision encourages the inclusion of various
              stakeholders, from individuals and small businesses to large
              corporations and governments. Inclusivity fosters innovation and
              diversity of data sources.
            </li>
          </ol>
          <p>
            The list of European data spaces as introduced in the European
            strategy for data initially included 9 data spaces (Health,
            Industrial, Agriculture, Finance, Mobility, Green Deal, Energy,
            Public Administration, and Skills). However, new data spaces are
            being constantly developed (such as the DS4SSCC presented here) in a
            broad variety of fields. Individual sectors or communities are
            expected to develop their own instances of data spaces, resulting in
            a multitude of data spaces. Being able to seamlessly share data
            across these data spaces provides clear advantages. It extends the
            reach and scope of accessible data and allows new business models
            and solutions to be developed across sectors and regions.
          </p>
          <p>
            When it comes to smart cities and communities, topics, such as
            Cross-sectorial, Health, Energy, Mobility, and Public Administration
            are most relevant to the field, as presented in D4.1, and hence
            cooperation specifically with ongoing data space initiatives in
            these fields was initiated.
          </p>
        </section>
      </main>
    );
  };
