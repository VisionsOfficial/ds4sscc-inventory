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
    description: `Road and tunnel closures due to constructions are managed and
    monitored by the city, enabling necessary actions to continue a
    traffic flow as smooth as possible. However, reality shows that
    collected data about planned roadworks can be very broad and not
    accurate (due to last minute changes and delays of construction for
    instance) and hence, can not be trusted by routing providers. Led by
    the Amsterdam City Council, IDEA (Intelligent Data Exchange
    Alliance) brings together public and private sector in the
    Netherlands (Amsterdam being one of two current use cases) aiming to
    provide more precise and trustworthy information for service
    providers (i.e for routing application) and cities on road and
    tunnel closures to avoid unforeseen challenges for the city traffic.
    <br />
    The platform combines floating car data (as collected by BeMobile or
    Waze, for instance) and official data on road construction and
    tunnel closures provided by City of Amsterdam to establish a trusted
    environment for navigation system providers to incorporate such data
    in their routing systems. The trusted environment is being created
    by the creation of an API sending automatically a data package with
    the information of road closure, triggered by the action of closure
    of it. The information is being sent as trusted by the API to all
    navigation system providers (such ad Google or TomTom). IDEA is
    based on National Data Warehouse for Traffic Information (NDW) data
    platform, a database of both real-time and historic traffic data in
    the Netherlands and uses DATEX2 standards. Developed data scientific
    machine learning (ML) algorithmic procedures and provided to NDW via
    containers and provide increasingly accurate results the more
    frequently a road is being used to increased machine learning
    effects. As a platform, IDEA is not limited to a city or a city
    size. Besides Amsterdam, and the Hague, the system us currently
    being extended to 15 other cities in the Netherlands, which
    potentially can be scaled up to European level, nested within the
    NAPCORE (National Access Point Coordination Organisation for Europe)
    environment, coordinating and harmonising more than 30 mobility data
    platforms across Europe.`,
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
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
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
  },
  {
    name: "Smart Urban Planning",
    collaborators: [
      {
        location: "Eindhoven",
        flag: "nl",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
  },
  {
    name: "Smart Data Space",
    collaborators: [
      {
        location: "Flanders",
        flag: "be",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
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
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
  },
  {
    name: "Energy & Climate Atlas",
    collaborators: [
      {
        location: "Helsinki",
        flag: "fi",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
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
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
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
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
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
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
  },
  {
    name: "Fram2Fork",
    collaborators: [
      {
        location: "Slovenia",
        flag: "si",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet deserunt quis sunt? Illum, rerum quidem dicta animi delectus, veniam odit praesentium nemo inventore aliquam architecto distinctio excepturi eius. Libero!",
    standards: ["DATEX2", "NAPCORE"],
    mims: ["MIM1", "MIM2", "MIM7", "MIM8"],
    scope: "Mobility",
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
    links: ["https://www.ndw.nu/onderwerpen/idea"],
  },
];
