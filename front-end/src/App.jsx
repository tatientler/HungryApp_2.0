import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import { Login } from './pages/Login'
import { RestaurantsList } from './pages/RestaurantsList'
import { Meals } from './components/Meals/Meals';


export function App() {
    const [restaurant, setRestaurant] = useState({})
    const [search, setSearch] = useState('')

    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route
                    path='/restaurantes'
                    element={<RestaurantsList
                        setRestaurant={setRestaurant}
                        search={search}
                        setSearch={setSearch}
                    />} />
                <Route
                    path='restaurante/:id'
                    element={<Meals
                        restaurant={restaurant}
                        search={search}
                        setSearch={setSearch}
                    />} />
            </Routes>
        </>
    );
}
