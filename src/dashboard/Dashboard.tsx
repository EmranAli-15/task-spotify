import { FaList } from "react-icons/fa";
import './dashboard.css'
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {

        const routeList = <>
                <li> <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink> </li>
                <li> <NavLink to="/search">Search</NavLink> </li>
                <li> <NavLink to="/favourites">Favourites</NavLink> </li>
                <li> <NavLink to="/playlists">Playlists</NavLink> </li>
        </>

        return (
                <div>
                        <div className="d-md-none">
                                <div className="d-flex justify-content-end">
                                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                <FaList></FaList>
                                        </button>
                                </div>

                                <div className="offcanvas my-dashboard offcanvas-start" tab-index="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                        <div className="offcanvas-header">
                                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                                <ul className="list-style">
                                                        {
                                                                routeList
                                                        }
                                                </ul>
                                        </div>
                                </div>
                        </div>
                        <div className="d-flex w-100 gap-4">
                                <div className="md-w-25 my-dashboard d-none d-md-block">
                                        <ul className="list-style">
                                                {
                                                        routeList
                                                }
                                        </ul>
                                </div>
                                <div className="md-w-75 overflow-x-auto w-100">
                                        <Outlet></Outlet>
                                </div>
                        </div>
                </div>
        );
};

export default Dashboard;