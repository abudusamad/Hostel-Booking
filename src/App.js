import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Geography from "./scenes/geography";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import LogIn from "./scenes/login/Login";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import FAQ from "./scenes/faq";
import Invoices from "./scenes/invoices";
import ComponentList from "./scenes/bar";
function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar isSidebar={isSidebar} />
					<main className="content">
						<Topbar setIsSidebar={setIsSidebar} />

						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/geography" element={<Geography />} />
							<Route path="/login" element={ <LogIn /> } />
							<Route path="/calendar" element={<Calendar/>} />
							<Route path="/faq" element={<FAQ/>} />
							<Route path="/invoices" element={<Invoices/>} />
							<Route path="/bar" element={<ComponentList/>} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
