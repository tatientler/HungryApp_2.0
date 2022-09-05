import { BsPlusLg } from "react-icons/bs";

import './Menu.css'


export function Menu({
    dishAvatar,
    dishName,
    dishDescription,
    dishPrice,
}) {
    return (
            <>
                <div className="meals-wrapper col-sm-12 col-md-6 col-xl-4">
                    <div className="row m-1 dish-card pt-3">
                        <div className="col-3">
                            <img className="img-dish me-3 " src={dishAvatar} alt="Ilustração do prato" />
                        </div>
                        <div className="col-9">
                            <h2 className="h2 text-overflow">{dishName}</h2>
                            <p className="restaurant-description text-overflow">{dishDescription}</p>
                            <p className="price-description">{dishPrice.toLocaleString('pr-br', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                        <div className="add-btn">
                            <button className="d-flex align-items-center">
                                <BsPlusLg className="bsPlusLg" />
                            </button>
                        </div>
                    </div>
                </div>
            </>
    )
}