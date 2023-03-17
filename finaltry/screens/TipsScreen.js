import React from "react"
import { StyleSheet, ScrollView, View, Header, Text, Image, FlatList } from "react-native";
import Constants from 'expo-constants';
import Tip from "../Tip";
export default function TipsScreen() {
    const TipsData = [
        {
            id: '1',
            name: 'Diet',
            description: "A person's diet can have a significant impact on the health and appearance of their skin. Consuming a balanced diet that is rich in vitamins and minerals, such as vitamin C and E, zinc, and antioxidants, can help to protect and nourish the skin. On the other hand, a diet high in sugar and processed foods can cause inflammation and increase the risk of skin problems such as acne, wrinkles, and dullness. Additionally, staying hydrated by drinking plenty of water is crucial for maintaining healthy skin, as dehydration can lead to dryness and premature aging. Therefore, making dietary changes and adopting a healthy lifestyle can help to improve the overall health and appearance of the skin.",
        },  
        {   
            id: '2',
            name: 'Foods to Avoid',
            description: "There are several types of foods that can potentially cause acne breakouts. High-glycemic-index foods, such as white bread, sugary drinks, and pasta, can spike blood sugar levels and lead to inflammation, which can trigger acne. Dairy products, particularly skim milk, are also known to be associated with acne. This is because milk contains hormones that can stimulate oil glands and cause inflammation. Additionally, foods that are high in saturated and trans fats, such as fried foods and processed snacks, can cause an increase in sebum production, leading to clogged pores and acne. It's important to note that individual responses to these foods can vary, and it's best to consult with a healthcare professional if you're experiencing persistent acne breakouts.",
        },
        {
            id: '3',
            name: 'Skin Care',
            description: "A good skincare routine is essential to maintain healthy, clear, and youthful-looking skin. The first step is to cleanse your face twice daily with a gentle cleanser to remove dirt, oil, and impurities. After cleansing, apply a toner to balance your skin's pH levels and prep it for the next steps. Next, apply a serum to target specific concerns such as wrinkles, hyperpigmentation, or dehydration. Follow up with a moisturizer to keep your skin hydrated and protected from environmental stressors. Finally, don't forget to apply sunscreen daily to protect your skin from harmful UV rays. It's also important to exfoliate once or twice a week to remove dead skin cells and promote cell turnover. With a consistent and personalized skincare routine, you can achieve healthy, radiant skin at any age.",
        },
        {
            id: '4',
            name: 'Habits',
            description: "Good habits are essential for maintaining healthy, clear, and youthful-looking skin. The first habit is to stay hydrated by drinking plenty of water, which helps flush out toxins and keep your skin hydrated from the inside out. Eating a balanced diet rich in vitamins, minerals, and antioxidants can also help nourish and protect your skin. Getting enough sleep is another important habit, as lack of sleep can lead to dark circles, puffiness, and a dull complexion. Protecting your skin from the sun by wearing sunscreen, seeking shade, and wearing protective clothing is also crucial. Finally, avoiding smoking and excessive alcohol consumption can prevent premature aging and skin damage. By incorporating these good habits into your daily routine, you can achieve healthy, glowing skin that will last a lifetime.",
        },
        {
            id: '5',
            name: 'Well-being',
            description: "Well-being has a significant impact on achieving clear and healthy skin. Stress is a common trigger for acne and other skin conditions, so managing stress through relaxation techniques like meditation, yoga, or deep breathing can help promote clear skin. Regular exercise can also improve circulation and help regulate hormones that can affect the skin. Eating a balanced diet and staying hydrated can provide your skin with the essential nutrients it needs to maintain its health and radiance. Getting enough sleep is crucial, as lack of sleep can lead to inflammation and other skin issues. Taking care of your mental health and emotional well-being can positively impact your physical health and, in turn, contribute to clear and healthy skin.",
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
            <View style={styles.textbox}>
                <Text style={styles.title}>Skin Care Tips</Text>
            </View>
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
        marginTop: 20,
        padding: 10,
    },
    title: {
        marginBottom: 10,
        fontSize: 30,
        fontFamily: 'AvenirNext-DemiBold',
        color: 'black',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textbox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});