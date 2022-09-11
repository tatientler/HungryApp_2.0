import { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row';
import { RestaurantsCard } from "../Restaurants/RestaurantsCard"

export function TesteBuscador({
    restaurants,
    getRestaurant,
    search
}) {
    const [newList, setNewList] = useState(restaurants)

    useEffect(() => {
        const filteredList = restaurants?.filter((restaurant) => {
            if (restaurant?.name.toLowerCase().includes(search)) {
                return restaurant
            } 
        })
        setNewList(filteredList)
    }, [search, restaurants])

    return (
        <>
            <Row>
                {
                    newList.map((restaurant) =>
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
        </>
    )
}
