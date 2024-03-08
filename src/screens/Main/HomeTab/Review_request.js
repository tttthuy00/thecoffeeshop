import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import React, {useState} from 'react'

const Review_request = () => {
  const [defaultRating, setdefaultRating] = useState(1)
  const [maxRating, setmaxRating] = useState([1,2,3,4,5])

  const startImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const startImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
  
  const CustomRatingBar = () => {
    return (
      <View style={styles.container}>
        <View style={styles.rectangle}>
          <Text style={styles.title}>The order has been</Text>
          <Text style={styles.title1}>completed.</Text>
          <Text style={styles.title2}>Please, rate the service.</Text>
  
          <View style={styles.rectangle1}>
            <Text></Text>
          </View>
  
          <View style={styles.customRatingBarStyle}>
            {
              maxRating.map((item, key) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    onPress={() => setdefaultRating(item)}
                    >
                    <Image
                      style={styles.startImgStyle}
                      source={
                        item <= defaultRating ? {uri: startImgFilled} : {uri: startImgCorner}
                      }
                    />
                  </TouchableOpacity>
                )
              })
            }
          </View>

          <View style={styles.rectangle2}>
            <Text></Text>
          </View>

          <Text style={styles.title3}>Remind me later</Text>

          <View style={styles.rectangle1}>
            <Text></Text>
          </View>

          <Text style={styles.title3}>No, thanks</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomRatingBar/>
    </SafeAreaView>
  )
}

export default Review_request

const styles = StyleSheet.create({
  rectangle2: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.36)',
    marginTop: 12
  },
  title3: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.38,
    color: '#000000',
    marginTop: 18
  },
  startImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    margin: 8
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8
  },
  rectangle1: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(60, 60, 67, 0.36)',
    marginTop: 16
  },
  title2: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.38,
    color: '#000000'
  },
  title1: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
    color: '#000000'
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
    color: '#000000',
    marginTop: 18
  },
  rectangle: {
    width: '100%',
    height: 308,
    backgroundColor: '#fff',
    borderRadius: 13,
    alignItems: 'center',
    // marginTop: 210
  },
  container: {
    flex: 0.425,
    backgroundColor: '#324A59',
    padding: 8
  }
})