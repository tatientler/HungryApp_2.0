import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router";

import './NavbarRestaurant.css'

export function NavbarRestaurant() {
    const navigate = useNavigate()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                    <button className="back-btn bg-light" onClick={() => navigate(-1)}>
                        <AiOutlineDoubleLeft />
                    </button>
                
                <div>
                    <img src={require('./img/Logo.png')} className="logo" alt="Hungry" />
                </div>

                <a className="nav-link exit-desktop" href="index.html">
                    <BsBoxArrowLeft className="exit-icon"/>
                </a>
            </div>
        </nav>
        </>
    )
}