import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import '../../css/CartDetails.css'
import { removeFromCart } from '../../store/actions/cartActions'

export default function CartDetail() {

    const dispatch = useDispatch()

    function handleDeleteProduct(product) {
        dispatch(removeFromCart(product))
    }

    const { cartItems } = useSelector(state => state.cart)
    const subTotal = useSelector(state => state.result.newSubTotal)
    const kdvTotal = useSelector(state => state.result.kdvTotal)
    const total = subTotal + kdvTotal;


    return (
        <div>
            <div className="cartDetailDiv" >
                <p id="cartDetailText">Sepet </p>
                {cartItems.length === 0 ?
                    <div class="w3-row">
                        <div class="w3-col l10 s6 w3-center"><p>Sepetinizde ürün yok</p></div>
                    </div> :
                    cartItems.map((cartItems) => (
                        <div class="w3-row" id="cartDetailProductsDiv">
                            <div class="w3-col l4 s6 w3-center"><p>{cartItems.product.productNo}</p></div>
                            <div class="w3-col l1 s6 w3-center" ><p style={{ float: "right" }}>{cartItems.quantity} </p></div>
                            <div class="w3-col l2 s6 w3-center"><p style={{ float: "right" }}> Adet</p></div>
                            <div class="w3-col l4 s6 w3-center"><p style={{ float: "right" }}> {cartItems.product.price}</p></div>
                            <div class="w3-col l1 s6 w3-center">
                                <Button id="cartDeleteButton" class="ui icon button"
                                    onClick={() => (handleDeleteProduct(cartItems.product))} size="small">X</Button>
                            </div>
                            <br />
                        </div>

                    ))
                }
                <hr id="cartDetailHr" />
                <div class="w3-row" id="cartDetailProductsDiv">
                    <div class="w3-col l6 s6 w3-center"><p style={{ fontWeight:"bold" }}>Ara Toplam</p></div>
                    <div class="w3-col l5 s6 w3-center"><p style={{ float: "right" }}> {subTotal.toFixed(2)}</p></div>
                    <br />
                </div>
                <div class="w3-row" id="cartDetailProductsDiv">
                    <div class="w3-col l4 s6 w3-center"><p style={{ fontWeight:"bold" }}>KDV</p></div>
                    <div class="w3-col l3 s6 w3-center"><p style={{ float: "right" }}>%18 </p></div>
                    <div class="w3-col l4 s6 w3-center"><p style={{ float: "right" }}> {kdvTotal.toFixed(2)}</p></div>
                    <br />
                </div>
                <hr />
                <div class="w3-row" id="cartDetailProductsDiv">
                    <div class="w3-col l6 s6 w3-center"><p style={{ fontWeight:"bold" }}>Toplam</p></div>
                    <div class="w3-col l5 s6 w3-center"><p style={{ float: "right" }}> {total.toFixed(2)}</p></div>
                    <br />
                </div>
            </div>

        </div>
    )
}
