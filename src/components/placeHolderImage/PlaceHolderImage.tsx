import { Image, ImageStyle, StyleProp } from "react-native"
import React, { useState } from "react"
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
        sourcImage = { uri: imageUrl }
    }
    else {
        sourcImage = require('../../assets/placeholder.jpeg');
    }
    return <Image source={sourcImage} style={style} onLoad={({ nativeEvent: { source: { width, height, uri } } }) => { onImageLoaded() }}></Image>

}