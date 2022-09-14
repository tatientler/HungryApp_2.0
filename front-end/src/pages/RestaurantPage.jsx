import { PrivateRoute } from './PrivateRoute'

import { Restaurant } from '../components/Restaurant/Restaurant'

export function RestaurantPage({
    restaurant,
    setRestaurant,
    search,
    setSearch
}) {
    return (
        <PrivateRoute>
            <Restaurant restaurant={restaurant} setRestaurant={setRestaurant} search={search} setSearch={setSearch} />
        </PrivateRoute>
    )
}
