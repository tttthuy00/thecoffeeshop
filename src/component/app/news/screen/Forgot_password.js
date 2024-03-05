import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Forgot_password = () => {
  return (
    <View style={styles.container}>
            <Image
                source={require('../../../../media/images/ArrowLeft.png')}/>
            <View style={styles.form}>
              <Text style={styles.title}>Forgot Password?</Text>
              <Text style={styles.title1}>Enter your email address</Text>

              <View style={styles.form1}>
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
            </View>

            <View style={styles.next}>
                <Image style={styles.image1}
                    source={require('../../../../media/images/greenrectangle.png')}/>
                <Image style={styles.image2}
                    source={require('../../../../media/images/ArrowRight.png')}/>
            </View>  
        </View>
  )
}

export default Forgot_password

const styles = StyleSheet.create({
  next: {
    marginLeft: 250,
    marginTop: 110
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
  iconMes: {
    width: 18,
    height: 18
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