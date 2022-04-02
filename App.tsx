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

export type RootStackParamList = {
  HomeScreenStack:NavigatorScreenParams<TabsParamList>
  Settings:any
};

export type TabsParamList = {
  Home: undefined
  ArticleDetails: {id: string}
}

const App = () => {
  const dispatch = useAppDispatch();

   const getAppConfig = async()=> { 
     try{
       const theme = await AsyncStorage.getItem(THEME_KEY);
       if(theme!=null){
         dispatch(setTheme(theme))
       }
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
