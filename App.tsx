import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { HomeScreen, HOME_SCREEN_TAG } from './src/screens/homeScreen/HomeScreen';
import { store } from './src/store/redux/store';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticleDetailsScreen, ARTICLE_DETAILS_SCREEN } from './src/screens/articleDetailsScreen/ArticleDetailsScreen';

export type RootStackParamList = {
  Home:any
  ArticleDetails:any
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    background: 'blue'
  },
};
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator>
          <Stack.Screen name={HOME_SCREEN_TAG} component={HomeScreen} />
          <Stack.Screen name={ARTICLE_DETAILS_SCREEN} component={ArticleDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
