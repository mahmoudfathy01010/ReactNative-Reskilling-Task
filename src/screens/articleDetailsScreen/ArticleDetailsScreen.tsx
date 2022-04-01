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
        <View style={styles.infoContainer}>
            <Text style={styles.titleText}>{article.title}</Text>
            <View style={styles.metaContainer}>
            <Text style={styles.autherText}>{"By: "+article.source.name}</Text>
            <Text style={styles.autherText}>{"Date: "+article.publishedAt}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.headerStyle}>Descripion:</Text>
                <Text style={styles.descriptionText}>{article.description}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.headerStyle}>Content:</Text>
                <Text style={styles.contentText}>{article.content}</Text>
            </View>
        </View>
    </View>
}

export const ARTICLE_DETAILS_SCREEN = "ArticleDetails";