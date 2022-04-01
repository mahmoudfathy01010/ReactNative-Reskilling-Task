import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        flex: 1,
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
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
        fontSize: 18,
    },
    noDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noDataText: {
    },
})