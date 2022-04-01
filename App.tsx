import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { HomeScreen, HOME_SCREEN_TAG } from './src/screens/homeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticleDetailsScreen, ARTICLE_DETAILS_SCREEN } from './src/screens/articleDetailsScreen/ArticleDetailsScreen';
import { colors } from './src/utils/theme';
import { useAppSelector } from './src/hooks';

export type RootStackParamList = {
  Home:any
  ArticleDetails:any
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const theme = useAppSelector((state) => state.themeReducer.theme);
  return (
      <NavigationContainer theme={theme}>
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
