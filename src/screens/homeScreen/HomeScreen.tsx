import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput } from 'react-native'
import { useAppDispatch, useAppLang, useAppSelector, useAppTheme } from '../../hooks';
import { thunkGetMovies } from '../../store/redux/news-actions';
import { HomeList } from './homeComponents/list/List';
import { styles } from './style';
let isInitialized = false;
export const HomeScreen: React.FC = ({ }) => {
    const {theme} = useAppTheme();
    const dispatch = useAppDispatch();
    const movies = useAppSelector((state) => state.newsReducer.list);
    const errorMsg = useAppSelector((state) => state.newsReducer.errorMsg);
    const isLoading = useAppSelector((state) => state.newsReducer.isLoading);
    const [searchText, setSearchText] = useState('');
    const {languageValues} = useAppLang();

    const getData = useCallback((searchInput) => {
        dispatch(thunkGetMovies(searchInput));
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
            <Text style={[styles.errorText,{color:theme.textPrimary}]}>{languageValues.homeErrorMessage}</Text>
            <View style={styles.errorButtonContainer}>
                <Button onPress={getData}  title={languageValues.tryAgain} color={theme.accent}></Button>
            </View>
        </View>
    }
    else if (movies.length != 0) {
        currentDisplay = <HomeList searchText={searchText} movies={movies}></HomeList>
    }

    else {
        currentDisplay = <View style={styles.noDataContainer}><Text style={styles.noDataText}>{languageValues.noDataMessage}</Text></View>
    }


    return <View style={[styles.mainContainer, {backgroundColor: theme.primary}]} >
        <TextInput
            value={searchText}
            onChangeText={onSearchTextChange}
            style={[styles.searchInput,{color: theme.textPrimary, borderColor: theme.textSecondary}]} selectionColor={theme.textSecondary}></TextInput>
        {currentDisplay}
    </View>
}