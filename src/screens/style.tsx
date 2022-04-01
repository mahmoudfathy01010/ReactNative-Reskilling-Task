import { StyleSheet } from "react-native";
import { colors } from "../utils/theme";

export const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        backgroundColor: colors.primaryColor,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    errorContainer:{
        alignItems:"center",
    },
    errorText:{
        color: colors.white
    },
    errorButtonContainer:{
        marginTop:10,
        width: 100,
        alignItems:"center",
    }
    
})