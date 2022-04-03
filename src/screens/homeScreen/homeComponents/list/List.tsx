import { FlatList, RefreshControl, View } from "react-native"
import React, { useCallback, useState } from "react"
import { Movie } from "../../../../store/model/movie"
import { MovieItem } from "../movieItem/MovieItem"
import { styles } from "./style"
import { useAppDispatch } from "../../../../hooks"
import { thunkGetMovies } from "../../../../store/redux/news-actions"
interface Props {
    movies: Movie[],
    searchText: string
}
export const HomeList: React.FC<Props> = ({ movies,searchText }) => {
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useAppDispatch();

    const onRefresh = useCallback(() => {
        dispatch(thunkGetMovies(searchText, true));
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
            data={movies}
            renderItem={({ item }) => (<MovieItem movie={item}>
            </MovieItem>)}
            keyExtractor={item => item.id} ></FlatList>
    </View>
}