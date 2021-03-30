import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0,
        color: "#ffffff",
        textAlign: 'center',
    },
    containerBtnStyle: {
        justifyContent: 'center',
        width: '90%',
        height: 60,
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'black',
        marginRight: 10
    },
    inputContainer: {
        height: 100
    },
    dateTextStyle: {
        paddingLeft: 10,

    },
    dateCont: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    },
    saveBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 30,
        paddingLeft: 10
    }
});
