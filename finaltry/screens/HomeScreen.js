import { Text, StyleSheet, Image, View, Dimensions, Pressable } from "react-native";
import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen({ TipsScreen, CalendarScreen }) {
  const navigation = useNavigation()
  return (
    <View style = {styles.main}>
      <Text style = {styles.title}>Welcome to AvoGlow</Text>
      <View style = {styles.button}>
        <Pressable onPress={() => navigation.navigate('TipsScreen')}>
          <Text style = {styles.text}>Skin Care Tips</Text>
        </Pressable>
      </View> 
        
    </View>

  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'black',
    padding: 20,
  },
  text: {
    fontSize: 10,
  },
  button: {
    padding: 10,
    borderRadius: 1000,
    backgroundColor: 'blue',

  }
})