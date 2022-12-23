import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import {
    Route,
} from "react-router-dom";
import { Routes } from "react-router-dom";
import Topbar from "../pages/global/Topbar";
import Sidebar from "../pages/global/Sidebar";
import Team from "../pages/team";
import Invoices from "../pages/invoices";
import Contacts from "../pages/contacts";
import Form from "../pages/form";

import Dashboard from "../pages/dashboard";
import FAQ from "../pages/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Calendar from "../pages/calendar/calendar";

export const ProtectedLayout = () => {
    const { user } = useAuth();
    // const outlet = useOutlet();
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <Sidebar isSidebar={isSidebar} />
                        <main className="content">
                            <Topbar setIsSidebar={setIsSidebar} />
                            <Routes>

                                <Route exact path="/home" element={<Dashboard />} />
                                <Route exact path="dashboard/team" element={<Team />} />
                                <Route exact path="dashboard/contacts" element={<Contacts />} />
                                <Route exact path="dashboard/invoices" element={<Invoices />} />
                                <Route exact path="dashboard/form" element={<Form />} />

                                <Route exact path="dashboard/calendar" element={<Calendar />} />
                                <Route path="*" element={<FAQ />} />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>

            {/* {outlet} */}
        </>
    );
};


