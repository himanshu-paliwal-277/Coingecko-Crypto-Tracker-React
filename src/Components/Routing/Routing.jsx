import { Route, Routes } from "react-router-dom";
import MainLayout from "../../Pages/Layout";
import { lazy, Suspense } from "react";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";
import LineLoader from "../PageLoader/LineLoader";

const Home = lazy(() => import("../../Pages/Home"));
const CoinDetailsPage = lazy(() => import("../../Pages/CoinDetailsPage"));

function Routing() {
  return (
    <>
      <CustomErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<LineLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/details/:coinId"
              element={
                <Suspense fallback={<LineLoader />}>
                  <CoinDetailsPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </CustomErrorBoundary>
    </>
  );
}

export default Routing;
