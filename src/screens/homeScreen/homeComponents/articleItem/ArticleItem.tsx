import { Image, Pressable, Text, View } from "react-native"
import React from "react"
import { Article } from "../../../../store/model/article"
import { styles } from "./style"
import { ImagWithPlaceHolder } from "../../../../components/placeHolderImage/PlaceHolderImage"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../../../App"
import { useAppDispatch } from "../../../../hooks"
import { setArticle } from "../../../../store/redux/article-slice"
interface Props {
    article: Article
}
export const ArticleItem: React.FC<Props> = ({ article }) => {
    const dispatch = useAppDispatch();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const onItemPress =()=>{
        dispatch(setArticle(article));
        navigation.navigate('ArticleDetails');
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
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <ImagWithPlaceHolder imageUrl={article.urlToImage} title={article.title}></ImagWithPlaceHolder>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.titleText} numberOfLines={1}>{articleTitle}</Text>
                <Text style={styles.descriptionText} numberOfLines={4}>{articleDesciption}</Text>
            </View>
        </View>
    </Pressable>
}