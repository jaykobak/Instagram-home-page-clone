import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      {/* App header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Instagram heading */}
        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', marginTop: 50, marginLeft: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>Instagram</Text>
          <Image source={require('../assets/images/expand-arrow.png')} style={{ width: 15, height: 15, marginTop: 15, marginLeft: 7 }}/>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 50, marginRight: 20, alignItems: 'center' }}>
          {/* Heart icon with red dot */}
          <TouchableOpacity activeOpacity={0.6} style={{ position: 'relative' }}>
            <Image source={require('../assets/images/heart.png')} style={{ width: 25, height: 25 }}/>
            <View style={ styles.red_dot }></View>
          </TouchableOpacity>
          {/* Messaging icon with red dot */}
          <TouchableOpacity activeOpacity={0.6} style={{ position: 'relative', marginLeft: 30 }}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1532/1532430.png' }} style={{ width: 25, height: 25 }}/>
            <View style={ styles.red_dot }></View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Status section */}
      <View style={{ marginTop: 50 }}>
        {/* My status section */}
        <TouchableOpacity>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.6j2u37AjTo_Cg9_nbyUCyQHaGw?w=197&h=180&c=7&r=0&o=5&pid=1.7' }} style={{ width: 110, height: 110, borderRadius: 110 }}/>
          {/* Plus icon */}
          <Image/>
        </TouchableOpacity>
      </View>

      {/* Home feed */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  red_dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    top: -2,
    right: -2,
  },
})