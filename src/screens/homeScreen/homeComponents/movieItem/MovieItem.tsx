import { Pressable, Text, View } from "react-native"
import React from "react"
import { Movie } from "../../../../store/model/movie"
import { styles } from "./style"
import { ImagWithPlaceHolder } from "../../../../components/placeHolderImage/PlaceHolderImage"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { TabsParamList } from "../../../../../App"
import { useAppTheme } from "../../../../hooks"
import { IMAGE_BASE_URL } from "../../../../utils/https"

interface Props {
    movie: Movie
}
export const MovieItem: React.FC<Props> = ({ movie }) => {
    const {theme} = useAppTheme();
    const navigation = useNavigation<NativeStackNavigationProp<TabsParamList>>();
    const onItemPress =()=>{
        navigation.navigate("MovieDetails",{id:movie.id});
    }
    let movieTitle = movie.title;
    let movieDesciption = movie.overview;
    if(movie.title === "" || movie.title === null){
        movieTitle = "Soryy, There is no title Data"
    }
    if(movie.overview === "" || movie.overview === null){
        movieDesciption = "Sorry, There is no Description Data"
    }
    return <Pressable onPress={onItemPress}>
        <View style={[styles.mainContainer, {backgroundColor: theme.secondary}]}>
            <View style={styles.imageContainer}>
                <ImagWithPlaceHolder imageUrl={IMAGE_BASE_URL+ movie.poster_path} style={styles.image}></ImagWithPlaceHolder>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.titleText,{color:theme.textSecondary}]} numberOfLines={1}>{movieTitle}</Text>
                <Text style={[styles.descriptionText,{color:theme.textPrimart}]} numberOfLines={4}>{movieDesciption}</Text>
            </View>
        </View>
    </Pressable>
}