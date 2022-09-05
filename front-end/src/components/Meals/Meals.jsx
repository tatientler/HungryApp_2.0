import { NavbarRestaurant } from "../NavbarRestaurant/NavbarRestaurant";
import { RestaurantHeader } from "./RestaurantHeader/RestaurantHeader"
import { SearchBar } from "../SearchBar/SearchBar";
import { Footer } from "../Footer/Footer"
import { Menu } from './Menu/Menu'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export function Meals({
    restaurant
}) {
    return (
        <>
            <NavbarRestaurant />
            <RestaurantHeader restaurant={restaurant} />
            <SearchBar />

            <Container>
                <Row>
                    {
                        restaurant.meals.map((menu) =>
                            <Menu
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
            
            <Footer />
        </>
    )
}