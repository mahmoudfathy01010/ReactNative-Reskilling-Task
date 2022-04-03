import { ActivityIndicator, Button, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect } from "react"
import { useAppLang, useAppSelector, useAppTheme } from "../../hooks";
import { styles } from "../articleDetailsScreen/style";
import { ImagWithPlaceHolder } from "../../components/placeHolderImage/PlaceHolderImage";
import   Moment  from "moment";
import { RouteProp, useRoute } from "@react-navigation/native";
import { TabsParamList } from "../../../App";
import { IMAGE_BASE_URL } from "../../utils/https";
import { useDispatch } from "react-redux";
import { thunkGetMovieById } from "../../store/redux/news-actions";

type HomeRouteProp = RouteProp<TabsParamList, 'ArticleDetails'>


export const ArticleDetailsScreen = ({}) => {
    const route= useRoute<HomeRouteProp>();
    const dispatch = useDispatch();
    const {theme} = useAppTheme();
    const movie = useAppSelector((state) => state.movieReducer.movie);
    const errorMsg = useAppSelector((state) => state.movieReducer.errorMsg);
    const isLoading = useAppSelector((state) => state.movieReducer.isLoading);    const {languageValues} = useAppLang();
    Moment.locale('en');

    const getData = useCallback(() => {
        dispatch(thunkGetMovieById(route.params.id));
    }, [dispatch]);

    useEffect(() => {
        getData();
    }, [getData])

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

    else if (movie!= null) {
        currentDisplay =  <ScrollView>
        <View style={styles.imageContainer}>
            <ImagWithPlaceHolder imageUrl={IMAGE_BASE_URL+ movie.poster_path} style={styles.image}></ImagWithPlaceHolder>
        </View>
        <View style={styles.infoContainer}>
            <Text style={[styles.titleText,{color:theme.textPrimart}]}>{movie.title}</Text>
            <View style={styles.metaContainer}>
            <Text style={[styles.autherText,{color:theme.accent}]}>{ languageValues.language+": "+movie.original_language}</Text>
            <Text style={[styles.dateText,{color:theme.textSecondary}]}>{languageValues.date+": "+ Moment(movie.release_date).format('MMMM Do YYYY') }</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.headerStyle,{color:theme.textSecondary}]}>{languageValues.description}</Text>
                <Text style={[styles.descriptionText,{color:theme.textSecondary}]}>{movie.overview}</Text>
            </View>
        </View>
        </ScrollView>
    }

    else {
        currentDisplay = <View style={styles.noDataContainer}><Text >Sorry, there is no data</Text></View>
    }


    // let articleTitle = article.title;
    // let articleDesciption = article.overview;

    // if(article.title === "" || article.title === null){
    //     articleTitle = "Soryy, There is no title Data"
    // }
    // if(article.overview === "" || article.overview === null){
    //     articleDesciption = "Sorry, There is no Description Data"
    // }

    return <View style={[styles.mainContainer, {backgroundColor: theme.primary}]}>
       {currentDisplay}
    </View>
}
