import React from 'react'
import Navi from '../../navi/Navi'
import Dashboard from '../dashboard/Dashboard'
import CartSummary from '../cart/CartSummary'
import Login from '../login/Login'
import { Route, Routes } from 'react-router'
import App from '../../App'
import CartDetails from '../cart/CartDetails'
import '../../css/MainPage.css'
import { Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartState } from '../../store/actions/cartActions'
import CartDetail from '../cart/CartDetail'


export default function MainPage() {
    //buraya buton ekleyip aç kapa işlemini yap
    //buton open ise <CartDetails /> close ise <CartSummary />

    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cartState.state)
    console.log("cartState")
    console.log(cartState)

    function handleCartState(state) {
        let newState = { state }
        dispatch(getCartState(newState))
    }
    return (
        <div>
            <Navi />
            <div class="w3-row" id="mainPageMainDiv">
                <div class="w3-col l9 s6 w3-center" id="appDivDashboard">
                    <Dashboard />
                </div>
                <div class="w3-col l2 s6 w3-center" id="appCartSummaryDiv">
                    {cartState == 0 && <div id="openCartDetailDiv">
                        <Button onClick={() => (handleCartState(1))} id="openCartDetailButton">
                            <i class="angle double left icon"></i>Detaylı Sepeti Göster
                        </Button>
                    </div>}
                    {cartState == 0 && <CartSummary />}
                    {cartState == 1 && <div id="openCartDetailDiv">
                        <Button onClick={() => (handleCartState(0))} id="openCartDetailButton">
                            <i class="angle double left icon"></i>Sepeti Kapat
                        </Button>
                    </div>}
                    {cartState == 1 && <CartDetail />}
                </div>
            </div>

        </div>
    )
}
