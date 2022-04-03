import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput } from 'react-native'
import { useAppDispatch, useAppSelector, useAppTheme } from '../../hooks';
import { thunkGetArticles } from '../../store/redux/news-actions';
import { HomeList } from './homeComponents/list/List';
import { styles } from './style';
let isInitialized = false;
export const HomeScreen: React.FC = ({ }) => {
    const {theme} = useAppTheme();
    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.newsReducer.list);
    const errorMsg = useAppSelector((state) => state.newsReducer.errorMsg);
    const isLoading = useAppSelector((state) => state.newsReducer.isLoading);
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
        if (isInitialized) {
            const identifier = setTimeout(() => {
                getData(searchText);
            }, 1000);
            return () => {
                clearTimeout(identifier);
            }
        }
        isInitialized = true
    }, [searchText])

    let currentDisplay;
    if (isLoading) {
        currentDisplay = <View style={styles.loadingContainer}><ActivityIndicator  size='large'></ActivityIndicator></View>
    }
    else if (errorMsg != '') {
        currentDisplay = <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={styles.errorButtonContainer}>
                <Button onPress={getData}  title='Try again'></Button>
            </View>
        </View>
    }
    else if (articles.length != 0) {
        currentDisplay = <HomeList searchText={searchText} articles={articles}></HomeList>
    }

    else {
        currentDisplay = <View style={styles.noDataContainer}><Text style={styles.noDataText}>Sorry, there is no data</Text></View>
    }


    return <View style={[styles.mainContainer, {backgroundColor: theme.primary}]} >
        <TextInput
            value={searchText}
            onChangeText={onSearchTextChange}
            style={[styles.searchInput,{color: theme.textPrimart, borderColor: theme.textSecondary}]} selectionColor={theme.textSecondary}></TextInput>
        {currentDisplay}
    </View>
}

export const HOME_SCREEN_TAG = "Home";