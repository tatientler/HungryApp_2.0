import { Meals } from '../components/Meals/Meals'
import { PrivateRoute } from './PrivateRoute'

export function MealsList({
    restaurant,
    setRestaurant
}) {
    return (
        <PrivateRoute>
            <Meals restaurant={restaurant} setRestaurant={setRestaurant} />
        </PrivateRoute>
    )
}