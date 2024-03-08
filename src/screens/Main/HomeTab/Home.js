import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import { COLOR, ICON } from '../../../constants/Theme'
import FastImage from 'react-native-fast-image'
import data from '../../../testData/dataHome'
import Product from '../../../components/Product'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();

  const handleMyCart =()=>{
    navigation.navigate('MyCart');
  }
  return (
    <SafeAreaView style={[appStyle.container, { padding: 0 }]}>
      <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', height: windowHeight * 0.08, alignItems: 'center' }}>
        <View>
          <Text style={[appStyle.text16, { color: COLOR.lightText }]}>Welcome!</Text>
          <Text style={[appStyle.text20Bold, { color: COLOR.primary }]}>Alex</Text>
        </View>
        <TouchableOpacity onPress={()=>handleMyCart()}>
            <FastImage source={ICON.Cart} style={appStyle.iconBig} resizeMode='stretch' />
          </TouchableOpacity>
      </View>


      <View style={{ backgroundColor: COLOR.primary, width: '100%', height: '85%', borderRadius: 25, marginTop: 20 }}>
        <Text style={[appStyle.text20, { color: COLOR.grayText, margin: 15 }]}>Select your coffee</Text>
        <FlatList
          style={{ marginBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={data.DataHome}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item, data }) => <Product data={item} />}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})