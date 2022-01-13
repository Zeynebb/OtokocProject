import React from 'react'
import { Route, Routes } from 'react-router'
import CartDetails from '../cart/CartDetails'
import CartSummary from '../cart/CartSummary'
import Login from '../login/Login'
import MainPage from '../mainPage/MainPage'

export default function Main() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Login />} ></Route>
                <Route path="/mainPage" element={<MainPage />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/cartDetails" element={<CartDetails />} ></Route>
                <Route path="/cart" element={<CartSummary />} ></Route>
            </Routes>
        </div>
    )
}
