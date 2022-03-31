import { Image, Text, View } from "react-native"
import React from "react"
import { Article } from "../../../store/model/article"
import { styles } from "./style"
interface Props {
    article: Article
}
export const ArticleItem: React.FC<Props> = ({ article }) => {
    console.log(article)
    return <View style={styles.mainContainer}>
        <View style ={styles.imageContainer}>
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.titleText}numberOfLines={2}>{article.title}</Text>
            <Text style={styles.descriptionText} numberOfLines={3}>{article.description}</Text>
        </View>
    </View>
}