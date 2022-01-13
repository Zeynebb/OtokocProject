import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../css/Login.css'
import * as Yup from "yup";
import { Button, Label } from 'semantic-ui-react';

export default function Login() {
    let navigate = useNavigate()
    useEffect(() => {
    })

    const initialValues = {
        email: "",
        password: "",
        isEmail: "0"
    }
    function changeIsEmail(state) {
        this.initialValues.isEmail = state;
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            email: Yup.string().when("isEmail", {
                is: '1',
                then: Yup.string()
                    .email("Geçerli bir email adresi giriniz!")
                    .required("Email boş bırakılamaz!"),
                otherwise: Yup.string()
                    .required("Kullanıcı adı boş bırakılamaz!")
                    .min(6, 'Kullanıcı adı en az 6 harf olmalıdır!'),
            }),
            password: Yup.string().min(8, "Şifre en az 8 haneli olmalıdır!").required('Şifre boş bırakılamaz!').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "En az bir büyük harf, bir küçük harf ve bir özel karakter içermek zorundadır!")
        }),
        onSubmit: (e) => {
            navigate('/mainPage')
        }
    });
    return (
        <div >
            <div class="w3-row" id="mainDiv" >
                <div class="w3-col s6 w3-center" id="leftDiv">
                    <img id="leftImage"
                        src="https://res.cloudinary.com/zeydatabase/image/upload/v1641729491/otokoc/snowy_mountains_6-wallpaper-2048x1152_sqah7a.jpg"></img>
                </div>
                <div class="w3-col s6 w3-center" id="rightDiv">
                    <img id="logo" src="https://res.cloudinary.com/zeydatabase/image/upload/v1641754648/otokoc/otokoc2_fnhyga.png" ></img>
                    <form onSubmit={formik.handleSubmit} validationSchema={formik.validationSchema} onBlur={formik.handleBlur}
                        handleChange={formik.handleChange} className="formLogin"
                    >
                        <h3>Giriş</h3>
                        <input class="w3-input w3-border" id="email" type="text" placeholder="Email | Kullanıcı Adı"
                            values={formik.values.email} onChange={formik.handleChange} required
                            onChangeText={(event) => {
                                changeIsEmail(event)
                                if ((document.getElementById("email").value).equals("@")) {
                                    changeIsEmail('0')
                                } else {
                                    changeIsEmail('1')
                                }
                            }} />
                        {formik.errors.email && formik.touched.email && (
                            <Label basic pointing color='red'>{formik.errors.email}</Label>
                        )}
                        <input class="w3-input w3-border" type="password" placeholder="Şifre" id="password" values={formik.values.password} onChange={formik.handleChange} required />
                        {formik.errors.password && formik.touched.password && (
                            <Label basic color='red' pointing>{formik.errors.password}</Label>
                        )}
                        <br />
                        <button type="submit" class="w3-button w3-black w3-round-xlarge" id="buttonLogin"
                            color="black">Giriş Yap
                        </button>
                    </form>
                </div>
            </div>

        </div >
    )
}