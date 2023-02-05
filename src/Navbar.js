import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem('JWTAuthenticateToken'))

    useEffect(() => {
        setIsLogin(localStorage.getItem('JWTAuthenticateToken'))
    });

    const authenticatedData = () => {
        return isLogin ? 'Sign Out' : 'Sign In'
    }
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Boss.dk</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/task">My Tasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/create-task">New Task</Link>
                            </li>
                            <li className="nav-item">
                                <div className="right">
                                    <Link className="nav-link active" aria-current="page" to="/authenticate">{authenticatedData()}</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;