import { FlatList, RefreshControl, View } from "react-native"
import React, { useCallback, useState } from "react"
import { Article } from "../../../../store/model/article"
import { ArticleItem } from "../articleItem/ArticleItem"
import { styles } from "./style"
interface Props {
    articles: Article[]
}
export const HomeList: React.FC<Props> = ({ articles }) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return <View style={styles.mainContainer}>
        <FlatList
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            ></RefreshControl>}
            data={articles}
            renderItem={({ item }) => (<ArticleItem article={item}>
            </ArticleItem>)}
            keyExtractor={item => item.title} ></FlatList>
    </View>
}