import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Svg, { Path } from "react-native-svg"
import { useState } from 'react';
import { ButtonCustom } from '../../components/ButtonCustom';
import styles from './Styles'
import Login1ViewModel from './ViewModel';

const Login1 = () => {
  const { user, password, onChangeInputLogin, onHandledClickLogin, showIconEye, showPassword, setShowPassword } = Login1ViewModel();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/modelLoginNvo.jpeg')} style={{width: '100%', height: '33%'}} />
      
      <View style={styles.contentLogin}>
        <Text style={styles.title}>¡Hola!</Text>
        <Text style={styles.subtitle}>Inicia sesión con tu cuenta</Text>

        
        <View style={styles.textInput}>
            <Input  
                placeholder='Usuario'
                inputContainerStyle={{borderBottomWidth: 0}}
                placeholderTextColor={'#bfbfbf'}
                leftIcon={
                  <Icon name='person' color={'#e0e0e0'} />
                }
                value={user}
                onChangeText={text => onChangeInputLogin('user', text)}
            />
        </View>
        
        <View style={styles.textInput}>
          <Input  placeholder='Contraseña'
                inputContainerStyle={{borderBottomWidth: 0}}
                placeholderTextColor={'#bfbfbf'}
                leftIcon={
                  <Icon name='lock' color={'#e0e0e0'} />
                }
                secureTextEntry={!showPassword}
                rightIcon={
                    showIconEye ?
                    <Icon type='material-community' 
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    color={'gray'} 
                    onPress={() => setShowPassword(!showPassword)}
                    />
                    : null
                }
                value={password}
                onChangeText={text => onChangeInputLogin('password', text)}
            />
        </View>
        
                  
        <Text style={styles.forgotPass}>¿Olvidaste tu contraseña? <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Reestablecer</Text></Text>

        <ButtonCustom text={"Iniciar Sesión"} onPress={() => onHandledClickLogin()} />

        <Text style={styles.forgotPass}>No tengo una cuenta. <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Crear</Text></Text>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

export default Login1;