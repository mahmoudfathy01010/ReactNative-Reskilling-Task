import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
    },
    image: {
        flex:1,
        height: 300,
        borderRadius: 30,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    titleText: {
        fontSize: 20,
        fontWeight: '800',
    },
    infoContainer:{
        marginTop: 20,
    },
    descriptionText: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '300',
    },
    headerStyle: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '600',
    },
    descriptionContainer: {
        marginTop: 10,
    },
    autherText: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '600',
    },
    metaContainer:{
    },

    dateText: {
        marginTop: 6,
        fontSize: 12,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
    },
    errorButtonContainer: {
        marginTop: 10,
        width: 100,
        alignItems: "center",
    },
    noDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})