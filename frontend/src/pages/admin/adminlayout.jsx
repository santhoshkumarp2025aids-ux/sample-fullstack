import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return ( 
            <>
            <h1>
                Adminlayout
            </h1>
            <br/><br/>
            <nav>
                <Link to="admindashboard"> AdminDashboard</Link><br/>
                <Link to="settings"> Settings</Link><br/>
                <Link to="userdetails">UserDetails</Link><br/><br/>
            </nav>
            <Outlet/>
            </>
);
}

export default Adminlayout;