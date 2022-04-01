import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { thunkGetArticles } from '../../store/redux/news-actions';
import { HomeList } from './homeComponents/List';
import { styles } from '../style';
import { colors } from '../../utils/theme';

export const HomeScreen: React.FC = ({ }) => {

    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.sliceReducer.list);
    const errorMsg = useAppSelector((state) => state.sliceReducer.errorMsg);

    useEffect(() => {
        dispatch(thunkGetArticles());
    }, [dispatch])

    let currentDisplay;
    if (errorMsg != '') {
        currentDisplay = <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMsg}</Text>
            <View style={styles.errorButtonContainer}>
                <Button color={colors.secondaryColor} title='Try again'></Button>
            </View>
        </View>
    }
    else if (articles.length != 0) {
        currentDisplay = <HomeList articles={articles}></HomeList>
    }
    else {
        currentDisplay = <Text>Loading...</Text>
    }

    return <View style={styles.mainContainer} >
        {currentDisplay}
    </View>
}

export const HOME_SCREEN_TAG = "Home";