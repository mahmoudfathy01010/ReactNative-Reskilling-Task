import {Text, View } from "react-native"
import React from "react"
import { Article } from "../../../store/model/article"
import { styles } from "./style"
interface Props {
    article: Article
}
export const ArticleItem: React.FC<Props> = ({article}) => {

    return <View style={styles.mainContainer}>
        <Text>{article.title}</Text>
    </View>
}