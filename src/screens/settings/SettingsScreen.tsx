import { Text, View, Switch, TextInput, } from "react-native"
import React, { useState } from "react"
import { useAppDispatch, useAppLang, useAppTheme } from "../../hooks";
import { setTheme } from "../../store/redux/theme.slice";
import { styles } from "./style";
import ModalSelector from "react-native-modal-selector"
import { setLang } from "../../store/redux/lang-slice";
import { languages, LanguagesEnum } from "../../utils/lang";

export const SettingsScreen = () => {
    const theme = useAppTheme();
    const { languageValues, languageCode } = useAppLang();
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

    return <View style={[styles.mainContainer, { backgroundColor: theme.primary }]}>
        <View style={styles.themeContainer}>
            <Text style={[styles.themeText, { color: theme.textPrimart }]}>{languageValues.setDarkMode}</Text>

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
            selectedKey={languageCode}
            selectedItemTextStyle={styles.languagesSelectedItemText}
            data={languages}
            onModalClose={(option) => {
                if (option.key == 1) {
                    dispatch(setLang(LanguagesEnum.ENGLISH))
                }
                else if (option.key == 2) {
                    dispatch(setLang(LanguagesEnum.DEUTSCH))
                }
            }}
        >
            <TextInput
                style={styles.selectLangButtonContainer}
                editable={false}
                placeholder="Select something yummy!"
                value={languages.find((lang) => lang.key == languageCode)?.label} />
        </ModalSelector>

    </View>
}
