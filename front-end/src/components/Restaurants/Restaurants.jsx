import { useState, useEffect } from "react";
import { RestaurantsCard } from "./RestaurantsCard/RestaurantsCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './Restaurants.css'
import { NavbarMain } from "./NavbarMain/NavbarMain";
import { SearchBar } from "../SearchBar/SearchBar";
import { StoreType } from "./StoreType/StoreType";
import { DeliveryType } from "./DeliveryType";
import { Footer } from "../Footer/Footer";
import { useNavigate } from "react-router";
import { CarouselComponent } from "./Carousel/Carousel";

export function Restaurants({
    setRestaurant
}) {
    const [restaurants, setRestaurants] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        await fetch(`http://localhost:3000/restaurants/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => { setRestaurants(data) })
    }

    async function getRestaurant(id) {
        await fetch(`http://localhost:3000/restaurants/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setRestaurant(data))
        navigate(`/restaurante/${id}`)
    }

    return (
        <>
            <NavbarMain />
            <CarouselComponent restaurants={restaurants} />
            <SearchBar busca={search} setBusca={setSearch} />
            <StoreType />
            <DeliveryType />

            <Container>
                <Row>
                    {
                        restaurants.map((restaurant) =>
                            <RestaurantsCard
                                key={restaurant._id}
                                id={restaurant._id}
                                restaurantName={restaurant.name}
                                restaurantAvatar={restaurant.avatar}
                                restaurantRating={restaurant.rating}
                                getRestaurant={getRestaurant}
                            />
                        )
                    }
                </Row>
            </Container>

            <Footer />
        </>
    )
}
