import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return ( 
            <>
            <h1>
                Adminlayout
            </h1>
            <nav>
                <Link to="admindashboard"> AdminDashboard</Link>
                <Link to="settings"> Settings</Link>
                <Link to="userdetails">UserDetails</Link>
            </nav>
            <Outlet/>
            </>
);
}

export default Adminlayout;