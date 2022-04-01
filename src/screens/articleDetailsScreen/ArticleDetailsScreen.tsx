import { Text, View } from "react-native";
import React from "react"
import { useAppSelector } from "../../hooks";
import { styles } from "../articleDetailsScreen/style";
import { ImagWithPlaceHolder } from "../../components/placeHolderImage/PlaceHolderImage";

export const ArticleDetailsScreen = () => {
    const article = useAppSelector((state) => state.articleReducer.article);

    return <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
            <ImagWithPlaceHolder imageUrl={article.urlToImage} style={styles.image}></ImagWithPlaceHolder>
        </View>
    </View>
}

export const ARTICLE_DETAILS_SCREEN = "ArticleDetails";