import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Theme'
import { appStyle, windowHeight, windowWidth } from '../constants/AppStyle'
import FastImage from 'react-native-fast-image'

const Product = (props) => {
    const { data } = props;
    const { name, image } = data;
    return (
        <TouchableOpacity style={{ justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: COLOR.background, width: windowWidth * 0.4, height: windowHeight * 0.2, marginHorizontal: 20, marginVertical:12, borderRadius: 12 }}>
            <FastImage resizeMode='stretch' source={(source = data.image)} style={{ width: windowWidth * 0.3, height: windowHeight * 0.1, }} />
            <Text style={appStyle.text18}>{data.name}</Text>
        </TouchableOpacity>

    )
}

export default Product

const styles = StyleSheet.create({})