import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.css";
import App from "./App";

import Home from "./pages/Home";
import Essentials from "./pages/Essentials";
import ComponentsAndJsx from "./pages/Essentials/lessons/ComponentsAndJsx";
import PropsAndTypes from "./pages/Essentials/lessons/PropsAndTypes";
import ConditionalRendering from "./pages/Essentials/lessons/ConditionalRendering";
import ListsAndKeys from "./pages/Essentials/lessons/ListsAndKeys";
import Hooks from "./pages/Hooks";
import UseState from "./pages/Hooks/lessons/UseState";
import UseEffect from "./pages/Hooks/lessons/UseEffect";
import UseRef from "./pages/Hooks/lessons/UseRef";
import CustomHooks from "./pages/Hooks/lessons/CustomHooks";
import RouterLayout from "./pages/Router";
import DeclarativeRouting from "./pages/Router/lessons/DeclarativeRouting";
import NestedRoutes from "./pages/Router/lessons/NestedRoutes";
import NavigationAndLinks from "./pages/Router/lessons/NavigationAndLinks";
import RouteParams from "./pages/Router/lessons/RouteParams";
import UserDetail from "./pages/Router/lessons/RouteParams/UserDetail";
import Forms from "./pages/Forms";
import ControlledInputs from "./pages/Forms/lessons/ControlledInputs";
import MultiFieldForms from "./pages/Forms/lessons/MultiFieldForms";
import FormValidation from "./pages/Forms/lessons/FormValidation";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Home />} />

                    <Route path="essentials" element={<Essentials />}>
                        <Route index element={<Navigate to="components-jsx" replace />} />
                        <Route path="components-jsx" element={<ComponentsAndJsx />} />
                        <Route path="props-types" element={<PropsAndTypes />} />
                        <Route path="conditional-rendering" element={<ConditionalRendering />} />
                        <Route path="lists-keys" element={<ListsAndKeys />} />
                    </Route>

                    <Route path="hooks" element={<Hooks />}>
                        <Route index element={<Navigate to="use-state" replace />} />
                        <Route path="use-state" element={<UseState />} />
                        <Route path="use-effect" element={<UseEffect />} />
                        <Route path="use-ref" element={<UseRef />} />
                        <Route path="custom-hooks" element={<CustomHooks />} />
                    </Route>

                    <Route path="router" element={<RouterLayout />}>
                        <Route index element={<Navigate to="declarative-routing" replace />} />
                        <Route path="declarative-routing" element={<DeclarativeRouting />} />
                        <Route path="nested-routes" element={<NestedRoutes />} />
                        <Route path="navigation-links" element={<NavigationAndLinks />} />
                        <Route path="route-params" element={<RouteParams />} />
                        <Route path="route-params/user/:userId" element={<UserDetail />} />
                    </Route>

                    <Route path="forms" element={<Forms />}>
                        <Route index element={<Navigate to="controlled-inputs" replace />} />
                        <Route path="controlled-inputs" element={<ControlledInputs />} />
                        <Route path="multi-field-forms" element={<MultiFieldForms />} />
                        <Route path="form-validation" element={<FormValidation />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
