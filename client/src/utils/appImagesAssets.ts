// ICONS
// CATEGORIES
// ACTION PLAN
import actionPlan from "../assets/imgs/icons/categories/actionPlan/Action_Plan_1.svg";
//  CATALOG OF SPECIFICATIONS
import catalogOfSpecifications from "../assets/imgs/icons/categories/catalogOfSpecifications/Catalogue_of_Specifications_1.svg";
import catalogOfSpecificationsVariant from "../assets/imgs/icons/categories/catalogOfSpecifications/Catalogue_of_Specifications_2.svg";
// CODE OF CONDUCT
import codeOfConduct from "../assets/imgs/icons/categories/codeOfConduct/Code_of_Conducts_1.svg";
import codeOfConductVariant from "../assets/imgs/icons/categories/codeOfConduct/Code_of_Conduct_2.svg";
// COLLECTED USE CASES
import collectedUseCases from "../assets/imgs/icons/categories/collectedUseCases/Collected_Use_Cases_1.svg";
import collectedUseCasesVariant from "../assets/imgs/icons/categories/collectedUseCases/Collected_Use_Cases_2.svg";
// DEVELOPING MULTI-STAKEHOLDER
import developingMultiStakeholder from "../assets/imgs/icons/categories/developingMultiStakeholder/Developing_a_multi-stakeholder_data_cooperation_1.svg";
import developingMultiStakeholderVariant from "../assets/imgs/icons/categories/developingMultiStakeholder/Developing_a_multi-stakeholder_data_cooperation_2.svg";
// MULTI-STAKEHOLDER GOVERNANCE SCHEME
import multiStakeholderGovernance from "../assets/imgs/icons/categories/multiStakeHolderGovernance/Multi-stakeholder_Governance_Scheme_1.svg";
import multiStakeholderGovernanceVariant from "../assets/imgs/icons/categories/multiStakeHolderGovernance/Multi-stakeholder_Governance_Scheme_2.svg";
// PRIORITY DATASETS
import priorityDatasets from "../assets/imgs/icons/categories/priorityDatasets/Priority_Datasets_1.svg";
import priorityDatasetsVariant from "../assets/imgs/icons/categories/priorityDatasets/Priority_dataset_2.svg";
// REFERENCE ARCHITECTURE
import referenceArchitecture from "../assets/imgs/icons/categories/referenceArchitecture/Reference_Architecture_1.svg";
import referenceArchitectureVariant from "../assets/imgs/icons/categories/referenceArchitecture/Reference_Architecture_2.svg";

//BASICS
import checkCircle from "../assets/imgs/icons/basics/check-circle.svg";
import cornerUpLeft from "../assets/imgs/icons/basics/corner-up-left.svg";

//FLAGS
import belgium from "../assets/imgs/flags/belgique.svg";
import spain from "../assets/imgs/flags/espagne.svg";
import finland from "../assets/imgs/flags/finlande.svg";
import france from "../assets/imgs/flags/france.svg";
import italy from "../assets/imgs/flags/italie.svg";
import netherlands from "../assets/imgs/flags/pays_bas.svg";
import portugal from "../assets/imgs/flags/portugal.svg";
import slovenia from "../assets/imgs/flags/slovenie.svg";
import sweden from "../assets/imgs/flags/suede.svg";

// IMAGES
import dataCooperationCanvas from "../assets/imgs/data_cooperation_canvas.png";
import dataFlows from "../assets/imgs/data_flows_processes.png";
import sharedProcessesInCooperation from "../assets/imgs/shared_processes_in_cooperation.png";
import stakeholdersAssociatedRoles from "../assets/imgs/stakeholders_and_associated_roles.png";
import structureGovernance from "../assets/imgs/structure_governance_for_ds4sscc.png";
import legentStructureGovernance from "../assets/imgs/legend_structure_governance.png";

export const APP_IMAGES_ASSETS = {
  icon: {
    basic: {
      checkCircle,
      cornerUpLeft,
    },
    categories: {
      actionPlan: {
        actionPlan,
      },
      catalogOfSpecifications: {
        catalogOfSpecifications,
        catalogOfSpecificationsVariant,
      },
      codeOfConduct: {
        codeOfConduct,
        codeOfConductVariant,
      },
      collectedUseCases: {
        collectedUseCases,
        collectedUseCasesVariant,
      },
      developingMultiStakeholder: {
        developingMultiStakeholder,
        developingMultiStakeholderVariant,
      },
      multiStakeholderGovernance: {
        multiStakeholderGovernance,
        multiStakeholderGovernanceVariant,
      },
      priorityDatasets: {
        priorityDatasets,
        priorityDatasetsVariant,
      },
      referenceArchitecture: {
        referenceArchitecture,
        referenceArchitectureVariant,
      },
    },
  },
  flag: {
    belgium,
    spain,
    finland,
    france,
    italy,
    netherlands,
    portugal,
    slovenia,
    sweden,
  },
  logo: {},
  image: {
    dataCooperationCanvas,
    dataFlows,
    sharedProcessesInCooperation,
    stakeholdersAssociatedRoles,
    legentStructureGovernance,
    structureGovernance,
  },
} as const;
