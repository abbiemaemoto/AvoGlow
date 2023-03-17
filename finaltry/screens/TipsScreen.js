import React from "react"
import { StyleSheet, ScrollView, View, Header, Text, Image, FlatList } from "react-native";
import Constants from 'expo-constants';
import Tip from "../Tip";
// import assets from "../";
export default function TipsScreen() {
    const TipsData = [
        {
            id: '1',
            name: 'Diet',
            description: "add description here",
//             imageUrl: assets.apple,
        },  
        {   
            id: '2',
            name: 'Foods to Avoid',
            description: "add description here",
//             imageUrl: assets.butter,
        },
        {
            id: '3',
            name: 'Skin Care',
            description: "add description here",
//             imageUrl: assets.skincare,
        },
        {
            id: '4',
            name: 'Habits',
            description: "add description here",
//             imageUrl: assets.habits,
        },
        {
            id: '5',
            name: 'Wellbeing',
            description: "add description here",
//             imageUrl: assets.healthcare,
        },
    ];

    const renderTip = ({ item }) => (
        <Tip
        id={item.id}
        name={item.name}
        description={item.description}

    />
    );
    
    return (
        <View style={styles.container}>
            <FlatList
            data={TipsData} 
            renderItem={(item) => renderTip(item)}
            keyExtractor={(item) => item.id}
            />
        </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 10,
  },
});