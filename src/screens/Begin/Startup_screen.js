import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { COLOR, ICON } from '../../constants/Theme'
import { appStyle, windowHeight, windowWidth } from '../../constants/AppStyle'
import { useNavigation } from '@react-navigation/native'

const Startup_screen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log(">>>>>>>>>click");
        navigation.navigate('Authorization');
    }
    return (
        <View style={[appStyle.container, {padding: 0}]}>
            <FastImage source={ICON.Start} style={{ width: '100%', height: '100%', position: 'absolute' }}></FastImage>
            <TouchableOpacity onPress={()=> handleLogin()} style={styles.buton}>
                <Text style={[appStyle.text20, { color: COLOR.text }]}>Next</Text>

            </TouchableOpacity>

        </View>
    )
}

export default Startup_screen

const styles = StyleSheet.create({
    buton: {
        width: 100,
        height: 50,
        backgroundColor: COLOR.lightText,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: windowHeight * 0.8
    },
    title: {
        top: 313,
        fontWeight: '500',
        fontSize: 52,
        lineHeight: 64,
        textAlign: 'center',
        height: 62,
        color: '#fff',
        position: 'relative'
    },
    image: {
        width: '100%',
        position: 'absolute'
    }
})