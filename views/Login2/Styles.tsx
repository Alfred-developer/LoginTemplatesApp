import { StyleSheet } from "react-native";

const login2Styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 35,
        backgroundColor: '#e0e0e0'
    },
    backgroundImg: {
        width: '100%',
        height: '100%', 
        opacity: 0.7, 
        position: 'absolute'
    },
    imgLogo: {
        width: 200, 
        height: 200 
    },
    hiTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        marginBottom: 10
    },
    textSubtitle: {
        fontSize: 22,
        fontWeight: '500',
        color: 'gray',
        textAlign: 'center'
    },
    inputContainer: {
        width: '100%',
        marginTop: 40,
        backgroundColor: '#FFF',
        borderRadius: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 60,
        paddingLeft: 15,
        alignContent: 'center',
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    contentBtn: {
        paddingTop: 30,
        width: 250,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textBtn: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
    },
    btnLogout: {
        padding: 15,
        borderRadius: 30
    },
    forgotPass: {
        marginTop: 30,
        color: 'gray',
        fontWeight: '400',
      }
});

export default login2Styles;
