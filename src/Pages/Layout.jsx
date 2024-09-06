import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";

function MainLayout() {
    return (
        <>
            <Navbar /> {/** This navbar is the shared UI we want to across pages */}
            <Outlet /> {/** The actual page which will be rendered along with navbar */}
        </>
    )
}

export default MainLayout;