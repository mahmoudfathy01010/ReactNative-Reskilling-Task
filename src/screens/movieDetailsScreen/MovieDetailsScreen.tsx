import { ActivityIndicator, Button, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect } from "react"
import { useAppLang, useAppSelector, useAppTheme } from "../../hooks";
import { styles } from "./style";
import { ImagWithPlaceHolder } from "../../components/placeHolderImage/PlaceHolderImage";
import Moment from "moment";
import { RouteProp, useRoute } from "@react-navigation/native";
import { TabsParamList } from "../../../App";
import { useDispatch } from "react-redux";
import { thunkGetMovieById } from "../../store/redux/news-actions";

type HomeRouteProp = RouteProp<TabsParamList, 'MovieDetails'>


export const MovieDetailsScreen = ({ }) => {
    const route = useRoute<HomeRouteProp>();
    const dispatch = useDispatch();
    const { theme } = useAppTheme();
    const movie = useAppSelector((state) => state.movieReducer.movie);
    const errorMsg = useAppSelector((state) => state.movieReducer.errorMsg);
    const isLoading = useAppSelector((state) => state.movieReducer.isLoading); const { languageValues } = useAppLang();
    Moment.locale('en');

    const getData = useCallback(() => {
        dispatch(thunkGetMovieById(route.params.id));
    }, [dispatch]);

    useEffect(() => {
        getData();
    }, [getData])

    let currentDisplay;
    if (isLoading) {
        currentDisplay = <View style={styles.loadingContainer}><ActivityIndicator size='large'></ActivityIndicator></View>
    }
    else if (errorMsg != '') {
        currentDisplay = <View style={styles.errorContainer}>
            <Text style={[styles.errorText,{color:theme.textPrimary}]}>{languageValues.detailsErrorMessage}</Text>
            <View style={styles.errorButtonContainer}>
                <Button onPress={getData} title={languageValues.tryAgain} color={theme.accent}></Button>
            </View>
        </View>
    }

    else if (movie != null) {
        currentDisplay = <ScrollView>
            <View style={styles.imageContainer}>
                <ImagWithPlaceHolder imageUrl={movie.poster_path} style={styles.image}></ImagWithPlaceHolder>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.titleText, { color: theme.textPrimary }]}>{movie.title}</Text>
                <View style={styles.metaContainer}>
                    <Text style={[styles.autherText, { color: theme.accent }]}>{languageValues.language + ": " + movie.original_language}</Text>
                    <Text style={[styles.dateText, { color: theme.textSecondary }]}>{languageValues.date + ": " + Moment(movie.release_date).format('MMMM Do YYYY')}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.headerStyle, { color: theme.textSecondary }]}>{languageValues.description}</Text>
                    <Text style={[styles.descriptionText, { color: theme.textSecondary }]}>{movie.overview}</Text>
                </View>
            </View>
        </ScrollView>
    }

    else {
        currentDisplay = <View style={styles.noDataContainer}><Text >{languageValues.detailsErrorMessage}</Text></View>
    }

    return <View style={[styles.mainContainer, { backgroundColor: theme.primary }]}>
        {currentDisplay}
    </View>
}
