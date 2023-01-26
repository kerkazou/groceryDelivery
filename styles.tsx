import { StyleSheet } from 'react-native';

const color = {
    white: '#fff',
    black: '#000',
    color1: '#FED049',
};

const styles = StyleSheet.create({
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
        flex: 1,
    },
    container: {
        backgroundColor: color.color1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
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
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    loginApiBtn: {
        width: 40,
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
        textAlign: 'center',
        padding: 10,
    },
    footerbtn: {
        textDecorationLine: 'underline',
    },
});

export default styles;