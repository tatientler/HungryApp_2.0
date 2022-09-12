import { useState, useEffect } from "react"

import { NavbarRestaurant } from "./NavbarRestaurant/NavbarRestaurant";
import { RestaurantHeader } from "./RestaurantHeader/RestaurantHeader"
import { SearchBar } from "../SearchBar/SearchBar";
import { MenuMobile } from "../MenuMobile/MenuMobile"
import { DishCard } from './DishCard/DishCard'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export function Restaurant({
    restaurant,
    search,
    setSearch
}) {
    const [newList1, setNewList1] = useState(restaurant.meals)

    useEffect(() => {
        const filteredList = restaurant.meals?.filter((meal) => {
            if (meal?.name.toLowerCase().includes(search)) {
                return restaurant
            }
        })
        setNewList1(filteredList)
    }, [search, restaurant])

    return (
        <>
            <NavbarRestaurant />
            <RestaurantHeader restaurant={restaurant} />
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <Container>
                <Row>
                    {
                        newList1.map((menu) =>
                            <DishCard
                                key={menu._id}
                                id={menu._id}
                                dishAvatar={menu.avatar}
                                dishName={menu.name}
                                dishDescription={menu.description}
                                dishPrice={menu.price}
                            />
                        )
                    }
                </Row>
            </Container>

            <MenuMobile />
        </>
    )
}