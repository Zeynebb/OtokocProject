import React from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'
import '../css/Navi.css'

export default function Navi() {
    return (
        <div className="main">
            <ul className="navbarUl">
                <li style={{ float: "right", width: "20%" }}>
                    <a><img id="profileNavi"
                        src="https://res.cloudinary.com/zeydatabase/image/upload/v1641759955/otokoc/profile_oqsg7q.png" >
                    </img>
                    &nbsp; Zeyneb Eda YILMAZ</a>
                </li>
                <li >
                    <img id="logoNavi" src="https://res.cloudinary.com/zeydatabase/image/upload/v1641754648/otokoc/otokoc2_fnhyga.png" ></img>
                </li>
            </ul>
            <hr className="hrTop" />
        </div>
    )
}
