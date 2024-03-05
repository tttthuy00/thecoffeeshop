import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Registration = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../media/images/ArrowLeft.png')}/>
            <View style={styles.form}>
                <Text style={styles.title}>Sign up</Text>
                <Text style={styles.title1}>Create an account here</Text>

                <View style={styles.form1}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.iconMes}
                            source={require('../../../../media/images/Profile.png')}/>
                        <View style={styles.rectangle}>
                            <Text></Text>
                        </View>
                    </View>
                    <TextInput style={styles.input}
                            placeholder='Create an account here'>
                    </TextInput>
                </View>
                <View style={styles.rectangle1}>
                            <Text></Text>
                </View>

                <View style={styles.form2}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.iconsdt}
                            source={require('../../../../media/images/sdt.png')}/>
                        <View style={styles.rectangle3}>
                            <Text></Text>
                        </View>
                    </View>
                    <TextInput style={styles.input1}
                        placeholder='Mobile Number'>
                    </TextInput>
                </View>
                <View style={styles.rectangle1}>
                    <Text></Text>
                </View>

                <View style={styles.form2}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.iconMes}
                            source={require('../../../../media/images/Message.png')}/>
                        <View style={styles.rectangle}>
                            <Text></Text>
                        </View>
                    </View>

                    <TextInput style={styles.input}
                        placeholder='Email address'>
                    </TextInput>
                </View>
                <View style={styles.rectangle1}>
                    <Text></Text>
                </View>

                <View style={styles.form2}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.iconLock}
                            source={require('../../../../media/images/Lock.png')}/>
                        <View style={styles.rectangle3}>
                            <Text></Text>
                        </View>
                    </View>
                    <TextInput style={styles.input1}
                        placeholder='Password'>
                    </TextInput>
                    <Image style={styles.iconShow}
                        source={require('../../../../media/images/Show.png')}/>
                </View>
                <View style={styles.rectangle1}>
                    <Text></Text>
                </View>

                <View style={styles.forgot}>
                    <Text style={styles.title2}>By signing up you agree with our Terms of Use</Text>
                </View>
            </View>

            <View style={styles.next}>
                <Image style={styles.image1}
                    source={require('../../../../media/images/greenrectangle.png')}/>
                <Image style={styles.image2}
                    source={require('../../../../media/images/ArrowRight.png')}/>
            </View>   

            <View style={styles.form3}>
                <Text style={styles.title3}>Already a member?</Text>
                <Text style={styles.title4}>Sign in</Text>
            </View>
        </View>
    )
}

export default Registration 

const styles = StyleSheet.create({
    input1: {
        marginTop: 12,
        backgroundColor: '#fff',
        color: '#C1C7D0',
        left: 36
    },
    rectangle3: {
        width: 1,
        height: 32,
        backgroundColor: '#C1C7D0',
        left: 16
    },
    iconsdt: {
        width: 12.6,
        height: 18
    },
    title4: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 27.25,
        color: '#324A59',
        marginLeft: 4
    },
    title3: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 27.25,
        color: '#AAAAAA'
    },
    form3: {
        flexDirection: 'row',
        marginTop: 70,
        padding: 14
    },
    next: {
        marginLeft: 250,
        marginTop: 30
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
    title2: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 23.35,
        color: '#324A59'
    },
    rectangle2: {
        width: 120,
        height: 1,
        backgroundColor: '#000000'
    },
    forgot: {
        alignItems: 'center',
        marginTop: 32
    },
    iconLock: {
        width: 15.16,
        height: 18.13
    },
    iconMes: {
        width: 18,
        height: 18
    },
    iconShow: {
        marginLeft: 150,
        marginTop: 30,
        width: 18,
        height: 14.5
    },
    form2: {
        flexDirection: 'row',
        left: 2
    },
    rectangle1: {
        width: 300,
        height: 1,
        backgroundColor: '#C1C7D0',
        marginRight: 20
    },
    rectangle: {
        width: 1,
        height: 32,
        backgroundColor: '#C1C7D0',
        marginLeft: 12
    },
    form1: {
        marginTop: 36,
        flexDirection: 'row'
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center'
    },
    input: {
        marginTop: 12,
        backgroundColor: '#fff',
        color: '#C1C7D0',
        marginLeft: 20
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
        padding: 14
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 26
    }
})