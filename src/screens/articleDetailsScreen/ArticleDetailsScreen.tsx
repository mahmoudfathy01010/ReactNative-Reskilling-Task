import { ScrollView, Text, View } from "react-native";
import React from "react"
import { useAppLang, useAppSelector, useAppTheme } from "../../hooks";
import { styles } from "../articleDetailsScreen/style";
import { ImagWithPlaceHolder } from "../../components/placeHolderImage/PlaceHolderImage";
import   Moment  from "moment";
import { RouteProp, useRoute } from "@react-navigation/native";
import { TabsParamList } from "../../../App";
import { IMAGE_BASE_URL } from "../../utils/https";

type HomeRouteProp = RouteProp<TabsParamList, 'ArticleDetails'>


export const ArticleDetailsScreen = ({}) => {
    const route= useRoute<HomeRouteProp>();
    const {theme} = useAppTheme();
        console.log("Halaaaaaaaaaaaaaa"+route.params?.id)
    const {languageValues} = useAppLang();
    const article = useAppSelector((state) => state.articleReducer.article);
    Moment.locale('en');
    let articleTitle = article.title;
    let articleDesciption = article.overview;

    if(article.title === "" || article.title === null){
        articleTitle = "Soryy, There is no title Data"
    }
    if(article.overview === "" || article.overview === null){
        articleDesciption = "Sorry, There is no Description Data"
    }

    return <View style={[styles.mainContainer, {backgroundColor: theme.primary}]}>
        <ScrollView>
        <View style={styles.imageContainer}>
            <ImagWithPlaceHolder imageUrl={IMAGE_BASE_URL+ article.poster_path} style={styles.image}></ImagWithPlaceHolder>
        </View>
        <View style={styles.infoContainer}>
            <Text style={[styles.titleText,{color:theme.textPrimart}]}>{articleTitle}</Text>
            <View style={styles.metaContainer}>
            <Text style={[styles.autherText,{color:theme.accent}]}>{ languageValues.language+": "+article.original_language}</Text>
            <Text style={[styles.dateText,{color:theme.textSecondary}]}>{languageValues.date+": "+ Moment(article.release_date).format('MMMM Do YYYY') }</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.headerStyle,{color:theme.textSecondary}]}>{languageValues.description}</Text>
                <Text style={[styles.descriptionText,{color:theme.textSecondary}]}>{articleDesciption}</Text>
            </View>
        </View>
        </ScrollView>
    </View>
}
