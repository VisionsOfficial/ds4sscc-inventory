export interface IBuildingBlock {
  _id: string;
  id?: string;
  name: string;
  description: string;
  related_standards: IStandardSpecification[];
  related_specifications: IStandardSpecification[];
  reference_implementations: IImplementation[];
  recommended_by_dssc: boolean;
  implemented_mims: string[];
  scope: string;
  maturity: string;
  schema_version: string;
}

export interface IStandardSpecification {
  _id: string;
  name: string;
  relevance: string;
  publisher: string[];
  link?: string;
}

export interface IImplementation {
  _id: string;
  brand_name: string;
  provider: string;
  link_reference_page?: string;
  link_repository?: string;
}

export type Suggestion<T> = T & {
  /**
   * Only on IStandardSpecification
   */
  type?: "standard" | "specification";
  contact: {
    name: string;
    organization: string;
    email: string;
  };
  buildingBlock: string;
};

export type SuggestionAPIResponse = {
  standards: (Suggestion<IStandardSpecification> & { type: "standard" })[];
  specifications: (Suggestion<IStandardSpecification> & {
    type: "specification";
  })[];
  implementations: Suggestion<IImplementation>[];
};

export type DiscoverCategory =
  | "multiStakeholderGovernanceScheme"
  | "catalogueOfSpecifications"
  | "referenceArchitecture"
  | "priorityDatasets"
  | "collectedUseCases"
  | "actionPlan"
  | "codeOfConducts"
  | "DevelopingMultiStakeholder"
  | "governanceRules"
  | "roles"
  | "responsibilities"
  | "GAIA-X"
  | "iShare"
  | "roadmapForImplementing"
  | "capacityBuilding"
  | "recommendedAction"
  | "visionsFederation"
  | "actionPlanCheatsheet";

export type UseCaseCollaborator = {
  location: string;
  flag: "be" | "es" | "fi" | "fr" | "it" | "nl" | "pt" | "si" | "se";
};

export type UseCase = {
  name: string;
  collaborators: UseCaseCollaborator[];
  description: string;
  standards?: string[];
  mims?: string[];
  scope?: string;
  datasets?: string[];
  specs?: string[];
  referenceImplementations?: [
    {
      name: string;
      url: string;
    }
  ];
  maturity?: string[];
  links?: string[];
};

export type CategoryTableInCard =
  | "Monetary/Market-driven"
  | "Organisational"
  | "Societal";

export type CooperationModelsTypes =
  | "Commercial data"
  | "Data Marketplace"
  | "As-A-Service model"
  | "Open Data / Data Donation"
  | "Pragmatic / Ad-hoc data sharing"
  | "Trusted Third Party Intermediary"
  | "Personal Data Intermediary"
  | "Data Common / Cooperative";
