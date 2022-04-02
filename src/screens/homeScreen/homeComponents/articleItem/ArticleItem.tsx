import { Image, Pressable, Text, View } from "react-native"
import React from "react"
import { Article } from "../../../../store/model/article"
import { styles } from "./style"
import { ImagWithPlaceHolder } from "../../../../components/placeHolderImage/PlaceHolderImage"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { TabsParamList } from "../../../../../App"
import { useAppDispatch, useAppLang, useAppTheme } from "../../../../hooks"
import { setArticle } from "../../../../store/redux/article-slice"

interface Props {
    article: Article
}
export const ArticleItem: React.FC<Props> = ({ article }) => {
    const dispatch = useAppDispatch();
    const {theme} = useAppTheme();
    const {languageValues} = useAppLang();
    const navigation = useNavigation<NativeStackNavigationProp<TabsParamList>>();
    const onItemPress =()=>{
        dispatch(setArticle(article));
        navigation.navigate("ArticleDetails",{id:article.title});
    }
    let articleTitle = article.title;
    let articleDesciption = article.description;
    if(article.title === "" || article.title === null){
        articleTitle = "Soryy, There is no title Data"
    }
    if(article.description === "" || article.description === null){
        articleDesciption = "Sorry, There is no Description Data"
    }
    return <Pressable onPress={onItemPress}>
        <View style={[styles.mainContainer, {backgroundColor: theme.secondary}]}>
            <View style={styles.imageContainer}>
                <ImagWithPlaceHolder imageUrl={article.urlToImage} style={styles.image}></ImagWithPlaceHolder>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.titleText,{color:theme.textSecondary}]} numberOfLines={1}>{articleTitle}</Text>
                <Text style={[styles.descriptionText,{color:theme.textPrimart}]} numberOfLines={4}>{articleDesciption}</Text>
            </View>
        </View>
    </Pressable>
}