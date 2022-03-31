import { Image, Pressable, Text, View } from "react-native"
import React from "react"
import { Article } from "../../../store/model/article"
import { styles } from "./style"
import { ImagWithPlaceHolder } from "../../../components/placeHolderImage/PlaceHolderImage"
interface Props {
    article: Article
}
export const ArticleItem: React.FC<Props> = ({ article }) => {
    const onItemPress =()=>{

    }
    return <Pressable onPress={onItemPress}>
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <ImagWithPlaceHolder imageUrl={article.urlToImage} title={article.title}></ImagWithPlaceHolder>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.titleText} numberOfLines={1}>{article.title}</Text>
                <Text style={styles.descriptionText} numberOfLines={4}>{article.description}</Text>
            </View>
        </View>
    </Pressable>
}