import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e2e2e',
    },

    boxTop: {
        height: Dimensions.get('window').height / 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxMid: {
        width: '100%',
        paddingHorizontal: 37,
        paddingBottom: 50,
        paddingTop: 30
    },

    boxBottom: {
        paddingTop: 10,
        flex: 1,
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
    },

    logo: {
        width: 80,
        height: 80
    },

    text: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 37,
        color: '#8e007e',
    },

    titleInput: {
        marginLeft: 5,
        color: '#8e007e',
        marginTop: 20, 
    },

    boxInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'gray',
        borderColor: 'white',
    },

    input: {
        height: '100%',
        width: '90%'
    },

    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#8e007e',
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    textButton: {
        fontSize: 16,
        color: '#ffff',
        fontWeight: 'bold',
    },
    
    textBottom: {
        paddingTop: 40,
        fontSize: 18,
        color: '#8e007e',
    }

})