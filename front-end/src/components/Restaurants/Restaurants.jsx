import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';

import './Restaurants.css'
import { NavbarMain } from "./NavbarMain/NavbarMain";
import { SearchBar } from "../SearchBar/SearchBar";
import { StoreType } from "./StoreType/StoreType";
import { DeliveryType } from "./DeliveryType";
import { Footer } from "../Footer/Footer";
import { useNavigate } from "react-router";
import { Marketing } from "./Marketing/Marketing";
import { TesteBuscador } from "../TesteBuscador/TesteBuscador";


export function Restaurants({
    setRestaurant,
    search,
    setSearch
}) {
    const [restaurants, setRestaurants] = useState([])
   
    const navigate = useNavigate()

    useEffect(() => {
        getRestaurants()
        console.log(restaurants)
    }, [])
  
    async function getRestaurants() {
        await fetch(`http://localhost:3000/restaurants/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setRestaurants(data)
                console.log(restaurants)
            })
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
            <Marketing />
            <SearchBar search={search} setSearch={setSearch} />
            <StoreType />
            <DeliveryType />

            <Container>
                <TesteBuscador
                    restaurants={restaurants}
                    getRestaurant={getRestaurant}
                    search={search} />
            </Container>

            <Footer />
        </>
    )
}
