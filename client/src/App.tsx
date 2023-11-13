import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/organisms/Footer/Footer";
import { Navbar } from "./components/organisms/Navbar/Navbar";
import { ScrollTop } from "./contexts/ScrollTop";
import { AddResourcePage } from "./pages/AddResourcePage/AddResourcePage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { AdminPortal } from "./pages/AdminPortal/AdminPortal";
import { AdminReviewPage } from "./pages/AdminReviewPage/AdminReviewPage";
import { BuildingBlockPage } from "./pages/BuildingBlockPage/BuildingBlockPage";
import { EditResourcePage } from "./pages/EditResourcePage/EditResourcePage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ResourceDescriptionPage } from "./pages/ResourceDescriptionPage/ResourceDescriptionPage";
import { SuggestionSubmitPage } from "./pages/SuggestionSubmitPage/SuggestionSubmitPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { MultiStakeholderGovernancePage } from "./pages/MultiStakeholderGovernancePage/MultiStakeholderGovernancePage";
import { CodeOfConductPage } from "./pages/CodeOfConductPage/CodeOfConductPage";
import { DevelopingMultiStakeholderPage } from "./pages/DevelopingMultiStakeholderPage/DevelopingMultiStakeholderPage";
import { CatalogueOfSpecifications } from "./pages/CatalogueOfSpecifications/CatalogueOfSpecifications";
import { PriorityDatasetsPage } from "./pages/PriorityDatasetsPage/PriorityDatasetsPage";
import { CollectedUseCasesPage } from "./pages/CollectedUseCasesPage/CollectedUseCasesPage";
import { ReferenceArchitecturePage } from "./pages/ReferenceArchitecturePage/ReferenceArchitecturePage";
import { ActionPlanPage } from "./pages/ActionPlanPage/ActionPlanPage";
import { RoadmapPage } from "./pages/RoadmapPage/RoadmapPage";
import { CapacityBuildingPage } from "./pages/CapacityBuildingPage/CapacityBuildingPage";
import { RecommendedActionStandardisationPage } from "./pages/RecommendedActionStandardisationPage/RecommendedActionStandardisationPage";
import { VisionFederationDataSpacesPage } from "./pages/VisionFederationDataSpacesPage/VisionFederationDataSpacesPage";
import { ActionPlanCheatsheetPage } from "./pages/ActionPlanCheatsheetPage/ActionPlanCheatsheetPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/multi-stakeholder-governance"
            element={<MultiStakeholderGovernancePage />}
          >
            <Route
              path="code-of-conducts"
              element={<CodeOfConductPage />}
            ></Route>
            <Route
              path="developing-multi-stakeholder"
              element={<DevelopingMultiStakeholderPage />}
            ></Route>
          </Route>
          <Route
            path="/catalogue-of-specifications"
            element={<CatalogueOfSpecifications />}
          ></Route>
          <Route
            path="/reference-architecture"
            element={<ReferenceArchitecturePage />}
          ></Route>
          <Route
            path="/priority-datasets"
            element={<PriorityDatasetsPage />}
          ></Route>
          <Route
            path="/collected-use-cases"
            element={<CollectedUseCasesPage />}
          ></Route>

          <Route path="/project/:id" element={<BuildingBlockPage />} />
          <Route path="/suggest/:id" element={<SuggestionSubmitPage />} />
          <Route
            path="/resources/:resource/:id"
            element={<ResourceDescriptionPage />}
          />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/portal" element={<AdminPortal />} />
          <Route
            path="/admin/portal/suggestion/:resource/:id"
            element={<AdminReviewPage />}
          />
          <Route path="/admin/add/:resource" element={<AddResourcePage />} />
          <Route
            path="/admin/portal/edit/:resource/:id"
            element={<EditResourcePage />}
          />

          <Route path="roadmap" element={<RoadmapPage />}>
            <Route path="action-plan" element={<ActionPlanPage />}></Route>
            <Route
              path="capacity-building"
              element={<CapacityBuildingPage />}
            ></Route>
            <Route
              path="recommended-action-for-standardisation"
              element={<RecommendedActionStandardisationPage />}
            ></Route>
            <Route
              path="vision-for-the-federation-of-sata-spaces"
              element={<VisionFederationDataSpacesPage />}
            ></Route>
          </Route>

          <Route
            path="action-plan-cheatsheet"
            element={<ActionPlanCheatsheetPage />}
          ></Route>
        </Routes>
        <Footer />
      </ScrollTop>
    </Router>
  );
}

export default App;
