import React from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

interface Props {
    text: string,
    onPress: () => void
}

export const ButtonCustom = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.buttonTouchable} onPress={onPress}>
        <LinearGradient
        // Button Linear Gradient
        colors={['#FF3CBD', '#FFB677']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        style={styles.button}>
        <Text style={styles.text}>{ text }</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonTouchable:{
        width: '50%',
        height: 50,
        marginTop: 40
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 25,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 18,
      color: '#fff',
    },
  });