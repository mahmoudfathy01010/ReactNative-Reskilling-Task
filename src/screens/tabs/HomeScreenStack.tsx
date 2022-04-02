import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArticleDetailsScreen } from "../articleDetailsScreen/ArticleDetailsScreen";
import { HomeScreen } from "../homeScreen/HomeScreen";
import React from "react";
import { useAppLang, useAppTheme } from "../../hooks";

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
    const theme = useAppTheme();
    const {languageValues} = useAppLang();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                options={
                    {
                        headerStyle: {
                            backgroundColor: theme.primary,
                        },
                        headerTitleStyle: {
                            color: theme.textPrimart
                        }
                        ,
                        headerTitle:languageValues.home,
                    }
                }
                name="Home" component={HomeScreen} />
            <HomeStack.Screen options={
                {
                    headerBackTitleStyle: {

                    },
                    headerStyle: {
                        backgroundColor: theme.primary,
                    },
                    headerTitleStyle: {
                        color: theme.textPrimart
                    },
                    headerTintColor: theme.textPrimart,
                    headerTitle:languageValues.details
                }
            } name="ArticleDetails" component={ArticleDetailsScreen} />
        </HomeStack.Navigator>
    );
}