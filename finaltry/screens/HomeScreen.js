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
      <View style = {styles.button}>
        <Pressable onPress={() => navigation.navigate('TipsScreen')}>
          <Text style = {styles.text}>Skin Care Tips</Text>
        </Pressable>
      </View> 
      <View style = {styles.button}>
        <Pressable onPress={() => navigation.navigate('CalendarScreen')}>
          <Text style = {styles.text}>My Calendar</Text>
        </Pressable>
      </View> 
      <View style = {styles.button}>
        <Pressable onPress={() => navigation.navigate('Symptoms')}>
          <Text style = {styles.text}>Record Symptoms</Text>
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
          backgroundColor: "white",
        },
        headerTintColor: "black",
        }} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} style={styles.text} options={{
        title:'My Calendar',
        headerStyle: {
        backgroundColor: "white",
        },
        headerTintColor: "black",
        }} />
      <Stack.Screen name="Symptoms" component={Symptoms} style={styles.text} options={{
        title:'Record Symptoms',
        headerStyle: {
        backgroundColor: "white",
        },
        headerTintColor: "black",
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