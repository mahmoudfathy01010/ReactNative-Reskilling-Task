import { Image } from "react-native"
import React, { useState } from "react"
import { styles } from "./style";
interface Props {
    imageUrl: string,
    title: string
}
export const ImagWithPlaceHolder: React.FC<Props> = ({ imageUrl, title }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const onImageLoaded = () => {
        setIsLoaded(true);
    }
    let sourcImage;
    if (isLoaded && imageUrl != null) {
        sourcImage = { uri: imageUrl }
    }
    else {
        sourcImage = require('../../assets/placeholder.jpeg');
    }
    return <Image source={sourcImage} style={styles.image} onLoad={({ nativeEvent: { source: { width, height, uri } } }) => { onImageLoaded() }}></Image>

}