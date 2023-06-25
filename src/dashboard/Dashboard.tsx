import { FaList } from "react-icons/fa";
import './dashboard.css'
import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
        return (
                <div>
                        <div className="d-md-none">
                                <div className="d-flex justify-content-end">
                                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                                <FaList></FaList>
                                        </button>
                                </div>

                                <div className="offcanvas offcanvas-start" tab-index="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                        <div className="offcanvas-header">
                                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                                <div>
                                                        <li> <Link to="/">Home</Link> </li>
                                                        <li> <Link to="/search">Search</Link> </li>
                                                        <li> <Link to="/favourites">Favourites</Link> </li>
                                                        <li> <Link to="/playlists">Playlists</Link> </li>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="d-flex gap-4">
                                <div className="my-dashboard d-none d-md-block">
                                        <li> <Link to="/">Home</Link> </li>
                                        <li> <Link to="/search">Search</Link> </li>
                                        <li> <Link to="/favourites">Favourites</Link> </li>
                                        <li> <Link to="/playlists">Playlists</Link> </li>
                                </div>
                                <div className="md-w-75 w-100 d-block">
                                        <Outlet></Outlet>
                                </div>
                        </div>
                </div>
        );
};

export default Dashboard;