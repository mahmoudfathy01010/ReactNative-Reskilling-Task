import { NavigatorScreenParams } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Tabs } from './src/screens/tabs/Tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppTheme } from './src/hooks';
import { setTheme } from './src/store/redux/theme.slice';
import { colors, DARK, LIGHT, THEME_KEY } from './src/utils/theme';
import { LANG_KEY } from './src/utils/lang';
import { setLang } from './src/store/redux/lang-slice';

export type RootStackParamList = {
  HomeScreenStack: NavigatorScreenParams<TabsParamList>
  Settings: any
};

export type TabsParamList = {
  Home: undefined
  MovieDetails: { id: string }
}

const App = () => {
  const dispatch = useAppDispatch();
  const appTheme = useAppTheme();
  const getAppConfig = useCallback(async () => {
    try {
      const theme = await AsyncStorage.getItem(THEME_KEY);
      if (theme != null) {
        dispatch(setTheme(theme))
      }
      const lang = await AsyncStorage.getItem(LANG_KEY);
      if (lang != null) {
        dispatch(setLang(lang))
      }
      console.log(theme)
      console.log(lang)


    }
    catch (err) {
      console.log(err)
    }
  }, [dispatch])
  useEffect(() => {
    getAppConfig();
  }, [getAppConfig])
  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true}
        barStyle={appTheme.mode == DARK ? "light-content" : "dark-content"}
        showHideTransition={'slide'}
        backgroundColor={appTheme.theme.primary}
        hidden={false}
      />
      <Tabs></Tabs>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
