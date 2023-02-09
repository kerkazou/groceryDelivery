import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    // Authentification
    auth: {
        flex: 1,
        backgroundColor: colors.color1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header: {
        height: '35%',
    },
    authHomeText: {
        fontSize: 30,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    authHomeBtn: {
        width: 180,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black,
        color: colors.color1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
    },
    authcontainer: {
        width: '100%',
        height: '65%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    authtexthead: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.color1,
        borderBottomColor: colors.color1,
        borderBottomWidth: 5,
    },
    authtextbody: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    loginApi: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    loginApiBtn: {
        width: 80,
        height: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        borderRadius: 50,
    },
    input: {
        width: '80%',
        height: 50,
        fontSize: 18,
        paddingHorizontal: 10,
        borderBottomColor: colors.black,
        borderBottomWidth: 8,
    },
    textForget: {
        color: '#000',
        fontSize: 16,
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.color1,
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    footerbtn: {
        textDecorationLine: 'underline',
    },
    // Menu for page products
    searchBar: {
        height: 60,
        paddingVertical: 5,
        paddingHorizontal: 15,
        margin: 5,
        backgroundColor: colors.white,
        shadowColor: colors.white,
        elevation: 10,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    searchBarInput: {
        width: '90%',
        fontSize: 18,
        borderBottomColor: colors.color1,
        borderColor: colors.color1,
        borderBottomWidth: 3,
    },
    menu: {
        height: 60,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: colors.white,
        elevation: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },








    // home: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     gap: 35,
    // },
    // homeText: {
    //     fontSize: 24,
    //     color: colors.black,
    // },
    // homeBtn: {
    //     width: 180,
    //     borderRadius: 25,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: colors.black,
    //     color: colors.color1,
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     padding: 12,
    // },
    // headerMenu: {
    //     width: 100,
    //     textAlign: 'center',
    //     padding: 3,
    //     marginTop: 5,
    //     borderRadius: 8,
    //     color: colors.black,
    //     fontWeight: 'bold',
    //     backgroundColor: colors.white,
    //     flexDirection: 'row',
    //     justifyContent: 'flex-end',
    //     alignSelf: 'stretch',
    // },
    // container: {
    //     backgroundColor: colors.color1,
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'space-evenly',
    // },
    // login: {
    //     width: '100%',
    //     flex: 2,
    //     justifyContent: 'space-evenly',
    //     padding: 10,
    //     alignItems: 'center',
    //     backgroundColor: colors.white,
    //     borderTopLeftRadius: 30,
    //     borderTopRightRadius: 30,
    // },
    // register: {
    //     width: '100%',
    //     flex: 2,
    //     justifyContent: 'space-between',
    //     padding: 10,
    //     alignItems: 'center',
    //     backgroundColor: colors.white,
    //     borderTopLeftRadius: 30,
    //     borderTopRightRadius: 30,
    // },
    // greeting: {
    //     fontSize: 25,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     color: colors.color1,
    //     borderBottomColor: colors.color1,
    //     borderBottomWidth: 5,
    // },
});

export default styles;