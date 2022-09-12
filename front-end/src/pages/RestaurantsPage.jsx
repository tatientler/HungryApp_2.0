import { Restaurants } from '../components/Restaurants/Restaurants'

import { PrivateRoute } from './PrivateRoute'

export function RestaurantsPage({
    id,
    setRestaurant,
    search,
    setSearch
}) {
    return (
        <PrivateRoute>
            <Restaurants 
                id={id} 
                setRestaurant={setRestaurant}
                search={search}
                setSearch={setSearch}
                />
        </PrivateRoute>
    )
}