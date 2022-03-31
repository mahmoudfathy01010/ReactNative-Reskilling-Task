import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks';
import { thunkGetArticles } from '../store/redux/news-actions';
import { HomeList } from './homeComponents/List';
export const HomeScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.sliceReducer.list);
    useEffect(() => {
        dispatch(thunkGetArticles());
    }, [dispatch])
    return <View>
        {articles.length != 0 && <HomeList articles={articles}></HomeList>}
    </View>
}