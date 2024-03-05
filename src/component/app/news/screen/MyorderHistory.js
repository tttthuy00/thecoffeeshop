import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const MyorderHistory = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Order</Text>

      <View style={styles.form}>
        <Pressable onPress={() => navigation.navigate('Current')}>
          <View>
            <Text style={styles.ongoing}>On going</Text>
            <View style={styles.rectangle1}>
              <Text></Text>
            </View>
          </View>
        </Pressable>

        <View>
          <Text style={styles.history}>History</Text>
          <View style={styles.rectangle}>
            <Text></Text>
          </View>
        </View>
      </View>

      <View style={styles.rectangle2}>
        <Text></Text>
      </View>

      <View style={styles.form2}>
        <View>
          <Text style={styles.title1}>24 June | 12:30 PM</Text>
          <View style={styles.form1}>
            <Image style={styles.image}
              source={require('../../../../media/images/iconcup.png')} />
            <Text style={styles.title2}>Americano</Text>
          </View>

          <View style={styles.form1}>
            <Image style={styles.image}
              source={require('../../../../media/images/iconaddress.png')} />
            <Text style={styles.title2}>Bradford BD1 1PR</Text>
          </View>
        </View>

        <View style={styles.form3}>
          <Text style={styles.title3}>BYN 3.00</Text>
          <View style={styles.rectangle4}>
            <Pressable onPress={() => navigation.navigate('Report')}>
              <Text style={styles.butOrder}>Order</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.rectangle3}>
        <Text></Text>
      </View>

      <View style={styles.form2}>
        <View>
          <Text style={styles.title1}>24 June | 12:30 PM</Text>
          <View style={styles.form1}>
            <Image style={styles.image}
              source={require('../../../../media/images/iconcup.png')} />
            <Text style={styles.title2}>Americano</Text>
          </View>

          <View style={styles.form1}>
            <Image style={styles.image}
              source={require('../../../../media/images/iconaddress.png')} />
            <Text style={styles.title2}>Bradford BD1 1PR</Text>
          </View>
        </View>

        <View style={styles.form3}>
          <Text style={styles.title3}>BYN 3.00</Text>
          <View style={styles.rectangle4}>
            <Text style={styles.butOrder}>Order</Text>
          </View>
        </View>
      </View>

      <View style={styles.rectangle3}>
        <Text></Text>
      </View>
    </View>
  )
}

export default MyorderHistory

const styles = StyleSheet.create({
  butOrder: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 10
  },
  rectangle4: {
    width: 76,
    height: 42,
    backgroundColor: '#324A59',
    marginTop: 20,
    borderRadius: 20
  },
  form3: {
    marginLeft: 'auto'
  },
  rectangle3: {
    width: '100%',
    height: 1,
    backgroundColor: '#F4F5F7',
    marginTop: 20
  },
  form2: {
    flexDirection: 'row',
    marginTop: 40
  },
  title3: {
    color: '#324A59',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24
  },
  image: {
    width: 18,
    height: 18
  },
  form1: {
    flexDirection: 'row',
    marginTop: 20
  },
  title2: {
    color: '#324A59',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 8
  },
  title1: {
    color: 'rgba(50, 74, 89, 0.22)',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15
  },
  rectangle2: {
    width: 375,
    height: 1,
    backgroundColor: '#F4F5F7',
    marginTop: 1
  },
  rectangle1: {
    width: 93,
    height: 2,
    backgroundColor: '#fff',
    marginTop: 20
  },
  history: {
    color: '#001833',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 20,
    textAlign: 'center'
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  rectangle: {
    width: 93,
    height: 2,
    backgroundColor: '#324A59',
    marginTop: 20
  },
  ongoing: {
    color: '#D8D8D8',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 20,
    textAlign: 'center'
  },
  title: {
    color: '#001833',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26
  }
})