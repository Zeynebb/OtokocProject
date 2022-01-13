import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Dropdown } from 'semantic-ui-react'
import '../../css/Dashboard.css'
import { addToCart } from '../../store/actions/cartActions'
import { addKDV, addSubTotal } from '../../store/actions/resultActions'
import _ from "lodash";
import { MultiSelect } from 'primereact/multiselect'

export default function Dashboard() {

    const dispatch = useDispatch()

    const { productList } = useSelector(state => state.productList)

    const [products, setProductList] = useState(productList)

    const [selectedBrand, setSelectedBrand] = useState([])
    const [selectedModel, setSelectedModel] = useState([])

    function handleAddToCart(product) {
        dispatch(addToCart(product, handleGetQuantity()))

    }
    const brandList = [
        { name: "Ford", key: "1", value: "Ford" },
        { name: "Ford Trucks", key: "2", value: "Ford Trucks" },
        { name: "Volvo", key: "3", value: "Volvo" }
    ];
    const modelList = [
        { name: "Fiesta", key: "1", value: "Fiesta" },
        { name: "Focus", key: "2", value: "Focus" },
        { name: "S-Max", key: "3", value: "S-Max" },
        { name: "Mondeo", key: "4", value: "Mondeo" },
        { name: "Ranger", key: "5", value: "Ranger" },
        { name: "Yeni Kuga", key: "6", value: "Yeni Kuga" },
        { name: "XC40", key: "7", value: "XC40" },
        { name: "XC90", key: "8", value: "XC90" },
        { name: "S60", key: "9", value: "S60" },
        { name: "Tourneo Courier", key: "10", value: "Tourneo Courier" },

    ];
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
    let withBrandFilterData = products.filter(product => selectedBrand ? selectedBrand.includes(product.brand) : null);
    let withoutBrandFilterData = productList
    function handleBrandFilterData() {
        if (selectedBrand.length === 0) {
            return withoutBrandFilterData
        }

        else {
            return withBrandFilterData
        }
    }
    let withModelFilterData = products.filter(product => selectedModel ? selectedModel.includes(product.model) : null);
    let withoutModelFilterData = productList
    function handleModelFilterData() {
        if (selectedModel.length === 0) {
            return withoutModelFilterData
        }

        else {
            return withModelFilterData
        }
    }
    // handleBrandFilterData handleModelFilterData selectedBrand selectedModel
    let filteredProductList = []
    if (selectedBrand.length > 0 && selectedModel.length === 0) {
        filteredProductList = _.intersection(handleBrandFilterData())//Şehir varsa
    }
    else if (selectedBrand.length === 0 && selectedModel.length > 0) {
        filteredProductList = _.intersection(handleModelFilterData())//çalışma zamanı varsa
    }
    else if (selectedBrand.length > 0 && selectedModel.length > 0) {
        filteredProductList = _.intersection(handleBrandFilterData(), handleModelFilterData())//şehir + çalışma zamanı varsa
    }
    else if (selectedBrand.length === 0 && selectedModel.length === 0) {//şehir + çalışma zamanı yoksa
        filteredProductList = productList
    }

    return (
        <div className="mainDivDashboard">
            <div class="w3-row" id="filterDiv">
                <div class="w3-col s4 w3-center">
                    <MultiSelect id="dashboardSelect"
                        placeholder="Marka Seçiniz..."
                        optionLabel="name"
                        optionValue="value"
                        value={selectedBrand}
                        options={brandList}
                        onChange={(e) =>
                            (setSelectedBrand(e.value))} />
                </div>
                <div class="w3-col s4 w3-center">
                    <MultiSelect id="dashboardSelect"
                        placeholder="Model Seçiniz..."
                        optionLabel="name"
                        optionValue="value"
                        value={selectedModel}
                        options={modelList}
                        onChange={(e) =>
                            (setSelectedModel(e.value))} />
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
                {filteredProductList.map((product) => (
                    <div class="w3-row" id="listDashboard">
                        <p class="w3-col m2 w3-center" id="dashboardImageDiv">
                            <img id="dashboardImage"
                                src="https://res.cloudinary.com/zeydatabase/image/upload/v1641819290/otokoc/nonimage_wwqbd9.png"></img>
                        </p>
                        <div class="w3-col m2 w3-center"><p>{product.productNo}</p></div>
                        <div class="w3-col m2 w3-center"><p>{product.productName}</p></div>
                        <div class="w3-col m2 w3-center"><p>{product.price}</p></div>
                        <div class="w3-col m2 w3-center">
                            <input id="inputDashboardQuantity" name="quantity" placeholder="Adet" defaultValue="1"></input></div>
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
