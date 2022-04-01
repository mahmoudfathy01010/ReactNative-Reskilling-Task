import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArticleDetailsScreen } from "../articleDetailsScreen/ArticleDetailsScreen";
import { HomeScreen } from "../homeScreen/HomeScreen";
import React from "react";
import { useAppTheme } from "../../hooks";

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
    const theme = useAppTheme();

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
                    }
                }
                name="Home" component={HomeScreen} />
            <HomeStack.Screen options={
                {
                    headerStyle: {
                        backgroundColor: theme.primary,
                    },
                    headerTitleStyle: {
                        color: theme.textPrimart
                    }
                }
            } name="ArticleDetails" component={ArticleDetailsScreen} />
        </HomeStack.Navigator>
    );
}