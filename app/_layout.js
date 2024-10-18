import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import userData from './status_section_db'

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
      <View style={{ marginTop: 40, marginLeft: 25 }}>
        {/* My status section */}
        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'column' }}>
          <View style={{ width: 80, height: 80 }}>
            <Image source={{ uri: 'https://th.bing.com/th/id/OIP.6j2u37AjTo_Cg9_nbyUCyQHaGw?w=197&h=180&c=7&r=0&o=5&pid=1.7' }} style={{ width: 80, height: 80, borderRadius: 55 }}/>
            {/* Plus icon */}
            <View style={ styles.plus_icon }>
              <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/plus-math.png' }} style={{ width: 20, height: 20 }}/>
            </View>
            <View>
              <Text style={{ textAlign: 'center', paddingTop: 10, fontSize: 12, fontWeight: '500' }}>Your story</Text>
            </View>
          </View>
          {/* Subtitle name */}
          
        </TouchableOpacity>

        {/* Other statuses */}
        <FlatList
                data={userData}
                showsVerticalScrollIndicator={false}
                // horizontal={true}
                // numColumns={3}
                // columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7} style={[styles.container, { backgroundColor: 'red' }]}>
                            <Text>THIS IS SI S IS II</Text>
                        </TouchableOpacity>
                    )
                }}
            />
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

  plus_icon: {
    position: 'absolute',
    bottom: 0, 
    right: 0,
    backgroundColor: '#1DA1F2',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})