import { Button, StyleSheet, Text, View,Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const newtab = () => {
  const Handlepress=()=>{
    alert("button is presses");
  }
  return (
    <View>

      <TouchableOpacity activeOpacity={0.5}>
      <Text style={styles.mytext}>TouchableOpacity</Text>
      </TouchableOpacity>
    <Pressable style={styles.Press1} onPress={Handlepress}>
      <Text style={styles.mytext}>Submit</Text>
      </Pressable>
      
      <Button title="Press Me" onPress={()=>alert('Button pressed')}></Button>
     <Image style={styles.imagestyle}source={{uri:'https://avatar.iran.liara.run/public/boy'}}/>
    
    </View>
  )
}

export default newtab

const styles = StyleSheet.create({
Press1:
{
padding:10,
backgroundColor:'beige',
},
mytext:{
  flex:1,
  color:'white',
  backgroundColor:'darkblue',
  alignItems:'center',
  justifyContent:'center',
  padding:20,
},
imagestyle:{
  width:150,
  height:140,
  marginBottom:20,
}

});