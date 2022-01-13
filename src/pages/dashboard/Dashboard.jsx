import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button} from 'semantic-ui-react'
import '../../css/Dashboard.css'
import { addToCart } from '../../store/actions/cartActions'
import { addKDV, addSubTotal } from '../../store/actions/resultActions'

export default function Dashboard() {

    const dispatch = useDispatch()

    const { productList } = useSelector(state => state.productList)

    function handleAddToCart(product) {
        dispatch(addToCart(product, handleGetQuantity()))

    }
    function handleGetQuantity() {
        return document.getElementById("inputDashboardQuantity").value
    }

    function handleAddSubTotal(price) {
        dispatch(addSubTotal(price))
    }
    function handleAddKdvTotal(price) {
        let kdvPrice = ((price * 18) / 100);
        dispatch(addKDV(kdvPrice))
    }

    return (
        <div className="mainDivDashboard">
            <div class="w3-row" id="filterDiv">
                <div class="w3-col s4 w3-center">
                    <select class="w3-select w3-border" name="option" id="dashboardSelect">
                        <option value="" disabled selected>Marka Seçiniz</option>
                        <option value="1">Ford</option>
                        <option value="2">Ford Trucks</option>
                        <option value="3">Volvo</option>
                    </select>
                </div>
                <div class="w3-col s4 w3-center">
                    <select class="w3-select w3-border" name="option" id="dashboardSelect">
                        <option value="" disabled selected>Model Seçiniz</option>
                        <option value="1">Fiesta</option>
                        <option value="2">Focus</option>
                        <option value="3">S-Max</option>
                        <option value="1">Mondeo</option>
                        <option value="2">Ranger</option>
                        <option value="3">Yeni Kuga</option>
                    </select>
                </div>
                <div class="w3-col s4 w3-center">
                    <div class="ui icon input" id="searchDiv">
                        <input type="text" placeholder="Parça No..." />
                        <i class="search icon"></i></div>
                </div>
            </div>
            <div className="listDiv">
                <div class="w3-row" >
                    <div id="w3RowHeader">
                        <div class="w3-col m2 w3-center"><p>Resim</p></div>
                        <div class="w3-col m2 w3-center"><p>Parça No</p></div>
                        <div class="w3-col m2 w3-center"><p>Parça Adı</p></div>
                        <div class="w3-col m2 w3-center"><p>Tutar</p></div>
                        <div class="w3-col m2 w3-center"><p>Adet</p></div>
                        <div class="w3-col m2 w3-center" style={{ color: "rgb(95, 94, 94)" }}><p>-</p></div>
                    </div>
                </div>
                {productList.map((product) => (
                    <div class="w3-row" id="listDashboard">
                        <p class="w3-col m2 w3-center" id="dashboardImageDiv">
                            <img id="dashboardImage"
                                src="https://res.cloudinary.com/zeydatabase/image/upload/v1641819290/otokoc/nonimage_wwqbd9.png"></img>
                        </p>
                        <div class="w3-col m2 w3-center"><p>{product.productNo}</p></div>
                        <div class="w3-col m2 w3-center"><p>{product.productName}</p></div>
                        <div class="w3-col m2 w3-center"><p>{product.price}</p></div>
                        <div class="w3-col m2 w3-center">
                            <input  id="inputDashboardQuantity" name="quantity" placeholder="Adet" defaultValue="1"></input></div>
                        <div class="w3-col m2 w3-center">
                            <Button type="submit" id="buttonDashboardText"
                                onClick={() => (handleAddToCart(product), (handleAddSubTotal(product.price)),
                                    (handleAddKdvTotal(product.price)))}>Sepete Ekle</Button>
                        </div>
                    </div>))}
            </div>
        </div >
    )
}
