import { Text, View } from "react-native";
import React from "react"
import { useAppSelector } from "../../hooks";

export const ArticleDetailsScreen = ()=>{
    const article = useAppSelector((state) => state.articleReducer.article);

    return <View>
        <Text>
            {article.description}
        </Text>
    </View>
}

export const ARTICLE_DETAILS_SCREEN = "ArticleDetails";