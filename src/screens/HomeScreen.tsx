import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { useAppDispatch } from '../hooks';
import { thunkGetArticles } from '../store/redux/news-actions';
export const HomeScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(thunkGetArticles);
    }, [dispatch])
    return <View>
        <Text>
            Hello World
        </Text>
    </View>
}