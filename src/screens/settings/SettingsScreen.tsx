import { Text, View, Switch } from "react-native"
import React, { useState } from "react"
import { useAppDispatch, useAppTheme } from "../../hooks";
import { setTheme } from "../../store/redux/theme.slice";
import { styles } from "./style";

export const SettingsScreen = () => {
    const theme = useAppTheme();
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
        <Text style ={[styles.themeText, {color:theme.textPrimart}]}>Set theme:</Text>

        <Switch
            trackColor={{ false: theme.textSecondary, true: theme.textSecondary }}
            thumbColor={isEnabled ? theme.textPrimart : theme.textPrimart}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>
    </View>
}
