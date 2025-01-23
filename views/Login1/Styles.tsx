import { StyleSheet } from "react-native";

const Login1Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
    },
    contentLogin: {
      alignItems: 'center',
      // justifyContent: 'center',
      flex: 1
    },
    title: {
      fontSize: 80,
      color: '#34434D',
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: 20,
      color: 'gray'
    },
    textInput: {
      width: '80%', 
      backgroundColor: '#fff',
      justifyContent: 'center',
      height: 50,
      flexDirection: 'row',
      borderRadius: 30,
      paddingLeft: 10,
      marginTop: 30
    },
    forgotPass: {
      marginTop: 30,
      color: 'gray',
      fontWeight: '400',
    }
  });

  export default Login1Styles;
  