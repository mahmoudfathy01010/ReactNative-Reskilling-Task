import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { thunkGetArticles } from '../../store/redux/news-actions';
import { HomeList } from './homeComponents/List';
import { styles } from '../style';

export const HomeScreen: React.FC = ({}) => {

    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.sliceReducer.list);

    useEffect(() => {
        dispatch(thunkGetArticles());
    }, [dispatch])
    
    return <View style ={styles.mainContainer} >
        {articles.length != 0 && <HomeList articles={articles}></HomeList>}
    </View>
}

export const HOME_SCREEN_TAG = "Home";