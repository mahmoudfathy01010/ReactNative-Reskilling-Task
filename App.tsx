import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { HomeScreen, HOME_SCREEN_TAG } from './src/screens/homeScreen/HomeScreen';
import { store } from './src/store/redux/store';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={HOME_SCREEN_TAG} component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
