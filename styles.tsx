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
    container: {
        backgroundColor: color.color1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
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
    login: {
        width: '100%',
        height: 100,
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        gap: 30,
    },
    register: {
        width: '100%',
        height: 100,
        flex: 2,
        padding: 10,
        alignItems: 'center',
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        rowGap: 30,
    },
    greeting: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: color.color1,
        borderBottomColor: color.color1,
        borderBottomWidth: 5,
    },
    input: {
        width: '80%',
        height: 50,
        fontSize: 20,
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
        padding: 12,
    },
});

export default styles;