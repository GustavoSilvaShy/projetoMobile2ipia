import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87cefa',
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        


    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        paddingHorizontal: 37,     


    },
    boxBottom: {

        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',


    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor:'lightgray',
        borderColor: "lightgray",
    
    },
           titleInput: {
        marginLeft: 5,
        color: 'gray',
        marginTop: 20,
    },
       text: {
        fontWeight: 'bold',
        marginTop: 40,
        color: 'black',
        fontSize: 18,
    },
    input: {
        height: '100%',
        width: '90%',
    },
    



})