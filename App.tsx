import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Tabs } from './src/screens/tabs/Tabs';

export type RootStackParamList = {
  HomeScreenStack:NavigatorScreenParams<TabsParamList>
  Settings:any
};

export type TabsParamList = {
  Home: undefined
  ArticleDetails: {id: string}
}

const App = () => {
  return (
      <Tabs></Tabs>
  );
};

const styles = StyleSheet.create({

});

export default App;
