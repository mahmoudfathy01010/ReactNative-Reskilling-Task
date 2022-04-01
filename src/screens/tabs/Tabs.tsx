import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../homeScreen/HomeScreen";
import { SettingsScreen } from "../settings/SettingsScreen";
import {StyleSheet, View} from "react-native"
import { colors } from "../../utils/theme";
import { useAppSelector } from "../../hooks";
import React from "react";

const Tab = createBottomTabNavigator();
export const Tabs = () => {
    const theme = useAppSelector((state) => state.themeReducer.theme);

    return <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <View style = {styles.icon}></View>;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    icon:{
        width : 20,
        height: 20,
        backgroundColor: colors.secondaryColor
    }
})