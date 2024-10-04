import React from "react";
import ReactDOM from "react-dom/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import ErrorPage from "./error-page";
import Layout from "./Layout";
import ServicePage from "./app/services/ServicesPage";
import AnalysisAndPlanningPage from "./app/services/BAP/BAPPage";
import WebAppDevPage from "./app/services/WAD/WADPage";
import MobileAppDevPage from "./app/services/MAD/MADPage";
import UIandUXDesignPage from "./app/services/UIandUX/UIandUXPage";
import PDMPage from "./app/services/PDM/PDMPage";
import TQAPage from "./app/services/TQA/TQAPage";
import SandEPage from "./app/services/SE/SEPage";
import ContactUsPage from "./app/contact/ContactUsPage";
import AboutUsPage from "./app/about/AboutUsPage";
import PrivacyPolicyPage from "./app/privacy-policy/PrivacyPolicyPage";
import TermsOfUsePage from "./app/terms-of-use/TermsOfUsePage";

export default function App() {
  //Using system preferences to set theme mode.
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ServicePage />} />
            <Route path="/services" element={<ServicePage />} />

            <Route
              path="/analysis-and-planning"
              element={<AnalysisAndPlanningPage />}
            />
            <Route
              path="/web-application-development"
              element={<WebAppDevPage />}
            />
            <Route
              path="/mobile-application-development"
              element={<MobileAppDevPage />}
            />
            <Route path="/ui-and-ux-design" element={<UIandUXDesignPage />} />
            <Route
              path="/project-and-delivery-management"
              element={<PDMPage />}
            />
            <Route
              path="/testing-and-quality-assurance"
              element={<TQAPage />}
            />
            <Route path="/support-and-enhancement" element={<SandEPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
