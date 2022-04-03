import { Pressable, Text, View } from "react-native"
import React from "react"
import { Movie } from "../../../../store/model/movie"
import { styles } from "./style"
import { ImagWithPlaceHolder } from "../../../../components/placeHolderImage/PlaceHolderImage"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { TabsParamList } from "../../../../../App"
import { useAppTheme } from "../../../../hooks"

interface Props {
    movie: Movie
}
export const MovieItem: React.FC<Props> = ({ movie }) => {
    const {theme} = useAppTheme();
    const navigation = useNavigation<NativeStackNavigationProp<TabsParamList>>();
    const onItemPress =()=>{
        navigation.navigate("MovieDetails",{id:movie.id});
    }


    return <Pressable onPress={onItemPress}>
        <View style={[styles.mainContainer, {backgroundColor: theme.secondary}]}>
            <View style={styles.imageContainer}>
                <ImagWithPlaceHolder imageUrl={ movie.poster_path} style={styles.image}></ImagWithPlaceHolder>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.titleText,{color:theme.textSecondary}]} numberOfLines={1}>{movie.title}</Text>
                <Text style={[styles.descriptionText,{color:theme.textPrimary}]} numberOfLines={4}>{movie.overview}</Text>
            </View>
        </View>
    </Pressable>
}