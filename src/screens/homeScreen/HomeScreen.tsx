import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { thunkGetArticles } from '../../store/redux/news-actions';
import { HomeList } from './homeComponents/list/List';
import { styles } from './style';
import { colors } from '../../utils/theme';

export const HomeScreen: React.FC = ({ }) => {

    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.sliceReducer.list);
    const errorMsg = useAppSelector((state) => state.sliceReducer.errorMsg);
    const isLoading = useAppSelector((state) => state.sliceReducer.isLoading);
    const [searchText, setSearchText] = useState('');

    const getData = useCallback((searchInput) => {
        dispatch(thunkGetArticles(searchInput));
    }, []);

    const onSearchTextChange = (text: string) => {
        setSearchText(text);
    }

    useEffect(() => {
        getData('');
    }, [getData])

    useEffect(() => {
        const identifier = setTimeout(() => {
            getData(searchText);
        }, 1000);
        return () => {
            clearTimeout(identifier);
        }
    }, [searchText])

    let currentDisplay;
    if (isLoading) {
        currentDisplay = <View style={styles.loadingContainer}><ActivityIndicator color={colors.secondaryColor} size='large'></ActivityIndicator></View>
    }
    else if (errorMsg != '') {
        currentDisplay = <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={styles.errorButtonContainer}>
                <Button onPress={getData} color={colors.secondaryColor} title='Try again'></Button>
            </View>
        </View>
    }
    else if (articles.length != 0) {
        currentDisplay = <HomeList articles={articles}></HomeList>
    }

    else {
        currentDisplay = <View style={styles.noDataContainer}><Text style={styles.noDataText}>Sorry there is no Data currently</Text></View>
    }


    return <View style={styles.mainContainer} >
        <TextInput
            value={searchText}
            onChangeText={onSearchTextChange}
            style={styles.searchInput} selectionColor={colors.white70}></TextInput>
        {currentDisplay}
    </View>
}

export const HOME_SCREEN_TAG = "Home";