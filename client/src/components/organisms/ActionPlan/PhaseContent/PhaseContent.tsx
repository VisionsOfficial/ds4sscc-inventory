import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./PhaseContent.module.scss";
import { Card } from "../../../atoms/Card/Card";
import {
  MainReferenceNav,
  SubReferenceNav,
} from "../../../../pages/ActionPlanPage/ActionPlanPage";

type PhaseContentProps = {
  phase: MainReferenceNav;
  category: SubReferenceNav;
};

type ContentPhase = {
  goal: JSX.Element | null;
  process: JSX.Element | null;
  suggestedAction: JSX.Element | null;
  KPIs: JSX.Element | null;
};

export const PhaseContent = ({
  phase,
  category,
}: PropsWithChildren<PhaseContentProps>) => {
  const [content, setContent] = useState<ContentPhase>({
    goal: null,
    process: null,
    suggestedAction: null,
    KPIs: null,
  });

  useEffect(() => {
    if (!phase) return;
    if (!category) return;

    switch (phase) {
      case "Phase 1: Preliminary phase":
        switch (category) {
          case "Governance":
            setContent({
              goal: (
                <div>
                  <p>
                    The goal of this phase is to identify specific data needs
                    related to a challenge for a pilot upon which the
                    collaboration can be built and to define clearly its scope .
                  </p>
                  <p>
                    Furthermore a data sharing model will be defined, allowing
                    the scaling of the pilot throughout future stages. Also a
                    preliminary design of the business model, identifying the
                    concrete added value for each initial partner and for future
                    participants will be developed and the budget for each phase
                    of the cooperation outlined.
                  </p>
                </div>
              ),
              process: (
                <p>
                  A series of meetings and workshops is needed with partners to
                  define these goals in the preliminary stage. Identifying the
                  exact categories of data that are required to address the
                  challenge and apply the principle of data minimisation (rather
                  than trying to get as much data as possible) can lead to
                  lengthy and unnecessary discussions with data owners and thus
                  delays in accessing the relevant data. Once the data needs
                  have been identified, relevant partners who will bring
                  specific resources (e.g. datasets, skills, management, legal
                  support, etc) need to be contacted according to the needs of
                  the pilot.The definition of the budget needed for each phase
                  of the cooperation and anticipation of financing resources and
                  revenue streams (in the later phases) is also part of this
                  preliminary stage (see Fig. 5). Starting a data cooperation is
                  cost intensive (legal, operational, infrastructure costs,
                  etc), time and resource consuming, and also high risk. Initial
                  budget should be kept minimal to the viability of the proof of
                  concept (i.e. initial pilot) before significant investment in
                  technology, infrastructure and coordination of partners (e.g.
                  network) from phase 3. Once operational, the revenue streams
                  can be diversified (see D2.2. Sustaining the cooperation over
                  time <span style={{ color: "red" }}>ADD LINK</span>).
                </p>
              ),
              suggestedAction: (
                <p>
                  It is recommended to work on the ‘Why’{" "}
                  <span style={{ color: "red" }}>ADD LINK</span> and
                  ‘Organisational’ frames of the Data Cooperation Canvas
                  provided by the DS4SSCC. This step requires a tight work with
                  all the teams involved in the data space creation, as all the
                  dimensions need to be synchronised and unified in a common
                  canvas: data, technical architecture, motivation, business
                  case and technical matters. A further step that can be
                  executed in parallel would be the analysis of the current
                  governance situation at the city or community. Depending on
                  the type of scenario existing in the city different evolution
                  steps and implementation rules will be required.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Scope and purpose of data sharing defined</li>
                  <li>Data sharing model defined</li>
                  <li>
                    Preliminary business model defined including added value
                    proposition for each partner and scaling up model{" "}
                  </li>
                  <li>
                    Identification initial partners and broader stakeholders
                  </li>
                  <li>Initial budget agreed</li>
                  <li>
                    Initial resources required identified and allocated to
                    partners
                  </li>
                </ul>
              ),
            });
            break;
          case "Datasets":
            setContent({
              goal: (
                <p>
                  In this stage a data plan will be defined to scope out what
                  data is needed to reach the goals of the project and how it
                  will be exchanged among stakeholders. The development of the
                  data plan follows a principle of data minimisation to avoid
                  unnecessary complications. These considerations still happen
                  on a rather high level but are necessary groundwork for a
                  smooth introduction of next phases.
                </p>
              ),
              process: (
                <div>
                  <p>
                    A series of meetings, workshops and coordination calls is
                    needed, including especially stakeholders from dataset
                    owners, providers and technological partners to define a
                    data plan that covers as much relevant information and
                    details as needed. Such meetings and workshops will support
                    the formation of an initial informal group of partner
                    organisations that will lead dataset related topics of the
                    project in further phases to come.
                  </p>
                  <p>
                    Different data scientific approaches to reach defined goals
                    are discussed, including an in-depth discussion about
                    necessary datasets for each of them. Each dataset will be
                    initially reviewed towards its availability, accessibility,
                    data privacy, security and interchangeability, leading to an
                    agreement of a final dataset that will be used for the
                    project in the next phases. Along this process data
                    minimisation is key to streamline the process: the less data
                    is involved in the project, the less complicated and
                    smoother its implementation will take place (Minimal
                    Required Data Points). Datasets in use should meet
                    principles of findability, accessibility, interoperability,
                    and reusability (refer to the FAIR document for more
                    information).
                  </p>
                </div>
              ),
              suggestedAction: (
                <div>
                  <p>
                    It is recommended to refine the data-related part of the
                    Data Cooperation Canvas provided by the DS4SSCC along with
                    data plan development. This step requires a tight work with
                    all the partners involved in the data space creation, as all
                    the dimensions need to be synchronised and unified in a
                    common canvas: data, governance, motivation, business case
                    and technical matters.
                  </p>
                  <p>
                    Furthermore the data plan should be refined towards the
                    demonstration of data exchange and interoperability for
                    Proof of Concept (PoC) in the next stage. Focus should lie
                    on the FAIR principles of the dataset towards findability,
                    accessibility, interoperability, and reusability.
                  </p>
                </div>
              ),
              KPIs: (
                <ul>
                  <li>Data Plan established</li>
                </ul>
              ),
            });
            break;
          case "Architecture":
            setContent({
              goal: (
                <p>
                  The goal of this phase in regards to the architectural
                  dimension is to establish the framework and requirements under
                  which the architecture has to be defined for further phases.
                </p>
              ),
              process: (
                <p>
                  A series of interviews and meetings with the data space
                  stakeholders, including the use case city/community and the
                  ecosystem around, have to be planned in order to gather the
                  ambition, the context and the specific requirements to be
                  considered in the architecture.
                </p>
              ),
              suggestedAction: (
                <div>
                  <p>
                    It is recommended to work on the technical dimension of the
                    DS4SSCC Data Cooperation Canvas. This step requires close
                    work with all the stakeholders involved, as all the
                    dimensions need to be synchronised and unified in a common
                    canvas: data, governance, motivation, business case and
                    technical matters.
                  </p>
                  <p>
                    A second step that can be executed in parallel would be the
                    analysis of the current technical infrastructure at the city
                    or community. Depending on the type of scenario existing in
                    the city (such as, smart city platform, some digitised
                    vertical services, digital twin of the city, etc.) different
                    evolution steps and implementation rules will be required.
                  </p>
                  <p>
                    Additionally, this preliminary phase is ideal to set up the
                    technical deployment plan according to the data space scope
                    defined in the canvas and the current technical
                    infrastructure analysis conducted. The established technical
                    deployment plan allows for a smooth step-by-step
                    implementation in each of upcoming phases, avoiding
                    unnecessary complications along the line.
                  </p>
                </div>
              ),
              KPIs: (
                <ul>
                  <li>Framework defined</li>
                  <li>Requirements defined</li>
                </ul>
              ),
            });
            break;
          default:
            break;
        }
        break;
      case "Phase 2: Development phase":
        switch (category) {
          case "Governance":
            setContent({
              goal: (
                <p>
                  The goal of this phase is to set up a minimum sized network of
                  committed partners on a limited number of pilots to prove the
                  concept of the data collaboration and to set up legal
                  agreements between them, specifically for data sharing
                  purposes within the project.
                </p>
              ),
              process: (
                <div>
                  <p>
                    This phase includes the activation of networks to identify
                    interested parties that will result in a final selection of
                    a core team including all relevant roles and expertise
                    (governance, technical, datasets). Partners will set up the
                    legal framework, agreements are signed as contracts and are
                    legally binding, defining a solid legal base for next steps.
                    Legal appointments are in place and the budget for this
                    stage marginally extends the budget of phase 1.
                  </p>
                  <p>
                    Sites of use case deployment are investigated by the city or
                    community against suitability towards MVP (minimal viable
                    product) testing purposes. The data cooperation is used for
                    selecting functional sharing and governance models for the
                    data exchange by applying the Data Cooperation Canvas. The
                    strategic position and organisational set up for the non
                    profit organisation that is managing the data cooperation /
                    exchange is determined. All details of the cooperation
                    inform further technological development of the use case.
                  </p>
                </div>
              ),
              suggestedAction: (
                <p>
                  The city or community should find a simple but representative
                  use case and testbed with high impact to validate the
                  architecture and carry out a first MVP implementation.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Minimum pilot network defined</li>
                  <li>Legal agreements arranged</li>
                </ul>
              ),
            });
            break;
          case "Datasets":
            setContent({
              goal: (
                <p>
                  In this stage a final key dataset for Proof of Concept (PoC)
                  has been defined and the demonstration of data exchange and
                  interoperability of the PoC for one selected use case takes
                  place.
                </p>
              ),
              process: (
                <div>
                  <p>
                    Based on the data plan and initial dataset related progress
                    from the previous preliminary stage, meetings and workshops
                    will allow the identification of a final key dataset for
                    PoC, as minor corrections might take place along the PoC
                    development.
                  </p>
                  <p>
                    Ownership of the dataset will be defined among stakeholders
                    and access will be provided to partners via metered
                    application programming interfaces (APIs). This involves as
                    well the initiation of legal clearances (such as NDAs) among
                    partners and stakeholders.
                  </p>
                  <p>
                    This stage also ensures the execution of CRUD for further
                    development on datasets and their storage. CRUD is the
                    acronym for CREATE, READ, UPDATE and DELETE. These terms
                    describe the four essential operations that are inherent to
                    relational databases and the applications used to manage
                    them, which include Oracle Database, Microsoft SQL Server,
                    MySQL, and others.
                  </p>
                  <p>
                    Finally, this stage includes the active attracting of
                    companies for potential partnerships in further steps in the
                    project by activating networks of partners.
                  </p>
                </div>
              ),
              suggestedAction: (
                <p>
                  It is recommended that the technical and data part of the Data
                  Cooperation Canvas be reviewed and updated. Furthermore, the
                  exchange between partners and cities or communities in the
                  next phases should be prepared.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>
                    Number of data points exchanged as a percentage of goal
                  </li>
                  <li>All (city) partners are able to access the data</li>
                </ul>
              ),
            });
            break;
          case "Architecture":
            setContent({
              goal: (
                <p>
                  At this phase the architectural goal should be to depict the
                  architecture for a MVP describing the details of the
                  technological layer of the data space and how it would work.
                </p>
              ),
              process: (
                <p>
                  More detailed technical working sessions are required to
                  inspect and expand the current architecture and to define the
                  MVP. A core technical team needs to be set up to work in the
                  architecture and MVP implementation.
                </p>
              ),
              suggestedAction: (
                <div>
                  <p>
                    The architecture team of the data space holder (this can be
                    the city itself or the technical providers nominated by the
                    city) should work in the evolved architecture following the
                    guidelines and recipes provided by the DS4SSCC Deliverable
                    ‘Architecture Model’ (
                    <span style={{ color: "red" }}>ADD LINK</span>)
                  </p>
                  <p>
                    The MVP implementation may require the connection to the
                    Universal Trust Data Registry through the Authorization
                    Policies Store and the development or configuration of the
                    Data Space Connector components (see D3.2 for more details (
                    <span style={{ color: "red" }}>ADD LINK</span>)). It can
                    also require the upgrade of some of the existing components
                    of the city’s technological framework in the current
                    architecture. For this implementation, choices about
                    standards and technologies need to be made.
                  </p>
                </div>
              ),
              KPIs: (
                <ul>
                  <li>MVP architecture depicted</li>
                </ul>
              ),
            });
            break;
          default:
            break;
        }
        break;
      case "Phase 3: Providing Concept":
        switch (category) {
          case "Governance":
            setContent({
              goal: (
                <p>
                  In this phase, the concept developed in prior phases will be
                  turned into action. All technical and data related components
                  necessary for the pilot are initially in place and working.
                  Possible necessary minor adjustments are implemented by all
                  partners.
                </p>
              ),
              process: (
                <p>
                  Regular work meetings between partners are set up ensuring a
                  steady progress on the pilots development, including the
                  establishment of monitoring and evaluation mechanisms. All
                  components of the data exchange, such as governance,
                  technology and standards are applied by all partners. Every
                  pilot and support partner is actively participating in their
                  role in this stage and first exchange of data takes place.
                  Minor adjustments are undertaken by relevant partners and
                  implemented by all partners.
                </p>
              ),
              suggestedAction: (
                <p>
                  It is recommended to activate partners’ networks and various
                  public relation channels to add new members to the team. To
                  further extend specifically towards business partners, the
                  data cooperation canvas and defined standards should be first
                  reviewed and updated towards a larger partner management.
                  Standards and principles for onboarding will be defined, such
                  as products, pricing, or procedures.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Necessary components are working</li>
                  <li>Possible adjustments are fully implemented</li>
                </ul>
              ),
            });
            break;
          case "Datasets":
            setContent({
              goal: (
                <p>
                  In this stage data exchange for defined use cases or domains
                  between different cities and different private party prosumers
                  will be enabled.
                </p>
              ),
              process: (
                <div>
                  <p>
                    Data owners provide in this stage metadata and detailed
                    information about the data quality attributes and
                    service-level agreement (SLA) levels which will be provided,
                    document the access type (APIs) and contact details. This
                    involves the review of provided information and the
                    discussion and negotiation with partners until common
                    agreement is found.
                  </p>
                  <p>
                    In terms of interoperability the semantic state of the art
                    (as for instance, LOV, Smart Data Models, etc.) is being
                    analysed and assessed if the semantics of the data are
                    correctly understood and agreed on by all involved parties.
                    The most common ontologies for the data domain are being
                    applied (links to other relevant ontologies should be
                    established and provided) and assessed if provided data
                    models and ontologies are able to sufficiently be mapped to
                    the (internal) target system. Furthermore, partners need to
                    decide on an applicable or feasible level of verbosity or
                    granularity. Wherever necessary, required MIM2 PPI’s
                    (Pivotal Points of Interoperability, for instance, GeoJSON)
                    should be identified as well as interoperability mechanisms
                    (such as wrappers, mappers, convertors).
                  </p>
                </div>
              ),
              suggestedAction: (
                <p>
                  It is recommended in this phase, to review developed data
                  exchange properties and its capabilities towards a fully
                  functional data infrastructure. This action allows the
                  onboarding of new unknown parties for the next step.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Data exchange is up and running for defined use case</li>
                </ul>
              ),
            });
            break;
          case "Architecture":
            setContent({
              goal: (
                <p>
                  In this phase, the developed MVP from the previous phase needs
                  to be validated in the selected use case as well as, a
                  decision about the engagement of the data space is taken.
                </p>
              ),
              process: (
                <p>
                  Based on the assessment, the city or community may decide to
                  go ahead with setting up or engaging to the data space, or
                  carrying out further development and adjustments before moving
                  to the deployment phase. Both the technical and managerial
                  teams at the city need to be involved in this process.
                </p>
              ),
              suggestedAction: (
                <div>
                  <p>
                    The deployment and configuration of the MVP to the selected
                    use case requirements are needed. It includes the injection
                    of related datasets, the configuration of required APIs, the
                    creation of the access credentials and registration in the
                    Universal Trust Data Registry. Once all necessary components
                    are deployed and configured, the use case is tested by the
                    technicians and initial users (depending on the testing
                    procedure in the city or community) during a certain period
                    of time for establishment purposes.
                  </p>
                  <p>
                    The gathered results from the validation will be used in the
                    following phase to refine and expand the MVP towards the
                    real deployment. During the validation, some of the choices
                    made in regards to standards and technologies may change as
                    a consequence of the validation assessment.
                  </p>
                </div>
              ),
              KPIs: (
                <ul>
                  <li>MVP architecture depicted</li>
                </ul>
              ),
            });
            break;
          default:
            break;
        }
        break;
      case "Phase 4: Organising Playing Field":
        switch (category) {
          case "Governance":
            setContent({
              goal: (
                <p>
                  This phase focuses on the transition from MVP to a fully
                  operational data exchange and the pilot’s scale up in terms of
                  team members and businesses.
                </p>
              ),
              process: (
                <div>
                  <p>
                    The pilot partners, and additional partners define
                    onboarding standards. After a positive review of relevant
                    businesses they are invited to the network (in case of great
                    quantities of applications the onboarding procedures should
                    be self-servicing).
                  </p>
                  <p>
                    Whether the onboarding process should be free-of-charge or
                    not, highly depends on the success of data cooperation (as
                    for instance, if businesses are willing to pay for the
                    service) and the cost-effectiveness of the onboarding
                    process.
                  </p>
                  <p>
                    While the concept has been validated in phase 3, this stage
                    opens up investment opportunities from third parties,
                    especially for technology organisations, such as private
                    companies.
                  </p>
                </div>
              ),
              suggestedAction: (
                <p>
                  While the cooperation will take a legal step towards a
                  professional organisation, such as a nonprofit, legal and
                  formal preparations should be initialised. Furthermore, as in
                  the next phase further use cases will be added to the data
                  cooperation, networks should be activated and interested
                  stakeholders contacted. The Data Cooperation Canvas can be a
                  useful tool to help communication towards external partners.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Data cooperation canvas reviewed and updated</li>
                  <li>Onboarding standards defined</li>
                </ul>
              ),
            });
            break;
          case "Datasets":
            setContent({
              goal: (
                <p>
                  IIn this phase a technical governance structure is in place,
                  including API’s and a secured, metered, access control,
                  allowing the transition from MVP to fully operational data
                  exchange stage.
                </p>
              ),
              process: (
                <p>
                  Together with technical and governance partners of the
                  project, access control will be defined in this phase. In a
                  series of work meetings and workshops a documentation of
                  access control will be set up and defined on how it will be
                  implemented and executed. Access control should be billable,
                  the use of smart contracts can be considered.
                </p>
              ),
              suggestedAction: (
                <p>
                  It is recommended to start to develop performance measurements
                  (KPIs) that can be measured and evaluated, the focus of the
                  next phase.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Number of organisation, cities and use cases running</li>
                  <li>
                    Have a fully functional data infrastructure that is able to
                    onboard new unknown parties
                  </li>
                </ul>
              ),
            });
            break;
          case "Architecture":
            setContent({
              goal: (
                <p>
                  In this phase, the developed and tested MVP needs to be
                  extended towards the actual and full deployment of the data
                  space. All technical pieces of the architecture need to be put
                  in place in real conditions towards working with any potential
                  use case..
                </p>
              ),
              process: (
                <p>
                  This phase is essentially incremental and needs to be split in
                  smaller and evolutive phases until reaching the complete
                  deployment. It is suggested to create an agile development
                  process with periodic sprints and releases in order to afford
                  the different stages. Creating a Product Backlog with the full
                  deployment features and establishing priorities in line with
                  the city/community strategy. Assign a properly sized
                  development team to the process which may take several years.
                </p>
              ),
              suggestedAction: (
                <div>
                  <p>
                    Based on the assessment results of the MVP validation,
                    review the standards and technologies choices to make the
                    final decision.
                  </p>
                  <p>
                    Starting from the MVP, extend the functionality
                    incrementally by stages until having all the full technical
                    infrastructure for the data space in operation. In each
                    iteration, test and validate the release in an operational
                    environment before going into production.
                  </p>
                </div>
              ),
              KPIs: (
                <ul>
                  <li>MVP successfully tested for full deployment</li>
                </ul>
              ),
            });
            break;
          default:
            break;
        }
        break;
      case "Phase 5: Increasing impact & preparing implementation":
        switch (category) {
          case "Governance":
            setContent({
              goal: (
                <p>
                  In this phase the non profit organisation/consortium is
                  formalised and more use cases are being developed by the data
                  cooperation to maximise the solution’s benefits.
                </p>
              ),
              process: (
                <div>
                  <p>
                    The organisation or consortium takes a formal and legal step
                    towards a professional non profit organisation. This
                    involves a number of work meetings and workshops and close
                    cooperation between legal entities of involved partners.
                  </p>
                  <p>
                    The first phases detected and selected interested and
                    relevant potential partners with interesting use cases, and
                    now this phase adds these use cases to the data cooperation.
                  </p>
                  <p>
                    The involvement of other communities as partners is
                    important to implement solutions in other environments,
                    under different circumstances and to prove its validity
                    independently from a location, which will attract in return
                    new business partners.
                  </p>
                </div>
              ),
              suggestedAction: (
                <p>
                  As a non profit organisation, a rigid business case is
                  crucial. Most important investments should have been done, the
                  startup organisation from phase 1 and 2 should have grown in
                  professionality to mature level. To prepare towards fully and
                  complete implementation in the next step, define formal
                  products and services, their business and pricing model and
                  terms and conditions (offering). Furthermore a professional
                  service or support desk and SLA should be installed, standard
                  procedures for onboarding and leaving should be defined and
                  representation of all users in the governance of the non
                  profit should be professionalised.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Additional use cases added</li>
                  <li>
                    Decision/governance mechanisms are scaled up (e.g. user
                    representation, citizen participation)
                  </li>
                  <li>Diversity of partners (across sector and multi-level)</li>
                  <li>
                    Less data mature partners can join (e.g. smaller cities with
                    less data capabilities)
                  </li>
                  <li>
                    Connect with other data spaces / have other data spaces as
                    participants
                  </li>
                </ul>
              ),
            });
            break;
          case "Datasets":
            setContent({
              goal: (
                <p>
                  The goal of this stage is to ensure and maintain data quality
                  for the project, enabling new communities to make use of the
                  needed data.
                </p>
              ),
              process: (
                <p>
                  To ensure the data exchange’s quality and usefulness,
                  performance measurements have to be developed primarily by
                  data-related and technical partners in close collaboration
                  with partners. These measurements are the means for the
                  monitoring and evaluation throughout the following years to
                  come.
                </p>
              ),
              suggestedAction: (
                <p>
                  IIt is useful to develop a high-level planning towards the
                  fully-fledged data space to achieve complete implementation.
                  This includes specifically future dataset support and
                  maintenance (SLA details).
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Agreement on performance measures</li>
                  <li>Service-level Agreement (SLA)</li>
                </ul>
              ),
            });
            break;
          case "Architecture":
            setContent({
              goal: (
                <p>
                  In this phase the architecture will be challenged by more
                  complex and realistic use cases that will in turn also help to
                  finetune the technical infrastructure of the data space.
                </p>
              ),
              process: (
                <p>
                  In this phase the architecture will not change significantly
                  as it has been prepared and developed in the previous stage.
                  The main process will be the incorporation progressively of
                  the new use cases. Basically, a process of configuration and
                  maintenance will be indicated.
                </p>
              ),
              suggestedAction: (
                <p>
                  The number of use cases for data sharing and value creation in
                  the ecosystem should be added incrementally as well. If
                  needed, the technical solution has to be adjusted and tested
                  for each of the use cases. Some technical developments can be
                  required as a consequence of the intensive testing, correction
                  of issues or lacking functionality discovered during the
                  testing process.
                </p>
              ),
              KPIs: (
                <ul>
                  <li>Architecture successfully tested with more use cases</li>
                </ul>
              ),
            });
            break;
          default:
            break;
        }
        break;
      case "Phase 6: Complete implementation":
        switch (category) {
          case "Governance":
            setContent({
              goal: (
                <p>
                  In this phase, the organisation is completely defined as a
                  fully operational (nonprofit) organisation.
                </p>
              ),
              process: (
                <p>
                  This phase includes the further extension of the network by
                  adding new cities and communities and private companies as
                  partners. This includes public relations and networking
                  activities from relevant partners. Furthermore, legal and
                  organisational steps are taken towards a nonprofit
                  organisation and all maintenance processes are operational and
                  fully working. For further development and growth, an
                  inspiring innovation agenda for 2-4 years is available
                  including budgets.
                </p>
              ),
              suggestedAction: null,
              KPIs: (
                <ul>
                  <li>Transition to nonprofit organisation complete</li>
                </ul>
              ),
            });
            break;
          case "Datasets":
            setContent({
              goal: (
                <p>
                  This stage includes the steady maintenance of datasets in use,
                  to ensure the project’s quality at any scale.
                </p>
              ),
              process: (
                <p>
                  In this final phase, Service-level Agreement (SLA) is fully
                  functioning. Responsible partners fulfil their role ensuring
                  the data quality and availability on a large scale.
                </p>
              ),
              suggestedAction: null,
              KPIs: (
                <ul>
                  <li>Agreement on performance measures</li>
                  <li>Service-level Agreement (SLA)</li>
                </ul>
              ),
            });
            break;
          case "Architecture":
            setContent({
              goal: (
                <p>
                  The technical deployment of the data space must work as a full
                  operational system used by public administration employees,
                  citizens, city providers, policy makers, etc.
                </p>
              ),
              process: (
                <p>
                  In this stage, the governance schema of the data space, the
                  technical solution maintenance and evolution can be
                  transferred to a commercial operator supporting the community,
                  ensuring the future sustainability of the data space
                  components.
                </p>
              ),
              suggestedAction: null,
              KPIs: (
                <ul>
                  <li>Architecture successfully tested with more use cases</li>
                </ul>
              ),
            });
            break;
          default:
            break;
        }
        break;

      default:
        break;
    }
  }, [phase, category]);

  return (
    <section className={Styles.PhaseContent}>
      {content.goal && (
        <Card className={Styles.card}>
          <h3>Goal</h3>
          {content.goal}
        </Card>
      )}

      {content.process && (
        <Card className={Styles.card}>
          <h3>Process</h3>
          {content.process}
        </Card>
      )}

      {content.suggestedAction && (
        <Card className={Styles.card}>
          <h3>Suggested Action</h3>
          {content.suggestedAction}
        </Card>
      )}

      {content.KPIs && (
        <Card className={Styles.card}>
          <h3>KIPs</h3>
          {content.KPIs}
        </Card>
      )}
    </section>
  );
};
