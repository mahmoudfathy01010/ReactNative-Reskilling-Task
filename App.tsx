import { NavigatorScreenParams } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Tabs } from './src/screens/tabs/Tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from './src/hooks';
import { setTheme } from './src/store/redux/theme.slice';
import { THEME_KEY } from './src/utils/theme';
import { LANG_KEY } from './src/utils/lang';
import { setLang } from './src/store/redux/lang-slice';

export type RootStackParamList = {
  HomeScreenStack:NavigatorScreenParams<TabsParamList>
  Settings:any
};

export type TabsParamList = {
  Home: undefined
  MovieDetails: {id: string}
}

const App = () => {
  const dispatch = useAppDispatch();

   const getAppConfig = async()=> { 
     try{
       const theme = await AsyncStorage.getItem(THEME_KEY);
       if(theme!=null){
         dispatch(setTheme(theme))
       }
       const lang = await AsyncStorage.getItem(LANG_KEY);
       if(lang!=null){
         dispatch(setLang(lang))
       }
       console.log(theme)
       console.log(lang)


     }
     catch(err){
       console.log(err)
     }
   }
   useEffect(()=>{
     getAppConfig();
   },[getAppConfig])
  return (
      <Tabs></Tabs>
  );
};

const styles = StyleSheet.create({

});

export default App;
