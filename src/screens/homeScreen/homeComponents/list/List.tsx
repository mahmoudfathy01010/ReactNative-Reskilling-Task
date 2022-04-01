import { FlatList, Text, View } from "react-native"
import React from "react"
import { Article } from "../../../../store/model/article"
import { ArticleItem } from "../articleItem/ArticleItem"
import { styles } from "./style"
interface Props {
    articles: Article[]
}
export const HomeList: React.FC<Props> = ({ articles }) => {

    return <View style={styles.mainContainer}>
        <FlatList data={articles}
            renderItem={({ item }) => (<ArticleItem article={item}>
            </ArticleItem>)}
            keyExtractor={item => item.title} ></FlatList>
    </View>
}