import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import CoinDetailsPage from "../../Pages/CoinDetailsPage";
import MainLayout from "../../Pages/Layout";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/details/:coinId" element={<CoinDetailsPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routing;