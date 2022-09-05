import {
    BsPatchCheckFill,
    BsStarHalf,
    BsStopwatch,
    BsFillGeoFill,
    BsFillTelephoneFill
} from "react-icons/bs";
import { AiOutlineEnvironment } from "react-icons/ai";

import './RestaurantHeader.css'

export function RestaurantHeader({
    restaurant
}) {

    return (
        <>
            <div className="restaurant-header-wrapper container" >
                <div className="d-flex justify-content-center">
                    <img src={restaurant.backgroundImage} className="img-restaurant" alt="Prato ilustrativo" />
                </div>

                <div className="container restaurant-header">
                    <div className="row p-1 pb-3 ">
                        <div className="col-2 d-flex align-self-center justify-content-center">
                            <img className="img-logo" src={restaurant.avatar} alt="Logo do restaurante" />
                        </div>

                        <div className="col-10 mt-2">
                            <h2 className="h2 text-overflow">
                                <span>{restaurant.name}</span>&nbsp;
                                <BsPatchCheckFill className="check-icon" />
                            </h2>

                            <p className="restaurant-description text-overflow d-flex align-items-center">
                                <AiOutlineEnvironment className="address" />&nbsp;
                                <span>{restaurant.address}</span>
                            </p>

                            <p className="restaurant-description d-flex align-items-center">
                                <BsFillTelephoneFill className="phone" />&nbsp;
                                <span>{restaurant.phone}</span>
                            </p>

                            <div className="delivery-type container d-flex justify-content-between mt-2">
                                <span className="badge rounded-pill text-dark d-flex align-items-center">
                                    <BsStarHalf className="star-icon" />&nbsp;
                                    <span>{restaurant.rating}</span>
                                </span>

                                <span className="badge rounded-pill text-dark d-flex align-items-center">
                                    <BsStopwatch className="icon" />&nbsp;
                                    30min - 50min
                                </span>

                                <span className="badge rounded-pill text-dark d-flex align-items-center">
                                    <BsFillGeoFill className="gps-icon" />&nbsp;
                                    2 km
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}