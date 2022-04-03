import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        padding: 18,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 200,
        marginEnd: 20,
    },
    imageContainer: {
        flex: 1,
        marginEnd: 10
    },
    infoContainer: {
        flex: 2
    },
    titleText: {
        fontSize: 20,
        fontWeight: '400',
    },
    descriptionText: {
        marginTop: 6,
        fontSize: 14,
    }
})