import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Tabs } from './src/screens/tabs/Tabs';

export type RootStackParamList = {
  Home:any
  ArticleDetails:any
};

// const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <Tabs></Tabs>
  );
};

const styles = StyleSheet.create({

});

export default App;
