import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rectangle}>
                <Image style={styles.image}
                    source={require('../../../../media/images/greenrectangle.png')}/>
                <Image style={styles.image3}
                    source={require('../../../../media/images/Vector.png')}/>   
                <Text style={styles.title}>Magic Coffee</Text>
            </View>

            <Text style={styles.cap}>Feel yourself like</Text>
            <Text style={styles.cap}>a barista!</Text>
            <Text style={styles.cap1}>Magic coffee on order.</Text>

            <Pressable >

                <View style={styles.next}>
                    <Image style={styles.image1}
                        source={require('../../../../media/images/greenrectangle.png')}/>
                    <Image style={styles.image2}
                        source={require('../../../../media/images/ArrowRight.png')}/>
                </View>
            </Pressable>

        </View>
    )
}

export default Welcome 

const styles = StyleSheet.create({
    rectangle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    image3: {
        width: 400,
        height: 340,
        marginTop: 80
    },
    next: {
        marginLeft: 300,
        marginTop: 100
    },
    image2: {
        position: 'relative',
        marginTop: 22,
        marginLeft: 20
    },
    image1: {
        position: 'absolute',
        width: 64,
        height: 64,
        borderRadius: 100
    },
    cap1: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 35.03,
        textAlign: 'center',
        color: '#AAAAAA'
    },
    cap: {
        // fontFamily: 'op',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 42,
        textAlign: 'center',
        color: '#181D2D'
    },
    title: {
        fontWeight: '500',
        fontSize: 52,
        lineHeight: 64,
        height: 62,
        color: '#fff',
        position: 'absolute',
        top: 300
    },
    image: {
        width: 400,
        height: 350,
        marginTop: 90,
        position: 'absolute'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})