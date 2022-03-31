/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { HomeScreen } from './src/screens/HomeScreen';
import { store } from './src/store/redux/store';

const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
      <HomeScreen></HomeScreen>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
