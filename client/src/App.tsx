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

function App() {
	return (
		<Router>
			<Navbar />
			<ScrollTop>
				<Routes>
					<Route path="/" element={<LandingPage />} />
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
				</Routes>
				<Footer />
			</ScrollTop>
		</Router>
	);
}

export default App;
