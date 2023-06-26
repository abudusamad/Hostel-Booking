import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import ComponentList from "./scenes/bar";
import Calendar from "./scenes/calendar/calendar";
import Dashboard from "./scenes/dashboard";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Invoices from "./scenes/invoices";
import { ColorModeContext, useMode } from "./theme";
import MyProfile from "./pages/register/MyProfile.jsx"
import HotelInfo from "./pages/register/HotelInfo";
import Login from "./pages/register/Login";

function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	const queryClient = new QueryClient();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar isSidebar={isSidebar} />
					<main className="content">
						<Topbar setIsSidebar={setIsSidebar} />
						<QueryClientProvider client={queryClient}>
							<Routes>
								<Route path="/" element={<Login />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/geography" element={<Geography />} />
								<Route path="/calendar" element={<Calendar />} />
								<Route path="/faq" element={<FAQ />} />
								<Route path="/invoices" element={<Invoices />} />
								<Route path="/bar" element={<ComponentList />} />
								<Route path="/my-profile" element={<MyProfile />} />
								<Route path="/reserve" element={<HotelInfo />} />
							</Routes>
						</QueryClientProvider>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
