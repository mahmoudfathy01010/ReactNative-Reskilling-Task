import {Image, Text, View } from "react-native"
import React from "react"
import { Article } from "../../../store/model/article"
import { styles } from "./style"
interface Props {
    article: Article
}
export const ArticleItem: React.FC<Props> = ({article}) => {
    console.log(article)
    return <View style={styles.mainContainer}>
        <Text>{article.title}</Text>
        <Image source={{uri: article.urlToImage}} style={styles.image}/>
    </View>
}