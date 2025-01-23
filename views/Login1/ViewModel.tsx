import React, { useState } from 'react'

const Login1ViewModel = () => {
    const [values, setValues] = useState({
        user: '',
        password: ''
    });
    const [showIconEye, setShowIconEye] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onChangeInputLogin = (property: string, value: any) => {
        setValues({...values, [property]: value})
        console.log(property + ' : ' + value);
        if( property === 'password' && value !== ''){
            setShowIconEye(true);
        }else{
            setShowIconEye(false);
        }
    }

    const onHandledClickLogin = () => {
        console.log('Se inicio sesion');
        console.log(JSON.stringify(values));
    }

    return {
        ...values,
        onChangeInputLogin,
        onHandledClickLogin,
        showIconEye,
        showPassword,
        setShowPassword
    }
}

export default Login1ViewModel