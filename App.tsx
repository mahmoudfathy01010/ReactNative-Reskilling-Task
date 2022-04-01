import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { HomeScreen, HOME_SCREEN_TAG } from './src/screens/homeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticleDetailsScreen, ARTICLE_DETAILS_SCREEN } from './src/screens/articleDetailsScreen/ArticleDetailsScreen';
import { colors } from './src/utils/theme';

export type RootStackParamList = {
  Home:any
  ArticleDetails:any
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  dark: false,
  colors: {
    primary: colors.white,
    background: colors.primaryColor,
    card: colors.accentColor,
    text: colors.white70,
    border: 'rgb(199, 199, 204)',
    notification: colors.secondaryColor,
  },
};
const App = () => {
  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name={HOME_SCREEN_TAG} component={HomeScreen} />
          <Stack.Screen name={ARTICLE_DETAILS_SCREEN} component={ArticleDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
