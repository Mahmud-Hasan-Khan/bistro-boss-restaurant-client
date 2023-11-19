import { FaShoppingCart, FaHome, FaCalendar, FaList, FaUtensils, FaUser } from "react-icons/fa";
import { MdMenuBook, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";

const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: get isAdmin from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink></li>

                            <li><NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink></li>

                            <li><NavLink to="/dashboard/manageItems"><FaList></FaList>Manage Items</NavLink></li>

                            <li><NavLink to="/dashboard/bookings"><MdOutlineRateReview></MdOutlineRateReview>Manage Bookings</NavLink></li>

                            <li><NavLink to="/dashboard/users"><FaUser></FaUser>All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/cart"><FaHome></FaHome>User Home</NavLink></li>

                                <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>

                                <li><NavLink to="/dashboard/userHome"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>

                                <li><NavLink to="/dashboard/review"><MdOutlineRateReview></MdOutlineRateReview>Add Review</NavLink></li>

                                <li><NavLink to="/dashboard/review"><FaList></FaList>My Bookings</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>

                    <li><NavLink to="/order/salad"><MdMenuBook></MdMenuBook>Menu</NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;