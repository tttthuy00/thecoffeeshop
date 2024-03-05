import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen8 = () => {
  return (
    <View style={style.container}>
      
      <View style={style.header}>  
        <View style={style.wellcomeuser}>
          <Text style={style.wellcome}>Wellcome</Text>
          <Text style={style.nameuser}>Anh Lộc</Text> 
        </View>

        <View style={style.buttoon_Buy_User}>
          <TouchableOpacity>
            <Image style={style.Profile} source={require('../src/img/Profile.png')}/>
          </TouchableOpacity>
          
          <Image style={style.Buy} source={require('../src/img/Buy.png')}/>
        </View>
      </View>
      

    <View style={style.body}>
      <View>
        <Text style={style.selectCoffe}>Select your coffee</Text>
      </View>
      <View style={style.productContainer}>
        <View style={style.box}>
          <View style={style.inner}>
            <Image style={style.item} source={require('../src/img/americano.png')} />
            <Text style={style.textItem}>americano</Text>
          </View>
        </View>

        <View style={style.box}>
          <View style={style.inner}>
            <Image style={style.item} source={require('../src/img/capuchino.png')} />
            <Text style={style.textItem}>espresso</Text>
          </View>
        </View>

        <View style={style.box}>
          <View style={style.inner}>
            <Image style={style.item} source={require('../src/img/lattee.png')} />
            <Text style={style.textItem}>lattee</Text>
          </View>
        </View>
        
        <View style={style.box}>
          <View style={style.inner}>
            <Image style={style.item} source={require('../src/img/flatwhilte.png')} />
            <Text style={style.textItem}>flatwhilte</Text>
          </View>
        </View>
      </View>

    </View>

    <View style={style.footer}>

    </View>
    </View>
  );
};

export default Screen8

    header:{
      
    },
    //Text chào người dùng
    wellcomeuser:{
      width:120,
      height: 27,
      flexShrink: 0,
      top: 35,
      left :20,
    },
    //style text chào
    wellcome:{
      color: '#D8D8D8',
      fontSize: 18,
    },
    //style text tên người dùng
    nameuser:{
      color: '#001833',
      fontSize :20,

    },
    //style 2 button
    buttoon_Buy_User:{
      left:280,
      
    },
    //button profile
    Profile:{
      left: 60,
      top: 24,
      
    },
    //button mua
    Buy:{

    },
    //phần thân 
    body:{
      width: '100%',
      height: '100%',
      top:35,
      borderRadius: 25,
      backgroundColor: '#324A59',
    },
    selectCoffe:{
      color: '#D8D8D8',
      fontSize: 18,
      top: 15,
      left: 13,
      padding:20,
      marginEnd:10
    },
    productContainer:{
      width:'100%',
      height:'85%',
      flexDirection:'row',
      flexWrap:'wrap',
    },
    box:{
      width:'50%',
      height:'30%',
      padding:6,
    },
    inner:{
      flex:1,
      backgroundColor: '#eee',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      marginVertical:5,
    },
    item:{
      margin:5,
    },
    textItem:{
      fontSize:15,
      color:'#001833',
    }

})