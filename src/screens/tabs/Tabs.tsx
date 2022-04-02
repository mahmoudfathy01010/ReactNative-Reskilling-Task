import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../homeScreen/HomeScreen";
import { SettingsScreen } from "../settings/SettingsScreen";
import { StyleSheet, View } from "react-native"
import { colors } from "../../utils/theme";
import { useAppLang, useAppSelector } from "../../hooks";
import React from "react";
import { HomeStackScreen } from "./HomeScreenStack";



const Tab = createBottomTabNavigator();
export const Tabs = () => {
  const theme = useAppSelector((state) => state.themeReducer.theme);
  const { languageValues } = useAppLang();
  return <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <View style={styles.icon}></View>;
        },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textPrimart,
        tabBarStyle: {
          backgroundColor: theme.primary,
        },
        title: route.name == "HomeScreenStack"? languageValues.home : languageValues.settings

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
            color: theme.textPrimart
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