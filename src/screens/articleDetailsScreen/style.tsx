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
    },
    titleText: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.white
    },
    infoContainer:{
        marginTop: 20,
    },
    descriptionText: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '300',
        color: colors.white
    },
    contentText: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '300',
        color: colors.white
    },
    headerStyle: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '600',
        color: colors.white
    },
    descriptionContainer: {
        marginTop: 10,
    },
    contentContainer: {
        marginTop: 10
    },
    autherText: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '600',
        color: colors.secondaryColor
    },
    metaContainer:{
        flexDirection: 'row',
        justifyContent:'space-between'
    }
})