import {Text, View } from "react-native"
import React from "react"
import { Article } from "../../store/model/article"
interface Props {
    article: Article
}
export const ArticleItem: React.FC<Props> = ({article}) => {

    return <View>
        <Text>{article.title}</Text>
    </View>
}