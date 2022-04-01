import { StyleSheet } from "react-native";
import { colors } from "../../utils/theme";

export const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        flex: 1,
    },
    themeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    themeText: {
        fontSize: 20
    },
    selectLangButton: {
        fontSize: 20,
        color: colors.white
    },
    selectLangButtonContainer: {
        marginTop: 20,
        color: colors.white,
        borderColor: colors.white,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
    },
    languagesContainer: {
        backgroundColor: colors.primaryColor,
    },
    languagesHeaderText: {
        color: colors.white,
        fontWeight: '700'
    },
    languagesItemText: {
        color: colors.white,
    },
    languagesCancelText: {
        color: colors.accentColor,
    },
    languagesSelectedItemText: {
        color: colors.accentColor,
        fontWeight:'bold'
    }
}) 