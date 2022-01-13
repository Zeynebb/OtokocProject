import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/CartSummary.css'

export default function CartSummary() {

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    console.log(cartItems)

    function carpma(sayi1, sayi2) {
        document.getElementById('sonuc').value = sayi1 * sayi2;
        console.log("geldi")
    }

    return (
        <div>
            
            <div className="cartDiv" >
                <p id="cartSummaryText">Sepet Özeti</p>
                {cartItems.length == 0 ?
                    <div class="w3-row">
                        <div class="w3-col l10 s6 w3-center"><p>Sepetinizde ürün yok</p></div>
                    </div> :
                    cartItems.map((cartItems) => (
                        <div class="w3-row">
                            <div class="w3-col l8 s6 w3-center"><p>{cartItems.product.productNo}</p></div>
                            <div class="w3-col l2 s6 w3-center" ><p style={{ float: "right" }}>{cartItems.quantity} </p></div>
                            <div class="w3-col l2 s6 w3-center"><p style={{ float: "right" }}> Ad.</p></div>
                            <br />
                        </div>

                    ))
                }
                <hr id="cartSummaryHr"/>
            </div>

        </div >
    )
}
