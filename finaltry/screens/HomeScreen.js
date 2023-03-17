import { Text, StyleSheet, Image, View, Dimensions, Pressable } from "react-native";
import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TipsScreen from "./TipsScreen";
import CalendarScreen from "./CalendarScreen"
import Symptoms from "./Symptoms"

const HomeScreen = ({ navigation, TipsScreen, CalendarScreen }) => {

  return (
    <View style = {styles.main}>
      <Text style = {styles.title}>Welcome to AvoGlow</Text>


      <View style = {styles.space}>
        <View style = {styles.button}>
          <Pressable onPress={() => navigation.navigate('Symptoms')}>
            <Text style = {styles.text}>Symptoms</Text>
          </Pressable>
        </View> 
      </View> 

      <View style = {styles.space}>
        <View style = {styles.button}>
          <Pressable onPress={() => navigation.navigate('CalendarScreen')}>
            <Text style = {styles.text}>My Calendar</Text>
          </Pressable>
        </View> 
      </View>


      <View style = {styles.button}>
        <Pressable onPress={() => navigation.navigate('TipsScreen')}>
          <Text style = {styles.text}>Skin Care Tips</Text>
        </Pressable>
      </View> 


    </View>

  )
};

const Stack = createStackNavigator();

export default function NavigationSreens() {
  return (
  <NavigationContainer>
    <Stack.Navigator style={styles.container}>
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="TipsScreen" component={TipsScreen} style={styles.text} options={{
        title:'Skin Care Tips',
        headerStyle: {
          backgroundColor: '#F28482',
        },
        headerTintColor: 'white',
        }} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} style={styles.text} options={{
        title:'My Calendar',
        headerStyle: {
        backgroundColor: '#84A59D',
        },
        headerTintColor: 'white',
        }} />
      <Stack.Screen name="Symptoms" component={Symptoms} style={styles.text} options={{
        title:'Record Symptoms',
        headerStyle: {
        backgroundColor: '#F6BD60',
        },
        headerTintColor: 'white',
        }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#F5CAC3'

  },
  title: {
    fontSize: 25,
    fontFamily: 'AvenirNext-DemiBold',
    color: 'black',
    padding: 20,
  },
  text: {
    fontSize: 12,
    fontFamily: 'AvenirNext-Regular',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
  },
  space: {
    marginBottom: 15,
  },
  
  button: {
    padding: 15,
    width: 110,
    borderRadius: 1000,
    backgroundColor: '#F28482',

  }
})