import React, { useState } from "react";

const ViewModelLogin2 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showIconEye, setShowIconEye] = useState(false);
    const [values, setValues] = useState({
        user: '',
        password: ''
    })

    const onChangeInputs = (type:string, text: any) => {
        console.log(type + ': ' + text);
        setValues({ ...values, [type]: text });
        if( type === 'password' && text !== ''){
            setShowIconEye(true);
        }else{
            setShowIconEye(false);
        }
    }

    const handledBtnLogin = () => {
        console.log('Inicia Sesion');
        console.log(JSON.stringify(values));
    }

    const handledClickQr = () => {
        console.log('Login con QR');
    }

    return{
        ...values,
        onChangeInputs,
        showPassword,
        setShowPassword,
        showIconEye,
        setShowIconEye,
        handledBtnLogin,
        handledClickQr
    }
}

export default ViewModelLogin2;