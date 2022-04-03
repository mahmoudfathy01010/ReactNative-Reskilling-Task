import { Text, View, Switch, TextInput, StyleSheet, } from "react-native"
import React, { useState } from "react"
import { useAppDispatch, useAppLang, useAppTheme } from "../../hooks";
import { setTheme } from "../../store/redux/theme.slice";
import { styles } from "./style";
import ModalSelector from "react-native-modal-selector"
import { setLang } from "../../store/redux/lang-slice";
import { DEUTSCH, ENGLISH, languages, LANG_KEY } from "../../utils/lang";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DARK, LIGHT, THEME_KEY } from "../../utils/theme";


export const SettingsScreen = () => {
    const {theme,mode} = useAppTheme();
    const { languageValues, languageCode } = useAppLang();
    const dispatch = useAppDispatch();
    let isDark = mode === DARK
    const [isEnabled, setIsEnabled] = useState(isDark);
    const toggleSwitch = async () => {
        if (!isEnabled) {
            dispatch(setTheme(DARK))
            await AsyncStorage.setItem(THEME_KEY, DARK)
        }
        else {
            dispatch(setTheme(LIGHT))
            await AsyncStorage.setItem(THEME_KEY, LIGHT)
        }
        setIsEnabled(previousState => !previousState);
    }

    const modalLanguageStyle = StyleSheet.create({
        languagesContainer: {
            backgroundColor: theme.primary,
        },
        languagesHeaderText: {
            color: theme.textPrimary,
            fontWeight: '700'
        },
        languagesItemText: {
            color: theme.textPrimary,
        },
        languagesCancelText: {
            color: theme.accent,
        },
        languagesSelectedItemText: {
            color: theme.accent,
            fontWeight: 'bold'
        },
        selectLangButton: {
            fontSize: 20,
            color: theme.textPrimary
        },
        selectLangButtonContainer: {
            marginTop: 20,
            color: theme.textPrimary,
            borderColor: theme.textPrimary,
            borderWidth: 1,
            padding: 10,
            borderRadius: 20
        },
    })
    return <View style={[styles.mainContainer, { backgroundColor: theme.primary }]}>
        <View style={styles.themeContainer}>
            <Text style={[styles.themeText, { color: theme.textPrimary }]}>{languageValues.setDarkMode}</Text>

            <Switch
                trackColor={{ false: theme.textSecondary, true: theme.secondary }}
                thumbColor={isEnabled ? theme.textPrimary : theme.primary}
                ios_backgroundColor={isEnabled ? theme.textSecondary : theme.textSecondary}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

        <ModalSelector
            optionContainerStyle={modalLanguageStyle.languagesContainer}
            cancelStyle={modalLanguageStyle.languagesContainer}
            cancelTextStyle={modalLanguageStyle.languagesCancelText}
            optionTextStyle={modalLanguageStyle.languagesItemText}
            sectionTextStyle={modalLanguageStyle.languagesHeaderText}
            selectedKey={languageCode}
            selectedItemTextStyle={modalLanguageStyle.languagesSelectedItemText}
            data={languages}
            onModalClose={async (option) => {
                if (option.key == 1) {
                    dispatch(setLang(ENGLISH))
                    await AsyncStorage.setItem(LANG_KEY, ENGLISH)

                }
                else if (option.key == 2) {
                    dispatch(setLang(DEUTSCH))
                    await AsyncStorage.setItem(LANG_KEY, DEUTSCH)

                }
            }}
        >
            <TextInput
                style={modalLanguageStyle.selectLangButtonContainer}
                editable={false}
                value={languages.find((lang) => lang.key == languageCode)?.label} />
        </ModalSelector>

    </View>
}
