import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Two_factor_verification = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../media/images/ArrowLeft.png')}/>
            <View style={styles.form}>
                <Text style={styles.title}>Verification</Text>
                <Text style={styles.title1}>Enter the OTP code we sent you</Text>
            </View>   
            <View style={styles.form1}>
                <TextInput
                    style={styles.input}/>
                <TextInput
                    style={styles.input}/>
                <TextInput
                    style={styles.input}/>
                <TextInput
                    style={styles.input}/>
            </View>

            <Text style={styles.time}>Resend in 00:30</Text>

            <View style={styles.next}>
                <Image style={styles.image1}
                    source={require('../../../../media/images/greenrectangle.png')}/>
                <Image style={styles.image2}
                    source={require('../../../../media/images/ArrowRight.png')}/>
            </View> 
        </View>
    )
}

export default Two_factor_verification 

const styles = StyleSheet.create({
    next: {
        marginLeft: 250,
        marginTop: 50
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
    time: {
        textAlign: 'center',
        marginTop: 40,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 27.25,
        color: '#AAAAAA'
    },
    form1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 40
    },
    input: {
        width: 48,
        height: 61,
        marginTop: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: '#F7F8FB',
        borderRadius: 10,
        textAlign: 'center',
        borderColor: '#000000'
    },
    title1: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 27.25,
        color: '#AAAAAA',
        marginTop: 20
    },
    title: {
        fontWeight: '500',
        fontSize: 22,
        lineHeight: 33,
        color: '#181D2D',
        marginTop: 48
    },
    form: {
        left: 15
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 26
    }
})