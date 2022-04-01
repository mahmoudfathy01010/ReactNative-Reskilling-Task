import { Text, View } from "react-native";
import React from "react"
import { useAppSelector } from "../../hooks";
import { styles } from "../style";

export const ArticleDetailsScreen = ()=>{
    const article = useAppSelector((state) => state.articleReducer.article);

    return <View style = {styles.mainContainer}>
        <Text>
            {article.content}
        </Text>
    </View>
}

export const ARTICLE_DETAILS_SCREEN = "ArticleDetails";