import { StyleSheet } from "react-native";
import { colors } from "../../../utils/theme";

export const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        padding: 18,
        backgroundColor: colors.accentColor
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
        color: colors.white70
    },
    descriptionText: {
        marginTop: 6,
        fontSize: 14,
        color: colors.white
    }
})