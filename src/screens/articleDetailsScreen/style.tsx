import { StyleSheet } from "react-native";
import { colors } from "../../utils/theme";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.primaryColor
    },
    image: {
        flex:1,
        height: 300,
        borderRadius: 30,
    },
    imageContainer: {
        flexDirection: 'row',
        flex: 1,
    },
})