import { PropsWithChildren } from "react";
import Styles from "./CapacityBuildingPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";

type CapacityBuildingPageProps = {};

export const CapacityBuildingPage =
  ({}: PropsWithChildren<CapacityBuildingPageProps>) => {
    return (
      <main className={Styles.CapacityBuildingPage}>
        <HeaderPage category="capacityBuilding" />

        <section className={Styles.content}>
          <p>
            The DS4SSCC initiative places a strong emphasis on Capacity Building
            activities to foster mutual learning and knowledge-sharing within
            European data ecosystems. This report provides an overview of these
            activities, their scope, and structure.
          </p>
          <p>
            Background: The European Union is transitioning towards smarter and
            more connected communities, making it crucial to promote mutual
            learning and capacity building among local data ecosystems. DS4SSCC
            aims to achieve this by leveraging insights from various EU
            initiatives like Living-in.EU, DT4REGIONS, LEAD, and DUET to promote
            AI-enabled data services and digital transformation.
          </p>
          <p>
            Scope: DS4SSCC's Capacity Building activities revolve around
            creating an interactive training program tailored to data space
            ecosystems. It offers online short-term training opportunities for
            public managers and practitioners while serving as a knowledge hub
            for EU initiatives. The process involves three key steps:
          </p>
          <ol>
            <li>
              Collection of Capacity Building needs and main interests:
              Collaborative assessment involving stakeholder communities and
              partners to understand specific needs and interests.
            </li>
            <li>
              Co-design of learning contents and materials: Collaborative
              development with external initiatives and project partners to
              customise content for data space communities.
            </li>
            <li>
              Engagement of participants and promotion: Organising webinars,
              workshops, and open debates to facilitate mutual learning and
              skills development, with a focus on cross-sector and
              cross-community data services.
            </li>
          </ol>
          <p>
            Structure: DS4SSCC's Capacity Building activities consist of two
            main components:
          </p>
          <ul>
            <li>
              The Training Programme: Offers short video lessons and supporting
              materials accessible through the DS4SSCC Training Hub. It targets
              public managers, practitioners, and stakeholders, addressing the
              specific needs of data space communities.
            </li>
            <li>
              Mutual Learning Initiatives: Facilitate collaboration and
              knowledge exchange among stakeholders. This includes Stakeholder
              Forum meetings, webinars, workshops, and open debates, with all
              resources hosted on the DS4SSCC Training Hub. These initiatives
              complement the Training Programme by promoting active
              participation and community engagement.
            </li>
          </ul>
          <p>
            Training Hub: The DS4SSCC Training Hub is an online platform
            centralising access to various training resources and materials. It
            acts as a repository for video lessons, presentations, reports, and
            supporting materials related to capacity building activities. The
            Training Hub is easily accessible through the DS4SSCC project's
            website, serving as a convenient resource for enhancing knowledge
            and skills in data spaces for smart and sustainable cities and
            communities.
          </p>
        </section>
      </main>
    );
  };
