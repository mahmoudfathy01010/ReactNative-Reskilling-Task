import { ScrollView, Text, View } from "react-native";
import React from "react"
import { useAppSelector } from "../../hooks";
import { styles } from "../articleDetailsScreen/style";
import { ImagWithPlaceHolder } from "../../components/placeHolderImage/PlaceHolderImage";
import   Moment  from "moment";
import { useTheme } from "@react-navigation/native";

export const ArticleDetailsScreen = () => {
    const article = useAppSelector((state) => state.articleReducer.article);
    Moment.locale('en');
    const{colors} = useTheme();

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
            <Text style={[styles.titleText,{color:colors.primary}]}>{articleTitle}</Text>
            <View style={styles.metaContainer}>
            <Text style={[styles.autherText,{color:colors.notification}]}>{"By: "+article.source.name}</Text>
            <Text style={[styles.dateText,{color:colors.text}]}>{"Date: "+ Moment(article.publishedAt).format('MMMM Do YYYY') }</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.headerStyle,{color:colors.primary}]}>Descripion:</Text>
                <Text style={[styles.descriptionText,{color:colors.text}]}>{articleDesciption}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={[styles.headerStyle,{color:colors.primary}]}>Content:</Text>
                <Text style={[styles.contentText,{color:colors.text}]}>{articleContent}</Text>
            </View>
        </View>
        </ScrollView>
    </View>
}

export const ARTICLE_DETAILS_SCREEN = "ArticleDetails";