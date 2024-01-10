import { PropsWithChildren } from "react";
import Styles from "./RecommendedActionStandardisationPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { APP_IMAGES_ASSETS } from "../../utils/appImagesAssets";

type RecommendedActionStandardisationPageProps = {};

export const RecommendedActionStandardisationPage =
  ({}: PropsWithChildren<RecommendedActionStandardisationPageProps>) => {
    return (
      <main className={Styles.RecommendedActionStandardisationPage}>
        <HeaderPage category="recommendedAction" />

        <section className={Styles.content}>
          <div className={Styles.part}>
            <h3>The Importance of Standardisation</h3>
            <p>
              A key aspect of the Roadmap for implementing a European data space
              for smart and sustainable cities and communities is the need to
              develop an Action Plan for Standardisation.
            </p>
            <p>
              This project has developed a set of Building Blocks, linked to the
              MIMs Plus, that can be implemented within a city or community to
              enable the development of an effective data space. These are
              needed to support sharing and re-use of data between many
              different organisations within a city, and also to enable that
              data to be shared and re-used in appropriate ways between cities,
              cities and regions, and right across the EU.
            </p>
            <p>
              However, to enable those Building Blocks to play an effective role
              and to be used by the many thousands of cities and communities
              across Europe, it is vital that they are brought within formal
              standardisation processes. This will provide the Building Blocks
              with a more formal status as well as a long-term home to ensure
              ongoing maintenance and protection from being incorporated into
              any proprietary standard.
            </p>
            <p>
              Having this formal status and reliable long-term future will
              provide city service providers and communities at every level of
              scale with the confidence to implement those Building Blocks. Just
              as importantly, it will encourage solution providers to invest in
              building products and services around them and thus build a
              scalable market.
            </p>
          </div>

          <div className={Styles.part}>
            <h3>The Type of Standards needed</h3>
            <p>
              Conventional standards aim to define a detailed set of
              requirements that will be adopted by all members of an ecosystem
              in their entirety and will enable as close as possible to
              plug-and-play interoperability.
            </p>
            <p>
              The challenge with data spaces in general and particularly data
              spaces for smart and sustainable cities and communities is that
              the aim is to support data sharing between many different types of
              organisations with different requirements for the way that they
              handle data, different legacy approaches and who may be following
              different families of standards or even proprietary approaches
              used by an integrator with whom they may be in a long-term
              contract. The standards and technical solutions each of them uses
              may work perfectly well for their own organisational purposes,
              indeed they may even be required for some aspects of what that
              organisation needs to deliver. It is therefore impossible to
              expect all of those organisations to change their approach to data
              sharing completely and all adopt the same detailed set of
              standards.
            </p>
            <p>
              The aim of a data space is not to enable all organisations within
              the ecosystems to share all the data they are collecting with all
              the other organisations within that ecosystem, but rather to
              enable the discovery and appropriate sharing and reuse of those
              data sets that are useful to one or more other agencies. This
              enables a pragmatic approach, where only those data sets that need
              to be shared need to be transformed to allow them to be linked to,
              and add further insight to, data held by other agencies. The task
              is therefore to put in place a minimal but sufficient set of
              requirements that will facilitate data integration within a data
              space, as and when needed.
            </p>
            <p>
              This is the role of Minimal Interoperability Mechanisms as an
              intermediate form of standard that is now taking its place within
              the formal standardisation world through the development of the
              Y.MIM standard being developed by ITU Study Group 20. Y.MIM
              describes a methodology to identify a minimal but sufficient set
              of requirements about different aspects of data sharing that will
              support as easy as possible integration between data sets that
              need to be shared within a data space.
            </p>
          </div>

          <div className={Styles.part}>
            <h3>Minimal Interoperability</h3>
            <p>
              A MIM specifies a set of requirements that will provide a minimal
              but sufficient set of capabilities needed to achieve a certain
              city or community objective. The MIM documentation describes
              technical solutions that address those requirements that are
              already commonly used in cities and communities. It also provides
              guidance on methods to achieve the interoperability needed between
              those different technical solutions and on conformance and
              compliance testing. It may also provide informative content as to
              procurement and other relevant issues.
            </p>
            <p>
              There are a number of MIMs under development that each address
              different aspects of data sharing, such as data models, context
              information management and security. It is likely that more will
              be identified in the future as data spaces grow in use and
              maturity. The MIMs are brought together within Living-in.EU as a
              growing set of tools - MIMs Plus - that support the development of
              Interoperable Europe.
            </p>
            <p>
              The value of a MIM is that it enables the different ways of
              handling data used by different organisations to be broken down
              into their essential components so that commonalities can be
              identified and integration facilitated. The different MIMs also
              lay down minimal requirements for the different aspects of data
              sharing. Ensuring that all participants in a data space implement
              the MIMs therefore ensures that there is a fully rounded and
              effective data sharing environment.
            </p>
            <p>
              Achieving minimal interoperability between technical solutions to
              different aspects of data sharing is important because the
              achievement of complete interoperability is often complicated and
              difficult and may require a high level of expertise and time to
              implement. The development of methods to enable an intermediate
              level of interoperability between different technical solutions
              will make it easier for organisations to become part of the data
              sharing ecosystem.
            </p>
            <p>
              Below figure depicts 4 different levels of interoperability
              between two systems, ranging from having no standards and thus
              requiring completely customised integration to achieve
              interoperability, to “plug and play” interoperability, where
              integration between those systems becomes simple and automatic.
              The challenge with “plug and play” standards is that developing
              them may take a significant amount of time and resources and may
              require modifications to the two different systems. MIMs focus on
              levels of interoperability between these two extremes and two
              examples are given of how minimal but useful levels of
              interoperability can be achieved – the identification of Pivotal
              Points of Interoperability (PPIs) and the development of common
              connectors. Both can significantly simplify the task of
              integration between the two systems.
            </p>
            <a
              href={APP_IMAGES_ASSETS.image.schemaRecommandedAction}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={APP_IMAGES_ASSETS.image.schemaRecommandedAction}
                alt="Schema"
              />
            </a>
          </div>

          <div className={Styles.part}>
            <h3>Standardising the MIMs</h3>
            <p>
              There are ten MIMs at various stages of development, with all of
              them relevant to data spaces for cities and communities. During
              the deployment phase, many of them will be further enhanced
              through the experience of implementation in various local data
              spaces. The development phase may even result in the
              identification of the need for further MIMs.
            </p>
            <p>
              The deployment phase would include ensuring that the MIMs are
              applicable right across all European Member States, effectively
              making them European Standards. The three recognised European
              Standards Bodies are CEN, CENELEC, and ETSI and it might be
              thought best for the developing MIMs to be brought into the work
              of one or other of these organisations.
            </p>
            <p>
              However, it is not enough just to have European Standards. As a
              key part of the global economy and to enable Europe to benefit
              from good practice from across the world, it is vital that the
              standards used in Europe also reflect International Standards. It
              is therefore important that the MIMs are taken within
              International Standardisation.
            </p>
            <p>
              The World Trade Organisation recognises three main international
              standards organisations; ISO, IEC, and ITU. The value of these
              three bodies is that they do not simply bring the best industry
              expertise to develop the most appropriate technical solutions, but
              they also have the role of ensuring that these meet the needs of
              society as well. This means that issues such as ethics, safety,
              ease of management, and the role of those standards in supporting
              trade are taken into account in the standardisation process.
            </p>
            <p>
              In identifying these three International Standards development
              organisations, it is also important to take into account ISO/IEC
              JTC1 - the Joint Technical Committee between ISO and IEC that
              deals with Information Technology related standards.
            </p>
            <p>
              ISO, IEC, and JTC1 are all based on National Standards Development
              Organisations and are a way to enable these to collaborate to
              develop global standards that also meet the needs of the
              individual nations represented. ITU membership is based on
              national governments, along with representation from industry and
              research.
            </p>
            <p>
              ITU focuses on the development of technical standards relating in
              some way or other to communications technologies. Specifically,
              Study Group 20 is active in developing standards related to IoT
              and smart and sustainable communities.
            </p>
            <p>
              For standardising the MIMs that are relevant to data spaces,
              clearly the most relevant international organisations are JTC1 and
              ITU.
            </p>
          </div>

          <div className={Styles.part}>
            <h3>Developing a Standardisation Action Plan</h3>
            <p>
              The first step is already well underway with the work being done
              within ITU Study Group 20 to standardise the MIM format and
              methodology through Y.MIM. The next stage will be to bring each
              individual MIM within European and International Standardisation.
            </p>
            <p>
              The challenge is that the main International Standards Development
              Organisations are all based either on national governments or on
              national standards bodies. This means that the European voice is
              fragmented. There is also a resourcing issue in that individual
              European member states find it difficult to resource sending
              experts to many individual international standards development
              committees and this has resulted in poor or no participation of
              European Experts in the development of many key international
              standards.
            </p>
            <p>
              Clearly an action plan will be needed to enable each MIM to become
              a formal standard. This obviously needs to be taken within the
              developing wider standardisation strategy that is being put
              together by the Commission, and, in particular, for standardising
              tools related to Local Digital Twins and the CitiVerse.
            </p>
            <p>
              The first question is whether to start by standardising each MIM
              at a European level and then taking this to the International
              Standardisation bodies. The value of this is that it would enable
              the development of a standard that is tailored to the European
              requirements and provide a mature text to be taken to
              International standardisation, supported by strong consensus of
              European Member States.
            </p>
            <p>
              However, there are some problems with this. First of all, it would
              be strange to first develop a standard on a European level if the
              intention from the beginning would be to make it an International
              one. This would result in a significantly longer process and may
              also make it more difficult to achieve international consensus if
              the text is seen as too European centred.
            </p>
            <p>
              The other issue is that at an international level the MIMs in
              general would most appropriately be standardised by either JTC1 or
              ITU. The challenge is that while CEN and CENELEC have clear
              processes in place to take European Standards to ISO and IEC,
              there is no clear link with JTC1, even though it is a Joint
              Committee between ISO and IEC. One reason for this is that the
              European Standards Body that covers the same area as JTC1 is ETSI,
              and that has no formal relationship with CEN or CENELEC. ETSI also
              has only weak links with ITU and there is no strong history of
              ETSI taking its standards into ITU.
            </p>
            <p>
              (It must be noted that it is possible that some MIMs might
              appropriately be standardised via ISO - specifically MIM7 on
              geospatial data handling, as ISO has a specialist committee - TC
              211 on Geographic Information/Geomatics.)
            </p>
            <p>
              Should the decision be made to take the MIMs straight to
              international standardisation, then the decision would need to be
              made as to whether this should be via ITU or JTC1. ITU is already
              standardising the Y.MIM and there is a developing link between ITU
              and DG CNECT. On the other hand, JTC1 has a strong record of
              delivering standards on some areas of Information Technology that
              are outside the core expertise of ITU and some of these may be
              relevant to some of the MIMs.
            </p>
            <p>
              The decision will be easier in that ITU and JTC1 have a strong
              working relationship and have, for example, developed many joint
              standards. It therefore might be feasible to work with both to
              standardise different MIMs. Given that it is also possible that
              ISO might have a role, it might also be worth investigating the
              potential for a Joint Working Group between ITU, JTC1 and ISO to
              cover the standards needed for data spaces.
            </p>
            <p>
              The recommendation is that discussions are held with DG CNECT at
              an early stage in the DS4SSCC deployment phase as to how best to
              set up a Standardisation Action plan for standards related to data
              spaces so that work on developing the most appropriate channels
              can start as soon as possible.
            </p>
          </div>
        </section>
      </main>
    );
  };
