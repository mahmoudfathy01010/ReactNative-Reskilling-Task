import { Text, View, Switch, } from "react-native"
import React, { useState } from "react"
import { useAppDispatch, useAppLang, useAppTheme } from "../../hooks";
import { setTheme } from "../../store/redux/theme.slice";
import { styles } from "./style";

export const SettingsScreen = () => {
    const theme = useAppTheme();
    const lang = useAppLang();
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
    return <View style={[styles.mainContainer, {backgroundColor: theme.primary}]}>
        <View style={styles.themeContainer}>
        <Text style ={[styles.themeText, {color:theme.textPrimart}]}>{lang.setDarkMode}</Text>

        <Switch
            trackColor={{ false: theme.textSecondary, true: theme.secondary }}
            thumbColor={isEnabled ? theme.textPrimart : theme.textPrimart}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>
    </View>
}
