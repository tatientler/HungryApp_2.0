import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import { LoginPage } from './pages/LoginPage'
import { RestaurantsPage } from './pages/RestaurantsPage'
import { RestaurantPage } from './pages/RestaurantPage';


export function App() {
    const [restaurant, setRestaurant] = useState({})
    const [search, setSearch] = useState('')

    return (
        <>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route
                    path='/restaurantes'
                    element={<RestaurantsPage
                        setRestaurant={setRestaurant}
                        search={search}
                        setSearch={setSearch}
                    />} />
                <Route
                    path='restaurante/:id'
                    element={<RestaurantPage
                        restaurant={restaurant}
                        search={search}
                        setSearch={setSearch}
                    />} />
            </Routes>
        </>
    );
}
