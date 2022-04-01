import { ScrollView, Text, View } from "react-native";
import React from "react"
import { useAppSelector } from "../../hooks";
import { styles } from "../articleDetailsScreen/style";
import { ImagWithPlaceHolder } from "../../components/placeHolderImage/PlaceHolderImage";
import   Moment  from "moment";

export const ArticleDetailsScreen = () => {
    const article = useAppSelector((state) => state.articleReducer.article);
    Moment.locale('en');

    let articleTitle = article.title;
    let articleDesciption = article.description;
    let articleContent = article.description;

    if(article.title === "" || article.title === null){
        articleTitle = "Soryy, There is no title Data"
    }
    if(article.description === "" || article.description === null){
        articleDesciption = "Sorry, There is no Description Data"
    }
    if(article.content === "" || article.content === null){
        articleContent = "Sorry, There is no Content Data"
    }

    return <View style={styles.mainContainer}>
        <ScrollView>
        <View style={styles.imageContainer}>
            <ImagWithPlaceHolder imageUrl={article.urlToImage} style={styles.image}></ImagWithPlaceHolder>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.titleText}>{articleTitle}</Text>
            <View style={styles.metaContainer}>
            <Text style={styles.autherText}>{"By: "+article.source.name}</Text>
            <Text style={styles.dateText}>{"Date: "+ Moment(article.publishedAt).format('MMMM Do YYYY') }</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.headerStyle}>Descripion:</Text>
                <Text style={styles.descriptionText}>{articleDesciption}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.headerStyle}>Content:</Text>
                <Text style={styles.contentText}>{articleContent}</Text>
            </View>
        </View>
        </ScrollView>
    </View>
}

export const ARTICLE_DETAILS_SCREEN = "ArticleDetails";