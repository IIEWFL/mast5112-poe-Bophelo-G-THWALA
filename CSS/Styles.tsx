import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 32,
    },

    titleText: {
        textAlign: 'center',
        fontSize: 24,
    },

    nextPageButton: {
        backgroundColor: '#492267',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#1d2d57',
        height: 40,
        alignItems: 'center',
        borderRadius: 0,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 25,
        width: 473,
        textAlign: 'center',
        alignSelf: 'center',
    },

    nextPageText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },

    menuTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    appetizersText: {
        fontSize: 24,
    },

    /* Menu */
    itemBackground: {
        padding: 20,
        borderBlockColor: '000000',
        borderRadius: 10,
        borderWidth: 2,
    },

    itemImage: {
        borderRadius: 25,
        padding: 0,
        borderBlockColor: '000000',
        marginHorizontal: 5,
        marginVertical: 8,
        resizeMode: 'contain',
    },

    itemText: {
        position: 'absolute',
        top: -120,
        left: 120,
        fontSize: 16,
    },

    /* Home Page */
    orderTitle: {
        fontSize: 32,
        textAlign: 'center'
    },

    itemsOrdered: {
        fontSize: 32,
    },

    coursesTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    arrayBackground: {
        padding: 10,
        backgroundColor: '#B2BEB5'
    },

    itemsArray: {
        fontSize: 20,
    },

    averageItemsText: {
        fontSize: 25
    },

    averageAppetizersText: {
        fontSize: 25
    },

    averageMainText: {
        fontSize: 25
    },

    averageDessertText: {
        fontSize: 25
    },

    averageBeveragesText: {
        fontSize: 25
    },

    addItemButton: {
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: '#000000',
        height: 40,
        alignItems: 'center',
        borderRadius: 0,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 25,
        width: 473,
        textAlign: 'center',
        alignSelf: 'center',
    },

    addItemsText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',

    },

    filterButton: {
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: '#000000',
        height: 40,
        alignItems: 'center',
        borderRadius: 0,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 25,
        width: 473,
        textAlign: 'center',
        alignSelf: 'center',
    },

    filterText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',

    },

    viewMenuButton: {
        backgroundColor: 'purple',
        borderWidth: 2,
        borderColor: '#000000',
        height: 40,
        alignItems: 'center',
        borderRadius: 0,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 25,
        width: 473,
        textAlign: 'center',
        alignSelf: 'center',
    },

    viewMenuText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',

    },

    removeItemButton: {
        backgroundColor: '#FF0000', // Red background
        padding: 10,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        borderColor: '#000000',
        borderWidth: 3
    },
    removeItemText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    



    /* Add Items */

    addItemsTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },

    inputs: {
        flex: 1,
        color: '#1d2d57',
        marginHorizontal: 35,
        padding: 10,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#000000',
    },

    pickerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center'
    },

    pickerText: {
        fontSize: 20
    },

    picker: {
        height: 50,
        width: 150,
        borderColor: '#000000',
    },

    addButton: {
        backgroundColor: '#808080',
        borderWidth: 2,
        borderColor: '#000000',
        height: 40,
        alignItems: 'center',
        borderRadius: 0,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 25,
        width: 473,
        textAlign: 'center',
        alignSelf: 'center',
    },

    addButtonText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    /* */

    /* Filter Items */

    filterTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },

    courseTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },

    pickerView: {
        marginVertical: 20,
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
    },
    picker: {
        height: 50,
        width: "100%",
    },
    pickerText: {
        fontSize: 16,
        marginBottom: 10,
        color: "#333",
    },
    toggleButton: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#007BFF",
        borderRadius: 5,
        alignItems: "center",
    },
    toggleButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    filteredItem: {
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    itemDescription: {
        fontSize: 14,
        color: "#555",
    },
    itemPrice: {
        fontSize: 14,
        color: "#333",
    },
    noItemsText: {
        fontSize: 18,
        color: "#000000",
        textAlign: "center",
        marginTop: 10,
    },

    returnButton: {
        backgroundColor: 'purple',
        borderWidth: 2,
        borderColor: '#000000',
        height: 40,
        alignItems: 'center',
        borderRadius: 0,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 25,
        width: 473,
        textAlign: 'center',
        alignSelf: 'center',
    },

    returnText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',

    },

    
    
    /* */

});

export default styles;