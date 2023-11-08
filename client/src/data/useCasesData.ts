import { UseCase } from "../types";

export const USE_CASES_DATA: UseCase[] = [
  {
    name: "Intelligence Data Exchange Alliance",
    collaborators: [
      {
        location: "Amsterdam",
        flag: "nl",
      },
    ],
    description: `Road and tunnel closures due to constructions are managed and monitored by the city, enabling necessary actions to continue a traffic flow as smooth as possible. However, reality shows that collected data about planned roadworks can be very broad and not accurate (due to last minute changes and delays of construction for instance) and hence, can not be trusted by routing providers. Led by the Amsterdam City Council, IDEA (Intelligent Data Exchange Alliance) brings together public and private sector in the Netherlands (Amsterdam being one of two current use cases) aiming to provide more precise and trustworthy information for service providers (i.e. for routing application) and cities on road and tunnel closures to avoid unforeseen challenges for city traffic.
    <br />
    The platform combines floating car data (as collected by BeMobile or Waze, for instance) and official data on road construction and tunnel closures provided by the City of Amsterdam to establish a trusted environment for navigation system providers to incorporate such data in their routing systems. The trusted environment is being created by the creation of an API sending automatically a data package with the information of road closure, triggered by the action of closure of it. The information is being sent as trusted by the API to all navigation system providers (such as Google or TomTom). IDEA is based on National Data Warehouse for Traffic Information (NDW) data platform, a database of both real-time and historic traffic data in the Netherlands and uses DATEX2 standards. Developed data scientific machine learning (ML) algorithmic procedures are provided to NDW via containers and provide increasingly accurate results the more frequently a road is being used due to increased machine learning effects.
    <br />
    As a platform, IDEA is not limited to a city or a city size. Besides Amsterdam, and The Hague, the system is currently being extended to 15 other cities in the NEtherlands, which potentially can be scaled up to European level, nested within the NAPCORE (National Access Point Coordination Organisation for Europe) environment), coordinating and harmonising more than 30 mobility data platforms across Europe.
    `,
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: ["Mobility"],
    specs: [
      "NDW (National Data Warehouse for Traffic Information data platform)",
    ],
    referenceImplementations: [
      {
        name: "IDEA",
        url: "https://www.ndw.nu/onderwerpen/idea",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        url: "https://www.ndw.nu/onderwerpen/idea",
      },
    ],
  },
  {
    name: "Datalocation Lab",
    collaborators: [
      {
        location: "Barcelona",
        flag: "es",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: ["Mobility"],
    datasets: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    specs: [
      "NDW (National Data Warehouse for Traffic Information data platform)",
    ],
    referenceImplementations: [
      {
        name: "IDEA",
        url: "http://example.com",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        url: "https://www.ndw.nu/onderwerpen/idea",
      },
    ],
  },
  {
    name: "SCOREwater",
    collaborators: [
      {
        location: "Barcelona",
        flag: "es",
      },
      {
        location: "Göteberg",
        flag: "se",
      },
      {
        location: "Amersfoort",
        flag: "nl",
      },
    ],
    description: `SCOREwater focuses on enhancing the resilience of cities against climate change and urbanisation by enabling a water smart society that fulfils the Sustainable Development Goals 3, 6, 11, 12 and 13 and secures future ecosystem services.
      <br/><br/>
      SCOREwater develops and tests three large-scale demonstrations for collecting, computing and presenting various data tailored to the needs of their stakeholders. In Barcelona the project initiated a new domain “sewage sociology” mining biomarkers of community-wide lifestyle habits from sewage. In Amersfoort it developed new water monitoring techniques and data-adaptive storm water treatment and it applies to water resource protection and legal compliance for construction projects within the Göteborg-case. The project aims to enhance resilience against flooding by sensing and hydrological modelling coupled to urban water engineering. It identifies best practices for developing and using the digital services, thus addressing water stakeholders beyond the project partners. The project will also develop technologies to increase public engagement in water management. Moreover, SCOREwater will deliver an innovation ecosystem driven by the financial savings in both maintenance and operation of water systems that are offered using the SCOREwater digital services, providing new business opportunities for water and ICT SMEs.
      <br/><br/>
      The three use cases are detailed below:
      <br/><br/>
      <h3>Amersfoort: Flooding</h3>
      <br/>
      SCOREwater in Amersfoort will focus on improving the detection of flash floods while reducing environmental impacts through:
      <ul>
        <li>Prediction models and early warning systems for flash floods;</li>
        <li>decision-tool (case-based reasoning) for reducing environmental impact considering risks, economic, operational and environmental information.</li>
      </ul>
      <br/>
      <h3>Barcelona: Sewage</h3>
      <br/>
      SCOREwater in Barcelona will focus on reducing wastewater management problems with the vision of improving public health:
      <ul>
        <li>Predicting sewer clogging</li>
        <li>User behavior profiling and analysis;</li>
        <li>Correlate behavior with water quality measurements, and subsequent actions to mitigate health risks and hazardous events.</li>
      </ul>
      <br/>
      <h3>Göteborg: Industrial</h3>
      <br/>
      SCOREwater in Göteborg will focus on managing water pollution in the industrial sector by:
      <ul>
        <li>The prediction of water pollution based on the combination of meteorological data and water quality sensors;</li>
        <li>Predictive maintenance of local water treatment equipment.</li>
      </ul>
      `,
    standards: ["NGSI-LD"],
    mims: ["MIM1", "MIM2"],
    scope: ["Water management"],
    datasets: [
      "Soil Moisture Levels",
      "Water Levels",
      "Water Quality",
      "Flooding Risk Maps",
      "Data sets are collected for three different pilots, Amersfoort, Barcelona and Göteberg and may depend on the local use cases. However, all sensor data was collected with similar or the same sensor devices and are accessible through the ScoreWater platform.",
    ],
    specs: ["UWWTDxx", "WFD", "Smart Data Models"],
    referenceImplementations: [
      {
        name: "Score Water Platform",
        url: "https://scorewater.eu/download/SCOREwater_D3.4_IntegrationOfSmartWaterDataModels,SmartAlgorithmsAndDataDrivenModelsInTheSCOREwaterPlatform_v2%20(1).pdf",
      },
      {
        name: "Score Water Portal",
        url: "https://scorewater.eu/download/SCOREwater_D3.4_IntegrationOfSmartWaterDataModels,SmartAlgorithmsAndDataDrivenModelsInTheSCOREwaterPlatform_v2%20(1).pdf",
      },
    ],
    maturity: ["TRL 7"],
    links: [
      {
        name: "The ScoreWater Portal was developed by Civity and is called “DataPlatform”. This software is based on CKAN.",
        url: "https://scorewater.eu/download/SCOREwater_D3.4_IntegrationOfSmartWaterDataModels,SmartAlgorithmsAndDataDrivenModelsInTheSCOREwaterPlatform_v2%20(1).pdf",
      },
    ],
  },
  {
    name: "Smart Urban Planning",
    collaborators: [
      {
        location: "Eindhoven",
        flag: "nl",
      },
    ],
    description: `The UDI, which stands for Urban Development Initiative, is an organisation that aims to address the complex urban challenges of the 21st century. Within the unique innovation climate of Brainport Eindhoven, they collaborate to find solutions for societal challenges in areas such as health, mobility, energy, food, housing, and safety.
      <br/><br/>
      The founders of UDI include the municipalities of Eindhoven and Helmond, the Eindhoven University of Technology (TU/e), Brainport Development, and the Fraunhofer Research Institute. These entities have come together to establish UDI and foster a collaborative environment for tackling the urban challenges of the region.
      <br/><br/>
      UDI strives to develop new ideas, technologies, and approaches that can contribute to the sustainable development and improvement of cities. They achieve this through research, collaboration with various stakeholders, the implementation of innovative projects, and the promotion of entrepreneurship in urban development.
      <br/><br/>
      The city of Helmond is set to undergo a Leap of Scale and will grow towards 115,000 inhabitants by 2040, a 25% increase from its current population of roughly 90,000 inhabitants. This will require 15.000 additional houses, and 35,000 additional jobs. Such a transformation must be carefully planned and simulated, and this is why departments, the research center TNO and developers from all over the region are coming together to set out a strategy. Data is a key component of this strategy, and Helmond is setting up its Open Urban Platform to be able to exchange information from different sources to realise different objectives. Some of these are for internal analysis and decision-making, some other focus on collaboration and co-creation with citizens and businesses. The Open Urban Platform manages both public and private sector data, and aims to publish all the gathered data as open data.
      <br/><br/>
      The City of Helmond is compiling this data to:
      <ul>
        <li>Create a Decision Support Tool for Strategic City Planning</li>
        <li>Translate complex urban challenges and ambitions into planning and land use</li>
      </ul>
      <br/>
      TNO is creating an Urban Strategy which entails:
      <ul>
        <li>The creation of a predictive digital twin (for mobility and emissions)</li>
        <li>Combining various scientific models and HPC</li>
        <li>Scenario exploration</li>
      </ul>
      <br/>
      Argaleo, a provide company, provides a Digital Twin that will allow:
      <ul>
        <li>Inner City Management / Events</li>
        <li>Visitor Monitoring / Real Estate Developments</li>
      </ul>
      <br/>
      Urban Development Initiative (UDI) Eindhoven, Helmond, TU/e, Brainport Development:
      <ul>
        <li><a href="https://vimeo.com/569419517/dc562ea882" target="_blank" rel="noopener noreferrer">Digital City</a></li>
        <li>Energy Transition</li>
        <li>Futureproof Building & Housing</li>
      </ul>
      <br />
      Dutch Societal Innovation Hub (EDIH):
      <ul>
        <li>VNG, IPO + 5 Regional Ecosystems</li>
        <li>European Digital Innovation Hub Public Sector</li>
        <li>Mission drive program (twin transitions)</li>
        <li>Rethink, Reshape, Reconnect</li>
      </ul>
      `,
    standards: ["GLTF"],
    mims: ["MIM7", "MIM2"],
    scope: ["Urban Development", "Crowd Management"],
    datasets: [
      "Base Registry Addresses and Buildings",
      "Base Registry Topography",
      "Height Register",
      "Base Registry Land Use",
      "Demographics",
      "National Database Roads",
      "Demographic Database",
      "Database Spatial Planning",
      "Base Registry Hydrographic Data",
      "OpenStreetMap Roadnet",
      "Energylabels",
    ],
    specs: ["GLTF (Argaleo)"],
    referenceImplementations: [
      {
        name: "DigiTwin (Argaleo)",
        url: "https://www.argaleo.com/digitwin/",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        name: "open data portal",
        url: "https://www.rijkswaterstaat.nl/zakelijk/open-data",
      },
      {
        name: "GoeWeb portal",
        url: "https://maps.rijkswaterstaat.nl/GeoWebPortaal/",
      },
    ],
  },
  {
    name: "Smart Data Space",
    collaborators: [
      {
        location: "Flanders",
        flag: "be",
      },
    ],
    description: `The Flemish Smart Data Space project (Vlaamse Smart Data Space/VSDS) aims to realise a data space for different domains on a regional level, facilitating cities and communities to exchange data by defining standards and best practices. For now, the Flemish data space is focusing on use cases related to sensor data on mobility and water management. The VSDS’ future plans are to include crowd management (retail) and roadworks into the data space.
      <br/>  <br/>
      The Digital Agency of the Flemish region has created a technical infrastructure and a support framework which will allow data sharing between cities and communities. This infrastructure is still in its infancy, but Use Cases are already being implemented, for instance, in the city of Antwerp. In time, the ambition is to facilitate all Flemish communities, without requiring a high level of expertise within those communities, still based on the most innovative technologies currently available. The Flemish Smart Data Space is currently providing services to communities and agencies to help them publish their data in line with the framework it has set forward. Currently, they are working on two <a href="https://www.vlaanderen.be/vlaamse-smart-data-space-portaal#use-cases" target="_blank" rel="noopener noreferrer">Use Cases</a>, specifically mobility and water. On a technical level, the Flemish Data Space introduces Linked Data Event Streams <a href="https://joinup.ec.europa.eu/collection/semic-support-centre/linked-data-event-streams-ldes" target="_blank" rel="noopener noreferrer">(LDES)</a> as the core mechanism through which sensor measurements are stored and retrieved. These streams allow the retrieval of measurements in a semantic way, which allows a more fluid definition of the type of data that is recorded.
      <br />  <br />
      Flanders has adopted a set of vocabularies which have been co-created with relevant authorities to describe these semantics, the <a href="https://data.vlaanderen.be/" target="_blank" rel="noopener noreferrer">OSLO</a> vocabularies. These vocabularies are developed as an Open Standard, allowing anyone to contribute and evolve them. They find their origins in the <a href="https://ec.europa.eu/isa2/solutions/core-vocabularies_en/" target="_blank" rel="noopener noreferrer">ISA² “Core Vocabularies”</a> developed by DG DIGIT (SEMIC). Importantly, these vocabularies maximally link to existing work, and the Digital Flanders agency is taking great care to re-use prior work when defining them.
      <br/><br/>
      A similar and relevant approach is taken by the <a href="https://smartdatamodels.org/" target="_blank" rel="noopener noreferrer">Smart Data Models</a> program, which gathers semantic data models for any type of occurrence. Some Smart Data Models have been already included to map to OSLO vocabularies.
      <br/><br/>
      Any semantic ontology may be referenced to provide more information about the occurrences that make up the Linked Data Event Stream.
      `,
    standards: [
      "OSLO",
      "ISA² Core Vocabularies",
      "Smart Data Models",
      "ISO19156 (water measurement)",
    ],
    mims: ["MIM1", "MIM2"],
    scope: ["Water Management", "Mobility"],
    datasets: [
      "VMM (The Flemish Environmental Agence)",
      `<a href="https://www.vmm.be/water/kwaliteit-waterlopen/waterkwaliteitsmodellen" target="_blank" rel="noopener noreferrer">Water Quality Telraam</a> (Mobility Counting)`,
    ],
    specs: [
      "LDES",
      "SOSA",
      `<a href="https://treecg.github.io/specification" target="_blank" rel="noopener noreferrer">TREE</a> Spec`,
    ],
    referenceImplementations: [
      {
        name: "VSDS",
        url: "https://www.vlaanderen.be/vlaamse-smart-data-space-portaal#reeds-aan-de-slag-met-vsds",
      },
    ],
    maturity: ["TRL 7"],
    links: [
      {
        name: "Datavindplaats",
        url: "https://www.vlaanderen.be/datavindplaats",
      },
      {
        name: "Telraam",
        url: "https://telraam.be/en/professionals",
      },
    ],
  },
  {
    name: "Goal Green App",
    collaborators: [
      {
        location: "Florence",
        flag: "it",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: ["Mobility"],
    datasets: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    specs: [
      "NDW (National Data Warehouse for Traffic Information data platform)",
    ],
    referenceImplementations: [
      {
        name: "IDEA",
        url: "http://example.com",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        url: "https://www.ndw.nu/onderwerpen/idea",
      },
    ],
  },
  {
    name: "Energy & Climate Atlas",
    collaborators: [
      {
        location: "Helsinki",
        flag: "fi",
      },
    ],
    description: `Helsinki’s Energy and Climate Atlas’ initiation started in 2011, when other cities in Finland, such as Turku, had developed a platform to show heat loss in the city. The question evolved on what else, other than heat loss, can be evaluated and shown on a large scale and in a similar manner for the city of Helsinki, benefitting to the city’s sustainability? First actions towards the establishment of the Energy & Climate Atlas were taken in 2015 due to the course of a research project on thermal mapping of the Helsinki urban area in 2D. In a next step, the 2D map had been extended into the third dimension to make the outcome more visible, using Helsinki’s CityGML model as baseline. The model was developed following an open source approach and enriched with building registry data, including heating mode, building materials, contained square metres and number of building stories, resulting in a total of over 50.000 buildings included in the model, of which 20.000 were found not to be heated.
      <br/><br/>
      Using building registry data, among other data, led to a number of challenges to the project, based on the format of used datasets. For instance, while most datasets were available in machine-readable format (i.e. .csv, .xls or .shp files) others were available in text formats only (i.e. .pdf). The close cooperation with local universities and the involvement of students at master level, who translated such data into machine-readable formats by hand as part of their theses, allowed the inclusion of such data after a pre-processing step into the model on a quantitative level. However, this process also led to the detection of errors in the data that had to be corrected before inclusion. Other limitations resulted from partially poor data quality. Various significant variables highly interesting to stakeholders, such as the renovation history of the building for instance, did not become clear from gathered data. Furthermore, the rather coarse level of granularity for district heating led to data averaging, which might have biassed the outcome. Besides data format and quality related problems, the project faced challenges based on GDPR regulations, especially when including energy data. In these cases, data was available aggregated per building and only with owners' permits. In general, accessing energy data was difficult, even though the owner was the city-owned energy company.
      <br/><br/>
      Besides building registry and CityGML the atlas currently includes energy data (district heating, electricity, water consumption, energy efficiency level) and information about building supervision administration. With this information, the atlas aims to suggest actions to improve energy performance on building level and is being used in the currently ongoing mySmartLife Project, to model energy demand and effects of heating mode changes for greater Helsinki. Priority datasets have been identified as any dataset that helps to reach carbon neutrality targets, such as datasets containing information about the building stock (including renovation history) and energy performance (including energy consumption in kWh / building), as used in this project. Furthermore, information on investments and cost of renovations have a high priority, same as the contact details to building owners.
      `,
    standards: ["CityGML", "Virtual System"],
    mims: ["MIM2", "MIM7", "MIM8", "MIM9"],
    scope: ["Energy", "Climate"],
    datasets: [
      "3D City Model (CityGML)",
      "Building registry (heating mode, building materials, contained square metres, number of building stories)",
      "Energy data (district heating, electricity, water consumption, energy efficiency level)",
    ],
    specs: ["Open source"],
    referenceImplementations: [
      {
        name: "Helsinki Energy Atlas",
        url: "https://kartta.hel.fi/3d/atlas/#/",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        url: "https://kartta.hel.fi/3d/atlas/#/",
      },
    ],
  },
  {
    name: "LxData Lab",
    collaborators: [
      {
        location: "Lisbon",
        flag: "pt",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: ["Mobility"],
    datasets: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    specs: [
      "NDW (National Data Warehouse for Traffic Information data platform)",
    ],
    referenceImplementations: [
      {
        name: "IDEA",
        url: "http://example.com",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        url: "https://www.ndw.nu/onderwerpen/idea",
      },
    ],
  },
  {
    name: "Rennes Urban Data Interface",
    collaborators: [
      {
        location: "Rennes Metropole",
        flag: "fr",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: ["Mobility"],
    datasets: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    specs: [
      "NDW (National Data Warehouse for Traffic Information data platform)",
    ],
    referenceImplementations: [
      {
        name: "IDEA",
        url: "http://example.com",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        url: "https://www.ndw.nu/onderwerpen/idea",
      },
    ],
  },
  {
    name: "Brilla",
    collaborators: [
      {
        location: "Rubi",
        flag: "es",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: ["Mobility"],
    datasets: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    specs: [
      "NDW (National Data Warehouse for Traffic Information data platform)",
    ],
    referenceImplementations: [
      {
        name: "IDEA",
        url: "http://example.com",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        url: "https://www.ndw.nu/onderwerpen/idea",
      },
    ],
  },
  {
    name: "Fram2Fork",
    collaborators: [
      {
        location: "Slovenia",
        flag: "si",
      },
    ],
    description: `Developed within the LokalnoGOR project, Farm2Fork application initially aimed to connect the city of Kranj as partner, schools and kindergartens to farmers, which has been now extended to the retail market providing a B2B setting between producer and customers. The aim is to provide a short food supply chain that can only have one intermediary. In doing so, the project supports local self sustainability for food from early 2020 by providing a backend / DevOps / frontend solution. Farm2Fork uses TMForum API’s for communication between front- and backend based on REST. The TMForum payment API is being used, while missing prepayment, and PayPal included.
    <br/><br/>
    The application works mostly with small producers, so very little data is available or being collected. Mostly Excel sheets with price lists are provided, where farmers have direct access to, via admin module or can get support by the project team. Modules translate the format of input data (by the farmers) into the project’s own data format to be implemented in the platform. The application is built with Python and C++ scripts, uses regGIS and AWS server components for content broker and as data storage. Generated data can be exported as .csv from Wordpress. Identified priority data sets are data sets on product and process information of local products, available as open source. 
    <br/><br/>
    There is a unified taxonomy for products registry of local products project by the Chamber of Commerce and the approach is already interesting to large producers as well. However, the lack of data as well as the need for manual interventions can be challenging for future scaling.
    `,
    standards: ["regGIS", "REST"],
    mims: ["MIM3", "MIM4"],
    scope: ["Food", "Green Deal"],
    datasets: [
      "Pricelists (Excel)",
      "Product export from Wordpress (CSV)",
      "Unified Taxonomy of local products, created by the Slovenian Chamber of Commerce",
    ],
    specs: [
      "Python",
      "C++",
      "Mobile apps regnity",
      "Microservices (self dev)",
      "AWS",
      "TM Forum",
      "Excel",
    ],
    referenceImplementations: [
      {
        name: "DIH Agrifood Cooperation Platform",
        url: "https://itc-cluster.com/dih-agrifood/",
      },
    ],
    maturity: ["TRL 8"],
    links: [
      {
        url: "https://itc-cluster.com/dih-agrifood/",
      },
    ],
  },
];
