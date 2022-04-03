import { FlatList, RefreshControl, View } from "react-native"
import React, { useCallback, useState } from "react"
import { Movie } from "../../../../store/model/article"
import { ArticleItem } from "../articleItem/ArticleItem"
import { styles } from "./style"
import { useAppDispatch } from "../../../../hooks"
import { thunkGetArticles } from "../../../../store/redux/news-actions"
interface Props {
    articles: Movie[],
    searchText: string
}
export const HomeList: React.FC<Props> = ({ articles,searchText }) => {
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useAppDispatch();

    const onRefresh = useCallback(() => {
        dispatch(thunkGetArticles(searchText, true));
        setRefreshing(true);
        const indentifier = setTimeout(() => {
            setRefreshing(false);
        }, 2000);
        return()=>{
            clearTimeout(indentifier)
        }
    }, [searchText]);

    return <View style={styles.mainContainer}>
        <FlatList
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            ></RefreshControl>}
            data={articles}
            renderItem={({ item }) => (<ArticleItem article={item}>
            </ArticleItem>)}
            keyExtractor={item => item.id} ></FlatList>
    </View>
}