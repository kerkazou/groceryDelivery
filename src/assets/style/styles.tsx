import { StyleSheet } from 'react-native';
import color from './colors';

const styles = StyleSheet.create({
    auth: {
        backgroundColor: color.color1,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    authHomeText: {
        fontSize: 28,
        color: color.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    authHomeBtn: {
        width: 180,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.black,
        color: color.color1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
    },



    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
    },
    homeText: {
        fontSize: 24,
        color: color.black,
    },
    homeBtn: {
        width: 180,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.black,
        color: color.color1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
    },
    hreder: {
        // flex: 1,
        width: '50%',
    },
    headerMenu: {
        width: 100,
        textAlign: 'center',
        padding: 3,
        marginTop: 5,
        borderRadius: 8,
        color: color.black,
        fontWeight: 'bold',
        backgroundColor: color.white,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
    },
    container: {
        backgroundColor: color.color1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    login: {
        width: '100%',
        flex: 2,
        justifyContent: 'space-evenly',
        padding: 10,
        alignItems: 'center',
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    register: {
        width: '100%',
        flex: 2,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    greeting: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: color.color1,
        borderBottomColor: color.color1,
        borderBottomWidth: 5,
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
        backgroundColor: '#FED049',
        borderRadius: 50,
    },
    input: {
        width: '80%',
        height: 50,
        fontSize: 18,
        borderBottomColor: color.color1,
        borderBottomWidth: 5,
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
        backgroundColor: color.color1,
        color: color.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    footerbtn: {
        textDecorationLine: 'underline',
    },

    menu: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 20,
    },
});

export default styles;