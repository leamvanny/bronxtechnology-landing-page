import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTE_PATH } from "./routePath";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import ContactUsPage from "../pages/ContactUsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTE_PATH.HOME} element={<HomePage />} />
          <Route path={ROUTE_PATH.ABOUT} element={<AboutPage />} />
          <Route path={ROUTE_PATH.CONTACT} element={<ContactUsPage />} />
          <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
