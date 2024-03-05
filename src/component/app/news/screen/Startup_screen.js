import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Startup_screen = () => {
    return (
        <View>
            <Image style={styles.image}
                source={require('../../../../media/images/image.png')}/>
            <Image style={styles.image}
                source={require('../../../../media/images/image.png')}/>
            <Text style={styles.title}>Magic Coffee</Text>    
        </View>
    )
}

export default Startup_screen 

const styles = StyleSheet.create({
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