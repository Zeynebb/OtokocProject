import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../login/Login'
import MainPage from '../mainPage/MainPage'

export default function Main() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Login />} ></Route>
                <Route path="/mainPage" element={<MainPage />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
            </Routes>
        </div>
    )
}
