import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { appStyle, windowHeight, windowWidth } from '../../constants/AppStyle'
import FastImage from 'react-native-fast-image'
import { COLOR, ICON } from '../../constants/Theme'
import AppButton from '../../components/AppButton'
import { useNavigation } from '@react-navigation/native'

const Forgot_password = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={appStyle.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FastImage resizeMode="stretch" source={ICON.Back} style={appStyle.icon} />
      </TouchableOpacity>
      <View style={{ marginTop: windowHeight * 0.06, marginBottom: windowHeight * 0.04 }}>
        <Text style={appStyle.text24}>Forgot Password</Text>
        <Text style={[appStyle.text16, { color: COLOR.lightText, marginTop: 27 }]}>Enter your email address</Text>
      </View>

      {/* INPUT EMAIL */}
      <View style={[styles.viewRow]}>
        <View style={styles.rowbetween}>
          <FastImage tintColor={COLOR.primary} resizeMode="stretch" source={ICON.Mail} style={[appStyle.icon, { width: 26 }]} />
          <Text style={{ fontSize: 35, color: COLOR.lightText, fontWeight: '200' }}>|</Text>
        </View>
        <TextInput style={{ marginLeft: 25 }} placeholder="Email address" placeholderTextColor='#C1C7D0' fontSize={16} >
        </TextInput>
      </View>

      
      {/* BUTTON SIGN IN */}
      <View style={styles.next}>
        <AppButton
          icon={ICON.Next}
          width={70}
          height={70}
          borderRadius={35}
        />
      </View>

    </SafeAreaView>
  )
}

export default Forgot_password

const styles = StyleSheet.create({
  next: {
    marginLeft: 250,
    marginTop: 110
  },
  input: {
    marginLeft: 25,
    color: COLOR.text,
    width: windowWidth * 0.65
},
rowbetween: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-between'
},
viewRow: {
    width: windowWidth * 0.9,
    height: 50,
    marginTop: 20,
    borderColor: COLOR.grayText, 
    borderBottomWidth: 0.7,
    flexDirection: 'row',
    alignItems: 'center'
}
})