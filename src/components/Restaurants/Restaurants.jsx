import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Container from 'react-bootstrap/Container';

import { NavbarRestaurants } from "./NavbarRestaurants/NavbarRestaurants";
import { SearchBar } from "../SearchBar/SearchBar";
import { StoreType } from "./StoreType/StoreType";
import { BadgeFilter } from "./BadgeFilter/BadgeFilter";
import { Marketing } from "./Marketing/Marketing";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { RestaurantList } from "./RestaurantList/RestaurantList";

export function Restaurants({
    setRestaurant,
    search,
    setSearch
}) {
    const [restaurants, setRestaurants] = useState([])
   
    const navigate = useNavigate()

    useEffect(() => {
        getRestaurants()
    }, [])
  
    async function getRestaurants() {
        await fetch(`https://hungry--app.herokuapp.com/restaurants/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setRestaurants(data)
            })
    }

    async function getRestaurant(id) {
        await fetch(`https://hungry--app.herokuapp.com/restaurants/${id}`, {
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
            <NavbarRestaurants />
            <Marketing />
            <SearchBar search={search} setSearch={setSearch} />
            <StoreType />
            <BadgeFilter />

            <Container>
                <RestaurantList
                    restaurants={restaurants}
                    getRestaurant={getRestaurant}
                    search={search} />
            </Container>

            <MenuMobile />
        </>
    )
}
