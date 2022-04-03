import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { SettingsScreen } from "../settings/SettingsScreen";
import { StyleSheet } from "react-native"
import { colors } from "../../utils/theme";
import { useAppLang, useAppSelector } from "../../hooks";
import React from "react";
import { HomeStackScreen } from "./HomeScreenStack";
import { RootStackParamList } from "../../../App";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
export const Tabs = () => {

  const config = {
    screens: {
      HomeScreenStack: {
        screens: {
          MovieDetails: {
            path: "details/:id",
            parse:{
              id:(id:string)=> ''+id
            }
          }
        },
      },
      Settings: {
        path: "settings"
      }
    },
  };
  
  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['https://newsapp.com', 'newsapp://app'],
    config,
  };

  const theme = useAppSelector((state) => state.themeReducer.theme);
  const { languageValues } = useAppLang();
  return <NavigationContainer linking={linking}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused}) => {
          const color = focused? colors.accentColor : theme.textPrimary;
          if(route.name == "HomeScreenStack")
          {
          return <Ionicons name="home-outline" size={30} color={color}/>;
          }
          else if(route.name == "Settings"){
            return <Ionicons name="settings-outline" size={30} color={color} />;
          }
        },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textPrimary,
        tabBarStyle: {
          backgroundColor: theme.primary,
        },
        title: route.name == "HomeScreenStack"? languageValues.news : languageValues.settings

      })}
    >
      <Tab.Screen options={{
        headerShown: false,

      }} name="HomeScreenStack" component={HomeStackScreen} />
      <Tab.Screen options={
        {
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTitleStyle: {
            color: theme.textPrimary
          },
          headerTitle: languageValues.settings
        }
      } name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    backgroundColor: colors.secondaryColor
  }
})