import { Text, View, Switch, TextInput, } from "react-native"
import React, { useState } from "react"
import { useAppDispatch, useAppLang, useAppTheme } from "../../hooks";
import { setTheme } from "../../store/redux/theme.slice";
import { styles } from "./style";
import ModalSelector from "react-native-modal-selector"

export const SettingsScreen = () => {
    const theme = useAppTheme();
    const lang = useAppLang();
    const dispatch = useAppDispatch();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        if (isEnabled) {
            dispatch(setTheme("light"))
        }
        else {
            dispatch(setTheme("dark"))
        }
        setIsEnabled(previousState => !previousState);
    }
    let index = 0;
        const data = [
            { key: index++, section: true, label: 'Languages' },
            { key: index++, label: 'English' },
            { key: index++, label: 'Deutsch' },
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
        ];
    return <View style={[styles.mainContainer, { backgroundColor: theme.primary }]}>
        <View style={styles.themeContainer}>
            <Text style={[styles.themeText, { color: theme.textPrimart }]}>{lang.setDarkMode}</Text>

            <Switch
                trackColor={{ false: theme.textSecondary, true: theme.secondary }}
                thumbColor={isEnabled ? theme.textPrimart : theme.textPrimart}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

        <ModalSelector
            optionContainerStyle={styles.languagesContainer}
            cancelStyle={styles.languagesContainer}
            cancelTextStyle={styles.languagesCancelText}
            optionTextStyle={styles.languagesItemText}
            sectionTextStyle={styles.languagesHeaderText}
            selectedKey={1}
            selectedItemTextStyle= {styles.languagesSelectedItemText}
            data={data}
            onChange={(option) => {} }>
                <TextInput
                        style={styles.selectLangButtonContainer}
                        editable={false}
                        placeholder="Select something yummy!"
                        value={"Hal Wala"} />
            </ModalSelector>

    </View>
}
