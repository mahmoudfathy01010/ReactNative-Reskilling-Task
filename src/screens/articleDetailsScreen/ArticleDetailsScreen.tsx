import { ScrollView, Text, View } from "react-native";
import React from "react"
import { useAppLang, useAppSelector, useAppTheme } from "../../hooks";
import { styles } from "../articleDetailsScreen/style";
import { ImagWithPlaceHolder } from "../../components/placeHolderImage/PlaceHolderImage";
import   Moment  from "moment";

export const ArticleDetailsScreen = () => {
    const theme = useAppTheme();
    const {languageValues} = useAppLang();
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

    return <View style={[styles.mainContainer, {backgroundColor: theme.primary}]}>
        <ScrollView>
        <View style={styles.imageContainer}>
            <ImagWithPlaceHolder imageUrl={article.urlToImage} style={styles.image}></ImagWithPlaceHolder>
        </View>
        <View style={styles.infoContainer}>
            <Text style={[styles.titleText,{color:theme.textPrimart}]}>{articleTitle}</Text>
            <View style={styles.metaContainer}>
            <Text style={[styles.autherText,{color:theme.accent}]}>{ languageValues.by+": "+article.source.name}</Text>
            <Text style={[styles.dateText,{color:theme.textSecondary}]}>{languageValues.date+": "+ Moment(article.publishedAt).format('MMMM Do YYYY') }</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.headerStyle,{color:theme.textSecondary}]}>{languageValues.description}</Text>
                <Text style={[styles.descriptionText,{color:theme.textSecondary}]}>{articleDesciption}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={[styles.headerStyle,{color:theme.textPrimart}]}>{languageValues.content+":"}</Text>
                <Text style={[styles.contentText,{color:theme.textSecondary}]}>{articleContent}</Text>
            </View>
        </View>
        </ScrollView>
    </View>
}
