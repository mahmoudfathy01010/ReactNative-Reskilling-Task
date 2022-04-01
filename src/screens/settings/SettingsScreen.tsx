import { Text, View, Switch } from "react-native"
import React, { useState } from "react"
import { useAppDispatch } from "../../hooks";
import { setTheme } from "../../store/redux/theme.slice";
import { useTheme } from "@react-navigation/native";
import { styles } from "./style";

export const SettingsScreen = () => {
    const{colors} = useTheme();
    const dispatch = useAppDispatch(); 
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        if(isEnabled){
            dispatch(setTheme("light"))
        } 
        else{
            dispatch(setTheme("dark"))
        }
        setIsEnabled(previousState => !previousState);
     }
    return <View style={styles.mainContainer}>
        <View style={styles.themeContainer}>
        <Text style ={[styles.themeText, {color:colors.primary}]}>Set theme:</Text>

        <Switch
            trackColor={{ false: colors.text, true: colors.primary }}
            thumbColor={isEnabled ? colors.notification : colors.background}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>
    </View>
}
