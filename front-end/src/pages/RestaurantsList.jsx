import { Restaurants } from '../components/Restaurants/Restaurants'

export function RestaurantsList({
    id,
    setRestaurant
}) {
    return (
        <>
            <Restaurants id={id} setRestaurant={setRestaurant}/>
        </>
    )
}