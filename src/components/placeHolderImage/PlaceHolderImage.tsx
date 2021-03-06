import { Image, ImageStyle, StyleProp } from "react-native"
import React, { useState } from "react"
import { IMAGE_BASE_URL } from "../../utils/https";
interface Props {
    imageUrl: string,
    style: StyleProp<ImageStyle> | undefined
}
export const ImagWithPlaceHolder: React.FC<Props> = ({ imageUrl, style }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const onImageLoaded = () => {
        setIsLoaded(true);
    }
    let sourcImage;
    if (isLoaded && imageUrl != null) {
        sourcImage = { uri: IMAGE_BASE_URL+ imageUrl }
    }
    else {
        sourcImage = require('../../assets/placeholder.jpeg');
    }
    return <Image source={sourcImage} style={style} onLoad={({ nativeEvent: { source: { width, height, uri } } }) => { onImageLoaded() }} resizeMode='cover'></Image>

}