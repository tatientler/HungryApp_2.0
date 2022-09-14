import { PrivateRoute } from './PrivateRoute'

import { Restaurants } from '../components/Restaurants/Restaurants'

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
