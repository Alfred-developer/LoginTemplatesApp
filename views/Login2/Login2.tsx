import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Input } from "react-native-elements";
import ViewModelLogin2 from "./ViewModel";
import styles from './Styles'

const Login2 = () => {
    const { user, password, onChangeInputs, showPassword, setShowPassword, showIconEye, handledBtnLogin, handledClickQr } = ViewModelLogin2();
    

    return (
        <View style={styles.content}>
            <Image source={require('../../assets/backgorunds/background-4.jpg')} style={styles.backgroundImg} />

            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/login.png')} style={styles.imgLogo} />
            </View>

            <View style={{padding:35, alignItems: 'center', paddingTop: -15}}>
            <Text style={styles.hiTitle}>Iniciar Sesión</Text>
            <Text style={styles.textSubtitle}>¡Bienvenido es bueno tenerte de vuelta!</Text>

            <View style={styles.inputContainer}>
                <Input  placeholder="Usuario" 
                        inputContainerStyle={{borderBottomWidth: 0}}
                        keyboardType={'default'}
                        placeholderTextColor={'#e0e0e0'}
                        value={user}
                        leftIcon={
                            <Icon name="person" color={'#e0e0e0'} />
                        }
                        rightIcon={
                            <Icon 
                                name="qrcode-scan" type='material-community' 
                                style={{paddingRight: 10}} color={'gray'} 
                                onPress={() => (handledClickQr())}
                            />
                        }
                        onChangeText={text => onChangeInputs('user', text)}
                         />
            </View>

            <View style={styles.inputContainer}>
                <Input  placeholder="Contraseña" 
                        inputContainerStyle={{borderBottomWidth: 0}}
                        secureTextEntry={!showPassword}
                        placeholderTextColor={'#e0e0e0'}
                        value={password}
                        leftIcon={
                            <Icon name="lock" color={'#e0e0e0'} />
                        }
                        rightIcon={
                            showIconEye ?
                                <Icon 
                                    type='material-community' 
                                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                                    color={'gray'} 
                                    onPress={() => (setShowPassword(!showPassword))}
                                />
                            : null
                        }
                        onChangeText={text => onChangeInputs('password', text)}
                         />
            </View>

          <Text style={styles.forgotPass}>¿Olvidaste tu contraseña? <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Restablecer</Text></Text>
            
            <TouchableOpacity style={styles.contentBtn} onPress={() => (handledBtnLogin())}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#34434D', '#34434D',]}
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 0}}
                    style={styles.btnLogout}>
                        <Text style={styles.textBtn}>Iniciar Sesión</Text>
                </LinearGradient>
            </TouchableOpacity>

          <Text style={styles.forgotPass}>No tengo una cuenta. <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Crear</Text></Text>

            </View>
        </View>
    )
}

export default Login2;