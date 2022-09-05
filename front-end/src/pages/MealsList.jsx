import { Meals } from '../components/Meals/Meals'

export function MealsList({
    restaurant,
    setRestaurant
}) {
    return (
        <>
            <Meals restaurant={restaurant} setRestaurant={setRestaurant} />
        </>
    )
}