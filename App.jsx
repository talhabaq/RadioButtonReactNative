import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const App = () => {
  const [radio,setRadio]=useState(1)
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio} >
            {
              radio===1 ? <View style={styles.radiobg}></View> : null
            }
          </View>
          <Text style={styles.radiotext}>Radio 1</Text>
        </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>setRadio(2)}>
  <View style={styles.radioWrapper}>
          <View style={styles.radio} >
          {
              radio===2 ? <View style={styles.radiobg}></View> : null
            }
          </View>
          <Text style={styles.radiotext}>Radio 2</Text>
        </View>
  </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  radiotext: {
    fontSize: 20,
    color:'skyblue'
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 20,
    margin: 10
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  radiobg:{
    backgroundColor:"skyblue",
    height:28,
    width:28,
    borderRadius:20,
    margin:4
  
  }
})


export default App
