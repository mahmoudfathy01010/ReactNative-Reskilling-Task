import { FlatList, Text, View } from "react-native"
import React from "react"
import { Article } from "../../store/model/article"
interface Props {
    articles: Article[]
}
export const HomeList: React.FC<Props> = ({articles}) => {

    return <View>
        <FlatList data={articles}
            renderItem={({ item }) => (<Text>
                {item.title}
            </Text>)}
            keyExtractor={item => item.title} ></FlatList>
    </View>
}