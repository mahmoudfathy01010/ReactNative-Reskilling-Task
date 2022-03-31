import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { HomeScreen } from './src/screens/HomeScreen';
import { store } from './src/store/redux/store';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <NavigationContainer>
      <HomeScreen></HomeScreen>
      </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
