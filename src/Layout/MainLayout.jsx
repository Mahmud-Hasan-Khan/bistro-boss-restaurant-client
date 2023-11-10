import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
            <div className="flex-grow">
                <Outlet ></Outlet>
            </div>
            <Footer className="mt-auto"></Footer>
        </div>
    );
};

export default MainLayout;