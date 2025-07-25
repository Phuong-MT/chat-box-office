import BaseLayout from "@/layouts";
import { Suspense, lazy } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";

function Pages() {
    return (
        <RouterRoutes>
            <Route
                path="/home"
                element={
                    <BaseLayout>
                        <div>Hello</div>
                    </BaseLayout>
                }
            />

            <Route path="*" element={<div>404</div>} />
        </RouterRoutes>
    );
}

export default Pages;
